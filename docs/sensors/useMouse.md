# useMouse

监听鼠标坐标的 Hook.

## 代码演示

### 基本用法

<script setup>
import UseMouseDemo from './demos/UseMouseDemo.vue'
</script>
<UseMouseDemo />

<<< ./docs/sensors/demos/UseMouseDemo.vue

## 类型声明

```ts
interface MouseCursorState {
  pageX: number;
  pageY: number;
  screenX: number;
  screenY: number;
  clientX: number;
  clientY: number;
}

export declare function useMouse(): ToRefs<Readonly<MouseCursorState>>;
```
