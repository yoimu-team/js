# yoimu-js

> 目前僅提供 esm，有提供 ts 類型定義，有幾隻不一定正確的會備註

---

## common-lib

> 全平台

### stepPrice

> 數字加逗號

#### 類型

```typescript
function stepPrice(price: string | number, step?: number): string
```

#### 使用

```javascript
stepPrice(1000) // 1,000
stepPrice(1000, 2) // 10,00 第二個參數為幾位數打一個逗號，預設為千(3位)
```

---

## web-lib

> 網頁

### copyText

> 複製文字

#### 類型

```typescript
function copyText(value: number | string): string
```

#### 使用

```javascript
copyText("複製的文字")
```

### checkMobile

> 檢測是否是移動裝置，這僅檢測此，想要更全面的檢測建議套外部庫

#### 類型

```typescript
function checkMobile(): boolean
```

#### 使用

```javascript
checkMobile() // false
```

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

### useTitle

> 更換頁面 title

```typescript
function useTitle(title: string, restoreOnUnmount?: boolean): string
```

```javascript
function Component() {
  useTitle('hello yoimu') // 將頁面抬頭改成 hello yoimu
  // useTitle('hello yoimu', true) // 第 2 個參數預設為 false, 是否在頁面銷毀時返回上個標題
}
```

### useSafeState

> 使用同 useState，與其只差在使用該鉤子不會有內存泄露的問題

### 類型

同 useState

### 用法

同 useState





