# useThrottleEffect

节流形式的 Side Effect Hook.

## 代码演示

### 基本用法

<script setup>
import UseThrottleEffectDemo from './demos/UseThrottleEffectDemo.vue'
</script>
<UseThrottleEffectDemo />

<<< ./docs/side-effect/demos/UseThrottleEffectDemo.vue

## 类型声明

```ts
export declare function useThrottleEffect<T>(
  listener: WatchCallback<T, T>,
  deps: WatchSource<T>,
  wait?: RefTyped<number>
): void;
export declare function useThrottleEffect<T extends object>(
  listener: WatchCallback<T, T>,
  deps: T,
  wait?: RefTyped<number>
): void;
export declare function useThrottleEffect<T = any>(
  listener: Fn,
  deps: T | WatchSource<T>,
  wait: RefTyped<number> = 0
): void;
```
