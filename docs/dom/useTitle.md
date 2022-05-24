# useTitle

管理页面标题的 Hook.

## 代码演示

### 基本用法
<script setup>
import UseTitleDemo from './demos/UseTitleDemo.vue'
</script>
<UseTitleDemo />

<<< ./docs/dom/demos/UseTitleDemo.vue

## 类型声明

```ts
type UseTitleReturnType = {
  title: Ref<string>;
  restoreTitle: () => void;
};

/**
 * @param overridedTitle 设置页面的标题字符串.
 * @param restoreOnUnmount 组件卸载时是否需要还原标题. 默认为 true.
 */
export declare function useTitle(
  overridedTitle?: RefTyped<string>,
  restoreOnUnmount: RefTyped<boolean> = true
): UseTitleReturnType
```