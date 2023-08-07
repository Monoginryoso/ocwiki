// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OC WIKI',
  tagline: '-UNDER CONSTRUCTION-',
  favicon: 'https://raw.githubusercontent.com/Monoginryoso/ocwiki/bddd7ee1f8572087f0f50e089dca58ca4d1b8e74/build/img/favicon.ico',

  // Set the production url of your site here
  url: 'https://monoginryoso.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ocwiki/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Monoginryoso', // Usually your GitHub org/user name.
  projectName: 'ocwiki', // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Original Characters Wiki',
        logo: {
          alt: 'My Site Logo',
          src: 'https://raw.githubusercontent.com/Monoginryoso/ocwiki/80b6eb7b42779189dd3de5e6f4a32b55a74930dc/static/img/logo.PNG',
          srcDark: 'https://raw.githubusercontent.com/Monoginryoso/ocwiki/95035822ab421b10504b4e9611bd7fa97454a3f1/static/img/logo-dark.PNG'
        },
        items: [
          {
            type: 'dropdown',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Characters introduction',
            items:[
              {
                label: 'Kiri Mononobe',
                to: '/docs/mk'
              },
              {
                label: 'Arvo Ru',
                to: '/docs/ra'
              },
              {
                label: 'Denarius Pinuer',
                to: '/docs/pd'
              },
              {
                label: 'CrypSNN',
                to: '/docs/cm'
              },
            ]
          },

        ],
        hideOnScroll: true,
      },
      footer: {
        style: 'light',
        links: [
          {
            label: 'Email',
            href: 'mailto:ghostpipe611@tutanota.com',
          },
          {
            label: 'Twitter',
            href: 'https://twitter.com/m_ginryoso',
          },
          {
            label: 'Mastodon',
            href: 'https://qoto.org/@m_ginryoso',
          },
          {
            label: 'Pixiv',
            href: 'https://www.pixiv.net/users/96958189',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/Monoginryoso',
          },
        ],
        copyright: `The content of this page is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International license</a> unless otherwise stated.<br>Built with <a href="https://docusaurus.io/">Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs:{
        sidebar:{
          hideable: true,
          autoCollapseCategories: true,
        }
      }
    }),
};

module.exports = config;
