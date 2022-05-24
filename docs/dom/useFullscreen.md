# useFullscreen

管理目标 DOM 元素全屏的 Hook.

## 代码演示

### 基本用法
<script setup>
import UseFullscreenDemo from './demos/UseFullscreenDemo.vue'
</script>
<UseFullscreenDemo />

<<< ./docs/dom/demos/UseFullscreenDemo.vue

## 类型声明

```ts
type UseFullscreenReturnType = {
  isFullscreen: Ref<boolean>;
  enterFullscreen: () => void;
  exitFullscreen: () => void;
  toggleFullscreen: (status?: RefTyped<boolean>) => void;
};

export declare function useFullscreen<T extends HTMLElement>(
  target: T,
  onFullscreenStatusChange?: () => void,
): UseFullscreenReturnType
```