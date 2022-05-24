# useDebounce

用来处理防抖值的 Hook.

## 代码演示

### 基本用法

<script setup>
import UseDebounceDemo from './demos/UseDebounceDemo.vue'
</script>
<UseDebounceDemo />

<<< ./docs/side-effect/demos/UseDebounceDemo.vue

## 类型声明

```ts
export declare function useDebounce<T>(
	value: Ref<T>, 
	wait?: RefTyped<number>
): Readonly<Ref<DeepReadonly<T>>>
```