# useClickOutside

用于监听目标元素外的点击事件.

## 代码演示

### 基本用法
<script setup>
import UseClickOutsideDemo from './demos/UseClickOutsideDemo.vue'
</script>
<UseClickOutsideDemo />

<<< ./docs/dom/demos/UseClickOutsideDemo.vue

## 类型声明

```ts
type Target<T = HTMLElement> =
  | T
  | null
  | (() => T | null)
  | Ref<T | null | undefined>;

/**
 * @param target 监听的目标元素.
 * @param eventHandler 触发函数.
 * @param eventName 需要监听的事件. 默认为 `click`.
 */
export declare function useClickOutside(
  target: Target | Target[],
  eventHandler: RefTyped<(event: MouseEvent | TouchEvent) => void>,
  eventName: RefTyped<string | string[]> = defaultEvent
): WatchStopHandle
```