// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "jq-pipeline",
  tagline: 'Dinosaurs are cool',
  url: 'https://jiuqiangtech.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo2.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'jq-pipeline', // Usually your repo name.
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans']
  },
  plugins: [
    'plugin-image-zoom'
  ],
  themeConfig: {
    navbar: {
      logo: {
        alt: 'jiuqiang-tech',
        src: 'img/logo.png',
        srcDark: 'img/logo2.png',
        href: 'https://jiuqiangtech.com',
        target: '_blank',
        width: 32,
        height: 32,
      },
    },
    imageZoom: {
      // CSS selector to apply the plugin to, defaults to '.markdown img'
      selector: '.markdown img',
      // Optional medium-zoom options
      // see: https://www.npmjs.com/package/medium-zoom#options
      options: {
        margin: 24,
        background: '#BADA55',
        scrollOffset: 0,
        container: '#zoom-container',
        template: '#zoom-template',
      },
    },
  },
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        docsRouteBasePath: '/',
        translations: {
          "search_placeholder": "搜索",
          "see_all_results": "查看所有",
          "no_results": "没有结果!",
          "search_results_for": "关键词 \"{{ keyword }}\"",
          "search_the_documentation": "搜索文档",
          "count_documents_found": "结果: {{ count }}",
          "count_documents_found_plural": "结果: {{ count }}",
          "no_documents_were_found": "未找到任何文档"
        }
        // ```
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

};

module.exports = config;
