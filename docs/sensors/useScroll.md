# useScroll

监听滚动条位置的 Hook.

## 代码演示

### 基本用法

<script setup>
import UseScrollDemo from './demos/UseScrollDemo.vue'
</script>
<UseScrollDemo />

<<< ./docs/sensors/demos/UseScrollDemo.vue

## 类型声明

```ts
interface ScrollState {
  x: number;
  y: number;
}

export declare function useScroll(
  target?: Target<HTMLElement | Document>
): ToRefs<Readonly<ScrollState>>;
```
