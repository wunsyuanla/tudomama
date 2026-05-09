// Vercel Serverless Function - 使用Google Gemini API
export default async function handler(req, res) {
  // 設定CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // 處理OPTIONS請求
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // 只接受POST請求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // 從環境變數取得API Key
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return res.status(500).json({ error: 'API Key未設定' });
    }

    const { system, messages } = req.body;

    // 組合完整的prompt(Gemini不支援分離的system message)
    const userMessage = messages[0].content;
    const fullPrompt = `${system}\n\n${userMessage}`;

    // 呼叫Google Gemini API
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: fullPrompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1000
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Gemini API錯誤:', data);
      return res.status(response.status).json(data);
    }

    // 轉換Gemini格式為Anthropic格式(保持前端相容)
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '無法取得回覆';
    
    const anthropicFormat = {
      content: [
        {
          type: 'text',
          text: text
        }
      ]
    };

    return res.status(200).json(anthropicFormat);

  } catch (error) {
    console.error('伺服器錯誤:', error);
    return res.status(500).json({ error: '伺服器錯誤: ' + error.message });
  }
}
