# useClipboard

响应式 [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API). 提供响应剪贴板命令（剪切、复制和粘贴）以及异步读取和写入系统剪贴板的功能. 访问剪贴板内容需要用户权限许可, 未经用户许可, 不允许读取或更改剪贴板内容.

## 代码演示

### 基本用法
<script setup>
import UseClipboardDemo from './demos/UseClipboardDemo.vue'
</script>
<UseClipboardDemo />

<<< ./docs/dom/demos/UseClipboardDemo.vue

## 类型声明

```ts
type UseClipboardReturnType = {
  copy: (text: string) => Promise<void>;
  text: Ref<string>;
  supported: boolean;
};

export declare function useClipboard(): UseClipboardReturnType
```