# useToggle

用于在两个状态值间切换的 Hook.

## 代码演示

### 基本用法

<script setup>
import UseToggleDemo from './demos/UseToggleDemo.vue'
</script>
<UseToggleDemo />

<<< ./docs/state/demos/UseToggleDemo.vue

## 类型声明

```ts
interface UseToggleActions {
  setLeft: () => void;
  setRight: () => void;
  toggle: (value?: any) => void;
}
type UseToggleReturnType<D, R> = {
  state: Ref<UnwrapRef<D> | UnwrapRef<R>>;
} & UseToggleActions;

/**
 * @param defaultValue 默认的状态值, 默认为 `true`
 * @param reverseValue 取反的状态值, 默认为 `false`
 */
export declare function useToggle<
  D extends RefTyped<UseToggleState>,
  R extends RefTyped<UseToggleState>
>(defaultValue?: D, reverseValue?: R): UseToggleReturnType<D, R>
```
