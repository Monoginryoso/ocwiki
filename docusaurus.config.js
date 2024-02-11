// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Department of Neuroscience and Brain-inspired Intelligence',
  tagline: 'The 145 Research Group',
  favicon: 'https://raw.githubusercontent.com/Monoginryoso/ocwiki/0bf07ffad17932374c550b9c172fcb20cdb3c5c8/build/img/favicon.ico',

  // Set the production url of your site here
  url: 'https://monoginryoso.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ocwiki/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Monoginryoso', // Usually your GitHub org/user name.
  projectName: 'ocwiki', // Usually your repo name.
  trailingSlash: false,
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
        
        title: ' ',
        logo: {
          alt: 'My Site Logo',
          src: 'https://raw.githubusercontent.com/Monoginryoso/ocwiki/f718fda7a55225aa6283916a707760c700b4dba9/static/img/logo.PNG',
          srcDark: 'https://raw.githubusercontent.com/Monoginryoso/ocwiki/f718fda7a55225aa6283916a707760c700b4dba9/static/img/logo-dark.PNG',
        },
        items: [
          {
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Worldview',
            to: '/docs/worldview'
          },
 
          {
            type: 'dropdown',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'About HPTA',
            items:[
              {
                label: 'Introduction of HPTA Institute of Biotechnology',
                to: '/docs/hpta'
              },
            ]
          },
          {
            type: 'dropdown',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'About DNBI',
            items:[
              {
                label: 'Department of Neuroscience and Brain-inspired Intelligence',
                to: '/docs/dnbi'
              },
              {
                label: '145 Research Group',
                to: '/docs/145'
              },
            ]
          },
          {
            type: 'dropdown',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Personnel',
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
            ]
          },
          {
            type: 'dropdown',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Artificial Intelligence Engine',
            items:[
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
            label: 'About the Author',
            href: 'https://monoginryoso.github.io/',
          },
          {
            label: 'Email',
            href: 'mailto:ghostpipe611@tutanota.com',
          },
        ],
        copyright: `<b>DISCLAIMER:</b> This is a work of fiction. Names, characters, places and incidents either are products of the author's imagination or are used fictitiously. No identification with actual persons (living or deceased), places, buildings, and products is intended or should be inferred.
        <br>
        
        <br>
        The content of this page is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International license</a> unless otherwise stated.
        <br>
        Built with <a href="https://docusaurus.io/">Docusaurus</a>.`,
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

export default {
  markdown: {
    format: 'mdx',
    mermaid: true,
    preprocessor: ({filePath, fileContent}) => {
      return fileContent.replaceAll('{{MY_VAR}}', 'MY_VALUE');
    },
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
  },
};