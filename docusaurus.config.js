const env_list = {
  staging: 'Staging',
  preview: 'Preview',
  production: 'TWCC'
}, i18nDirPath = {
  docs: 'docusaurus-plugin-content-docs/current',
  community: 'docusaurus-plugin-content-docs-community/current'
}
const replaceDir = (versionDocsDirPath) => {
  return rdir = i18nDirPath[versionDocsDirPath], rdir ? versionDocsDirPath.replace(versionDocsDirPath,rdir) : versionDocsDirPath
}
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: env_list[process.env.Target||'production'],
  tagline: 'TWCC Manual',
  url: 'https://man.twcc.vip',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TWS', // Usually your GitHub org/user name.
  projectName: 'Manual', // Usually your repo name.

  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['en','zh-Hant'],
  },
  plugins: [
    'docusaurus-plugin-sass',
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        editUrl: ({locale, versionDocsDirPath, docPath}) => {
          if (locale !== 'en') {
            return `https://github.com/twcc/man-vip/edit/tree/tws-sync/i18n/${locale}/${replaceDir(versionDocsDirPath)}/${docPath}`;
          }
          return `https://github.com/twcc/man-vip/edit/tree/tws-sync/${versionDocsDirPath}/${docPath}`;
        },
        editCurrentVersion: true,
        sidebarPath: require.resolve('./sidebarsCommunity.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "apiDocs",
        docsPluginId: "classic",
        config: {
          vcsapi: { // Note: petstore key is treated as the <id> and can be used to specify an API doc instance when using CLI commands
            specPath: "openapi/vcsapi.yaml", // Path to designated spec file
            outputDir: "docs/api/VCS", // Output directory for generated .mdx docs
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          ccsapi: { // Note: petstore key is treated as the <id> and can be used to specify an API doc instance when using CLI commands
            specPath: "openapi/ccsapi.yaml", // Path to designated spec file
            outputDir: "docs/api/CCS", // Output directory for generated .mdx docs
          },
          slurmapi: { // Note: petstore key is treated as the <id> and can be used to specify an API doc instance when using CLI commands
            specPath: "openapi/slurm.yaml", // Path to designated spec file
            outputDir: "docs/api/Slurm", // Output directory for generated .mdx docs
          },
          harborapi: { // Note: petstore key is treated as the <id> and can be used to specify an API doc instance when using CLI commands
            specPath: "openapi/harbor.yaml", // Path to designated spec file
            outputDir: "docs/api/Harbor", // Output directory for generated .mdx docs
          },
          cephapi: { // Note: petstore key is treated as the <id> and can be used to specify an API doc instance when using CLI commands
            specPath: "openapi/ceph.yaml", // Path to designated spec file
            outputDir: "docs/api/Ceph", // Output directory for generated .mdx docs
          },
          commonapi: { // Note: petstore key is treated as the <id> and can be used to specify an API doc instance when using CLI commands
            specPath: "openapi/common.yaml", // Path to designated spec file
            outputDir: "docs/api/Common", // Output directory for generated .mdx docs
          },
        }
      },
    ]
  ],
  themes: ["docusaurus-theme-openapi-docs"], // Allows use of @theme/ApiItem and other components
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [require('mdx-mermaid')],
          editUrl: ({locale, versionDocsDirPath, docPath}) => {
            if (locale !== 'en') {
              return `https://github.com/twcc/man-vip/edit/tree/tws-sync/i18n/${locale}/${replaceDir(versionDocsDirPath)}/${docPath}`;
            }
            return `https://github.com/twcc/man-vip/edit/tree/tws-sync/${versionDocsDirPath}/${docPath}`;
          }
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: undefined,
        logo: {
          alt: 'TWCC Logo',
          src: 'img/LOGO.svg',
        },
        items: [
          {
            type: 'doc',
            label: 'Docs',
            docId: 'introduction',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'api',
            label: 'API',
            position: 'left',
          },
          /**{
            type: 'docSidebar',
            sidebarId: 'faq',
            label: 'FAQ',
            position: 'left',
          },*/
          {
            type: 'docSidebar',
            sidebarId: 'faq',
            label: 'FAQ',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/twcc/man-vip/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/introduction',
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
                label: 'GitHub',
                href: 'https://github.com/twcc/man-vip',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TWCC, Inc. Built with TWS.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
