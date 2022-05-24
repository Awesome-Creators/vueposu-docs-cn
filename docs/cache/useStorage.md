# useStorage

响应式 [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)/[SessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage).

- 你可以存储 `Array` 和 `PlainObject`.
- 你可以直接使用 `Storage.setItem` 方法, 它将会影响和更改 Storage 的值.
- 当页面获得焦点时, state 会同步 Storage 的值.

## 代码演示

### 基本用法

<script setup>
import UseStorageDemo from './demos/UseStorageDemo.vue'
</script>
<UseStorageDemo />

<<< ./docs/cache/demos/UseStorageDemo.vue

## 类型声明

```ts
export declare function useStorage<T>(
	key: string,
	defaultValue?: T,
	storage?: Storage
):
	| WritableComputedRef<string | null>
	| {
    value: null;
}
```
