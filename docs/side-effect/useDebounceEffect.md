# useDebounceEffect

防抖形式的 Side Effect Hook.

## 代码演示

### 基本用法

<script setup>
import UseDebounceEffectDemo from './demos/UseDebounceEffectDemo.vue'
</script>
<UseDebounceEffectDemo />

<<< ./docs/side-effect/demos/UseDebounceEffectDemo.vue

## 类型声明

```ts
export declare function useDebounceEffect<T>(
  listener: WatchCallback<T, T>,
  deps: WatchSource<T>,
  wait?: RefTyped<number>
): void;
export declare function useDebounceEffect<T extends object>(
  listener: WatchCallback<T, T>,
  deps: T,
  wait?: RefTyped<number>
): void;
export declare function useDebounceEffect<T = any>(
  listener: Fn,
  deps: T | WatchSource<T>,
  wait: RefTyped<number> = 0
): void;
```
