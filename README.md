# Hahow 面試小專案 Heroes

## 執行專案

- 使用cmd在專案目錄下輸入指令(僅初次clone時)
```
yarn install
```
- 點擊`yarn_start.bat`或使用cmd在專案目錄下輸入指令
```
yarn start
```

<br>

## 專案架構 & 特色

### 檔案結構

```
/
├── public                          # Root Html file
└── src                             # 專案主要 Code
    ├── pages                       # Page components
        └── Home (Example)              # 以一個名為 Home 的 Component 舉例結構
            ├── Home.tsx                # Home Component主體
            ├── Home.type.ts            # Home 相關的interface
            ├── Home.style.ts           # Home 中所用的 styled component
            ├── Home.util.ts            # Home 相關的util function
            ├── Home.service.ts         # Home 中會用到的 api
            └── index.ts                # default export
    ├── components                  # 共用元件，結構大致與 pages 相同，但不會有 .service.ts
    ├── router                      # Routing
    ├── services                    # 包含 api 工具及共用的 Service
    ├── style                       # 包含 global style 以及一些與 style 相關的varibale
    ├── types                       # 共用的 interface
    ├── util                        # [!有規劃但尚未使用到] 共用的 Utils
    └── hooks                       # [!有規劃但尚未使用到] custom hook
    
```

### 特色

- 結構上是以一個完整的系統作設計，具備以下內容
    - 建立包含 Navbar 、 Footer 等內容的 Layout，恆常存在於主網頁內容中
    - 規劃 route-config，設置 Route 後會與 Navbar 的選單連動
    - Route 使用 lazy loading 做 code-splitting ，降低載入單個頁面時的 bundle大小
    - 製作共用 api util，並且有全域 handle error 來做某些錯誤的常態性處理
    - 規劃擺放全域 style 參數的位置，內容包含 $Color $Rwd 及 GlobalStyle 等等
    - 使用 Css 的 media 語法針對不同頁面寬度實作 Rwd 
- 加入某些UI反應的動畫，提升互動性

<br>

## 使用的第三方 Library

### 專案

- **[styled-components](https://styled-components.com/)** - CSS-In-JS 的函式庫，使你可以在 JSX 中撰寫 CSS code，更方便的是他可以接到 component 的 props 值來動態改變 css 樣式
- **[react-router](https://reactrouter.com/)** - 完整的 React 路由解決方案，在 React 中實現路由功能
- **[rxjs](https://rxjs.dev/)** - 一套藉由 Observable sequences 來組合非同步行為和事件基礎程序的 Library，使用 ajax 來做 api fetch
- **[react-icons](https://react-icons.github.io/react-icons)** - 提供簡單方便的方法在 React 中使用主流 icon 的 Library


### Vscode Extension

- **[Create Component](https://marketplace.visualstudio.com/items?itemName=amowu.vscode-create-component)** - Hahow 開發團隊發佈的 extension ，用於快速建立 template ，選擇使用它是因為除了方便以外，也想在寫專案的過程中順道了解 Hahow for business 專案的 coding style
- **[Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)** - 開發過程中輔助檢查code以提高程式碼品質

<br>


## 註解原則

- 在建立共用元件、方法等別人也會用到的程式內容時，會使用 JsDoc 描述功用、參數設定等等
- 若開發的的程式邏輯較為複雜，會在各個步驟上加入註解，方便未來維護時快速了解
- 若開發中不得已會留下待完善功能、問題等，會寫上`TODO:`並描述原因

<br>

## 專案遇到的困難 & 解決辦法

在建立專案的時候， React 18 已經發佈了，開發過程中遇到很多寫法不一樣的地方，尤其是`react-router`套件，該套件從 v6 開始的寫法幾乎都是新的，於是常常發生執行結果非預期或是直接報錯等等情況，讓我花了很多時間去處理及了解，好在網路上的資源相當豐富，逐個研究後依然順利完成開發。

