import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';

import Demo from '@docConfig/components/v-demo.vue';
import '@docConfig/styles/vars.css';
import '@docConfig/styles/app.scss';

import packages from '@packages/index';
import '@packages/theme-default/index.scss';

export default <Theme>{
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.use(packages);
    app.component('Demo', Demo);
  },
};
