import { defineConfig } from 'vitepress'

// Directory name for plugins
const PLUGIN_BASE_DIR = 'plugin';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/devops-velocity-plugin-docs/",
  title: "DevOps Velocity Plugins",
  description: "Documentation for IBM DevOps Velocity Plugins",
  appearance: "dark",
  lastUpdated: true,
  vite: {
    build: {
      chunkSizeWarningLimit: 4000, // Set your desired limit in KB
    },
    assetsInclude: ['**/*.PNG', '**/*.png']
  },
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/UrbanCode/devops-velocity-plugin-docs/edit/main/docs/:path'
    },
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    sidebar: {},

    socialLinks: [
      { icon: 'github', link: 'https://github.com/UrbanCode/devops-velocity-plugin-docs' }
    ],
    footer: {
      copyright: "©️ IBM Corp. 2011, 2017. <br> ©️ HCL Technologies Limited 2018, 2025.",

    }
  }
})
