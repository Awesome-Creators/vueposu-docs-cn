# useFavicon

管理页面 Favicon 的 Hook.

## 代码演示

### 基本用法
<script setup>
import UseFaviconDemo from './demos/UseFaviconDemo.vue'
</script>
<UseFaviconDemo />

<<< ./docs/dom/demos/UseFaviconDemo.vue

## 类型声明

```ts
type UseFaviconReturnType = {
  changeIcon: (url: string) => void;
  restoreIcon: () => void;
}

/**
 * @param url 需要切换的 Icon url
 */
export declare function useFavicon(url?: string): UseFaviconReturnType
```