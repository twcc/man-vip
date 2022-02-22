// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TWCC Manual Pages, The Man!',
  tagline: 'The one, you must have!',
  url: 'https://man.twcc.ai',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://www.twcc.ai/assets/favicon.ico',
  organizationName: 'twcc', // Usually your GitHub org/user name.
  projectName: 'man', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      navbar: {
        title: 'Manual',
        logo: {
          alt: 'TWCC',
          src: 'https://www.twcc.ai/assets/38d04ec9712f0089bc84f57b180b2512.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Categories',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: 'https://www.twcc.ai', label: 'TWCC', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Manuals',
            items: [
              {
                label: 'by services',
                to: '/docs/services',
              },
              {
                label: 'by scenarios',
                to: '/docs/scenarios',
              },
              {
                label: 'best practises',
                to: '/docs/best-practises',
              },
            ],
          },
          {
            title: 'Members',
            items: [
              {
                label: 'Academic Users',
                href: 'https://iservice.nchc.org.tw',
              },
              {
                label: 'Enterprise Users',
                href: 'https://tws.twcc.ai',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Release Notes',
                to: '/release',
              },
              {
                label: 'FAQ',
                to: '/faq',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://www.twcc.ai" target="_blank">TWCC.ai</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
