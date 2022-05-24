# useThrottle

用来处理节流值的 Hook.

## 代码演示

### 基本用法

<script setup>
import UseThrottleDemo from './demos/UseThrottleDemo.vue'
</script>
<UseThrottleDemo />

<<< ./docs/side-effect/demos/UseThrottleDemo.vue

## 类型声明

```ts
export declare function useThrottle<T>(
  value: Ref<T>,
  wait?: RefTyped<number>
): Readonly<Ref<DeepReadonly<T>>>;
```
