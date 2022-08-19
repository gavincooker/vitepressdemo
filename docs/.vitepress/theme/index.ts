import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';

import Demo from '~/components/v-demo.vue';
import '~/styles/vars.css';
import '~/styles/app.scss';

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
