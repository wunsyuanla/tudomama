# 健康管理助理 PWA

你的專屬AI健康管理助理,可安裝到手機桌面的漸進式網頁應用。

## 📦 檔案清單

```
pwa-demo/
├── index.html           # PWA安裝引導頁
├── app.html             # 主應用程式
├── manifest.json        # PWA設定檔
├── service-worker.js    # 離線快取
├── icon-192.png         # APP圖示 192x192 (需要準備)
├── icon-512.png         # APP圖示 512x512 (需要準備)
└── icon-maskable-512.png # 遮罩圖示 (需要準備)
```

## 🎨 準備圖示

### 方法1:使用PWA Builder (推薦)
1. 前往 https://www.pwabuilder.com/imageGenerator
2. 上傳一張 512x512 的PNG圖片
3. 下載產生的所有尺寸圖示
4. 將檔案命名為 icon-192.png, icon-512.png, icon-maskable-512.png
5. 放到專案資料夾

### 方法2:使用Canva製作
1. 在Canva建立 512x512 的設計
2. 建議:綠色背景 (#1d9e75) + 白色圖案(心型/瑜珈姿勢)
3. 匯出PNG
4. 用線上工具調整成不同尺寸

## 🚀 部署到Vercel (最簡單)

### 步驟1:建立GitHub儲存庫
```bash
# 在本機
cd /path/to/pwa-demo
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的帳號/health-manager.git
git push -u origin main
```

### 步驟2:部署到Vercel
1. 前往 https://vercel.com
2. 使用GitHub登入
3. 點擊「New Project」
4. 選擇剛才建立的 health-manager 儲存庫
5. 點擊「Deploy」
6. 等待約30秒,完成!

你會得到一個網址,例如:`https://health-manager.vercel.app`

## 📱 安裝到手機

### iOS (Safari)
1. 用Safari開啟你的網址
2. 點擊底部「分享」按鈕
3. 選擇「加入主畫面」
4. 點擊「加入」
5. 完成!APP圖示會出現在桌面

### Android (Chrome)
1. 用Chrome開啟你的網址
2. Chrome會自動顯示「安裝應用程式」提示
3. 點擊「安裝」
4. 完成!APP圖示會出現在桌面

或手動安裝:
1. 點擊右上角「⋮」選單
2. 選擇「安裝應用程式」或「加到主畫面」
3. 點擊「安裝」

## 🔧 升級為完整版

目前的app.html是簡化版展示,要換成完整的健康管理系統:

1. 複製之前Artifacts的完整HTML
2. 替換掉app.html的內容
3. 確保有加上:
   - `<link rel="manifest" href="manifest.json">`
   - `<meta name="theme-color" content="#1d9e75">`
   - Service Worker註冊程式碼

4. 將localStorage替換成更穩定的儲存方案(選擇性):
   - IndexedDB (更大容量)
   - Firebase Firestore (真正的雲端同步)
   - Supabase (開源替代方案)

## ✅ PWA功能清單

- [x] 可安裝到桌面
- [x] 離線使用
- [x] 全螢幕體驗
- [x] 本地資料儲存
- [ ] 推播通知 (需要後端支援)
- [ ] 相機拍照 (需要加入Camera API)
- [ ] 背景同步 (需要Service Worker進階設定)

## 🆘 常見問題

**Q: 為什麼iOS上功能比較少?**
A: Apple對PWA的支援較保守,某些功能(如推播通知)在iOS上不可用。

**Q: 資料會不會遺失?**
A: localStorage在瀏覽器清除快取時可能遺失,建議升級為IndexedDB或雲端資料庫。

**Q: 可以改顏色嗎?**
A: 可以!在manifest.json改theme_color,在CSS改主色調。

**Q: 怎麼更新APP?**
A: 更新網站程式碼後,重新部署到Vercel,使用者重新開啟APP時會自動更新。

## 📝 下一步建議

1. ✅ 先用簡化版測試PWA安裝流程
2. 📸 準備好看的圖示
3. 🚀 部署到Vercel
4. 📱 在手機上測試安裝
5. 💻 確認沒問題後,替換成完整版系統
6. ☁️ 考慮加入真正的雲端同步(Firebase/Supabase)
7. 🔔 研究推播通知(需要後端)

## 💡 進階功能參考

如果要加入更多原生APP功能,可以研究:
- Web Share API (分享功能)
- Geolocation API (定位)
- Media Devices API (相機)
- Notifications API (通知)
- Background Sync API (背景同步)

---

有任何問題隨時問我!
