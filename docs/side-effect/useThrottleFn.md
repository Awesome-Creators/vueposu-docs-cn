# useThrottleFn

用来处理节流函数的 Hook.

## 代码演示

### 基本用法

<script setup>
import UseThrottleFnDemo from './demos/UseThrottleFnDemo.vue'
</script>
<UseThrottleFnDemo />

<<< ./docs/side-effect/demos/UseThrottleFnDemo.vue

## 类型声明

```ts
export declare function useThrottleFn<T extends Fn>(
  callback: T,
  wait?: RefTyped<number>
): Readonly<Ref<DebouncedFunc<T>>>;
```
