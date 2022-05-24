import { defineConfig } from "vitepress";

const hooksSidebar = [
  {
    text: "DOM",
    items: [
      { text: "useClickOutside", link: "/dom/useClickOutside" },
      { text: "useClipboard", link: "/dom/useClipboard" },
      { text: "useFavicon", link: "/dom/useFavicon" },
      { text: "useFullscreen", link: "/dom/useFullscreen" },
      { text: "usePageHidden", link: "/dom/usePageHidden" },
      { text: "useTitle", link: "/dom/useTitle" },
    ],
  },
  {
    text: "Sensors",
    items: [
      { text: "useMouse", link: "/sensors/useMouse" },
      { text: "useScroll", link: "/sensors/useScroll" },
    ],
  },
  {
    text: "State",
    items: [
      { text: "useCounter", link: "/state/useCounter" },
      // { text: "useCounterInterval", link: "/state/useCounterInterval" },
      { text: "useToggle", link: "/state/useToggle" },
    ],
  },
  {
    text: "Cache",
    items: [
      { text: "useLocalStorage", link: "/cache/useLocalStorage" },
      { text: "useSessionStorage", link: "/cache/useSessionStorage" },
      { text: "useStorage", link: "/cache/useStorage" },
    ],
  },
  {
    text: "Side Effect",
    items: [
      { text: "useDebounce", link: "/side-effect/useDebounce" },
      { text: "useDebounceEffect", link: "/side-effect/useDebounceEffect" },
      { text: "useDebounceFn", link: "/side-effect/useDebounceFn" },
      { text: "useEventEmitter", link: "/side-effect/useEventEmitter" },
      // { text: "useRequest", link: "/side-effect/useRequest" },
      { text: "useThrottle", link: "/side-effect/useThrottle" },
      { text: "useThrottleEffect", link: "/side-effect/useThrottleEffect" },
      { text: "useThrottleFn", link: "/side-effect/useThrottleFn" },
    ],
  },
];

export default defineConfig({
  title: "Vueposu",
  description: "A hooks library based on Vue Composition-API.",
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }]],
  lastUpdated: true,
  lang: "zh-cn",
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "指南", link: "/guide/" },
      {
        text: "Hooks",
        activeMatch: `^/(dom|sensors|state|cache|side-effect|animation|swr)/*`,
        items: [
          { text: "DOM", link: "/dom/", activeMatch: "^/dom/*" },
          { text: "Sensors", link: "/sensors/", activeMatch: "^/sensors/*" },
          { text: "State", link: "/state/", activeMatch: "^/state/*" },
          { text: "Cache", link: "/cache/", activeMatch: "^/cache/*" },
          {
            text: "Side Effect",
            link: "/side-effect/",
            activeMatch: "^/side-effect/",
          },
          {
            text: "Animation",
            link: "/animation/",
            activeMatch: "^/animation/",
          },
          // { text: "SWR", },
        ],
      },
    ],
    localeLinks: {
      text: "简体中文",
      items: [{ text: "English", link: "https://vueposu.netlify.app" }],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/awesome-creators/vueposu" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: [
            { text: "介绍", link: "/guide/" },
            { text: "开始使用", link: "/guide/getting-started" },
          ],
        },
      ],
      "/dom/": hooksSidebar,
      "/sensors/": hooksSidebar,
      "/state/": hooksSidebar,
      "/cache/": hooksSidebar,
      "/side-effect/": hooksSidebar,
    },
    editLink: {
      repo: "awesome-creators/vueposu",
      branch: "main",
      dir: "packages/.docs",
      text: "帮助我们改进此页",
    },
    footer: {
      message: "遵守 MIT 证书.",
      copyright: "Copyright © 2020-present Awesome Creators",
    },
  },
});
