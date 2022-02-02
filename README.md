# yoimu-js

> 目前僅提供 esm，有提供 ts 類型定義，有幾隻不一定正確的會備註

---

## common-lib

> 全平台

---

## web-lib

> 網頁

---

## react-common-lib

> react 全平台

---

## react-native-lib

> react native 開發中的 尚不完全

---

## react-web-lib

> react 網頁

### useLocalStorageState

> 會自動將值紀錄在 localstorage 裡的 useState，目前是基本款，後續會提供可選配置

#### 類型

```typescript
function useLocalStorageState<T>(
  key: string, // localstorage 的名稱
  initialValue: T,
): [T, Dispatch<SetStateAction<T>>]
```

#### 使用

```javascript
const [count, setCount] = useLocalStorageState('count', 0)
// 其他同 useState，可以看到 localStorage 的值會同步變動
```

### useSessionStorageState

> 同 [useLocalStorageState](https://github.com/yoimu-team/js#uselocalstoragestate) 只是將資料存到 sessionStorage
