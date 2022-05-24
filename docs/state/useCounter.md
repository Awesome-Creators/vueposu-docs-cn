# useCounter

管理计数器的 Hook.

## 代码演示

### 基本用法

<script setup>
import UseCounterDemo from './demos/UseCounterDemo.vue'
</script>
<UseCounterDemo />

<<< ./docs/state/demos/UseCounterDemo.vue

## 类型声明

```ts
type UseCounterActions = {
  inc: (n?: CounterNumber) => void;
  dec: (n?: CounterNumber) => void;
  set: (value: CounterNumber | ((currentValue: number) => number)) => void;
  reset: () => void;
};
type UseCounterReturnType = {
  count: Ref<number>;
} & UseCounterActions;
interface CounterOptions {
  min?: CounterNumber;
  max?: CounterNumber;
  step?: CounterNumber;
}

export declare function useCounter(
  initialValue?: CounterNumber,
  options: CounterOptions = {}
): UseCounterReturnType 
```
