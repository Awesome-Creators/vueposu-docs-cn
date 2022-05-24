# useDebounceFn

用来处理防抖函数的 Hook.

## 代码演示

### 基本用法

<script setup>
import UseDebounceFnDemo from './demos/UseDebounceFnDemo.vue'
</script>
<UseDebounceFnDemo />

<<< ./docs/side-effect/demos/UseDebounceFnDemo.vue

## 类型声明

```ts
export declare function useDebounceFn<T extends Fn>(
  callback: T,
  wait?: RefTyped<number>
): Readonly<Ref<DebouncedFunc<T>>>;
```
