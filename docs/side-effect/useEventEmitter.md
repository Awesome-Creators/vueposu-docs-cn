# useEventEmitter

用于事件通知的 Hook.

## 代码演示

### 基本用法

<script setup>
import UseEventEmitterDemo from './demos/UseEventEmitterDemo.vue'
</script>
<UseEventEmitterDemo />

<<< ./docs/side-effect/demos/UseEventEmitterDemo.vue

## 类型声明

```ts
type Listener = (...stream: any[]) => void;
type UseEventEmitterReturnType = {
  emit: (...args: any[]) => void;
  on: (listener: Listener) => void;
};

export declare function useEventEmitter(): UseEventEmitterReturnType;
```
