import type { UserConfig } from 'vitepress';
import { nav, sidebar, mdPlugin, algolia } from './config/index'

const config: UserConfig = {
  lang: 'zh-CN',
  title: 'vitepress demo doc',
  description: 'Just playing around.',
  themeConfig: {
    logo: '/logo2.png',
    // 展示搜索框
    algolia,
    nav,
    // 侧边栏
    sidebar
  },
  markdown: {
    config: (md: markdownit) => mdPlugin(md),
    // config: (md) => {
    // 	// const { demoBlockPlugin } = require('vitepress-theme-demoblock')
    // 	// md.use(demoBlockPlugin)
    // },
  },
};

export default config;
