import type { StorybookConfig } from "@storybook-vue/nuxt";
import type { ViteConfig } from '@nuxt/schema';
import { mergeConfig } from 'vite';
import userConfig from './vite.config';

const config: StorybookConfig = {
  stories: [
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook-vue/nuxt",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(baseConfig: ViteConfig) {
    return mergeConfig(baseConfig, userConfig);
  }
};

export default config;
