# useSessionStorage

响应式 [SessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage).

- 你可以存储 `Array` 和 `PlainObject`.
- 你可以直接使用 `SessionStorage.setItem` 方法, 它将会影响和更改 SessionStorage 的值.
- 当页面获得焦点时, state 会同步 SessionStorage 的值.

## 代码演示

### 基本用法

<script setup>
import UseSessionStorageDemo from './demos/UseSessionStorageDemo.vue'
</script>
<UseSessionStorageDemo />

<<< ./docs/cache/demos/UseSessionStorageDemo.vue

## 类型声明

```ts
export declare function useSessionStorage<T>(
  key: string,
  defaultValue?: T
):
  | WritableComputedRef<string | null>
  | {
      value: null;
    };
```
