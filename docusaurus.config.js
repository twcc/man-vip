const env_list = {
    staging: "Staging",
    preview: "Preview",
    production: "TWCC",
  },
  i18nDirPath = {
    docs: "docusaurus-plugin-content-docs/current",
    community: "docusaurus-plugin-content-docs-community/current",
  };
const set_edit_url = (locale, versionDocsDirPath, docPath) => {
  const baseUrl = `https://github.com/twcc/man-vip/edit/tree/tws-sync`,
        enUrl = `${baseUrl}/${versionDocsDirPath}/${docPath}`;
  if (docPath === 'releaseNotes.md') return enUrl;
  const rdir = i18nDirPath[versionDocsDirPath];
  if (locale !== "en" && rdir) return `${baseUrl}/i18n/${locale}/${versionDocsDirPath.replace(versionDocsDirPath,rdir)}/${docPath}`;
  return enUrl
}


// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: env_list[process.env.Target || "production"],
  tagline: "TWCC Manual",
  url: "https://man.twcc.vip",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "TWS Co. Ltd.", // Usually your GitHub org/user name.
  projectName: "Manual", // Usually your repo name.

  i18n: {
    defaultLocale: "zh-Hant",
    locales: ["en", "zh-Hant"],
  },
  plugins: [
    "docusaurus-plugin-sass",
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "community",
        path: "community",
        routeBasePath: "community",
        editUrl: ({ locale, versionDocsDirPath, docPath }) => set_edit_url(locale, versionDocsDirPath, docPath),
        editCurrentVersion: true,
        sidebarPath: require.resolve("./sidebarsCommunity.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "apiDocs",
        docsPluginId: "classic",
        config: {
          CCS: {
            specPath: "openapi/CCS.yaml",
            outputDir: "docs/api/CCS",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          Ceph: {
            specPath: "openapi/Ceph.yaml",
            outputDir: "docs/api/Ceph",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          Common: {
            specPath: "openapi/Common.yaml",
            outputDir: "docs/api/Common",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          Harbor: {
            specPath: "openapi/Harbor.yaml",
            outputDir: "docs/api/Harbor",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          Slurm: {
            specPath: "openapi/Slurm.yaml",
            outputDir: "docs/api/Slurm",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          VCS: {
            specPath: "openapi/VCS.yaml",
            outputDir: "docs/api/VCS",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          }
        }
      }
    ]
  ],
  themes: ["docusaurus-theme-openapi-docs"],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [require("mdx-mermaid")],
          editUrl: ({ locale, versionDocsDirPath, docPath }) => set_edit_url(locale, versionDocsDirPath, docPath),
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem" // Derived from docusaurus-theme-openapi
        },
        pages: {},
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: "support_us",
        content:
          'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: false,
      },
      navbar: {
        title: undefined,
        logo: {
          alt: "TWCC Logo",
          src: "img/LOGO.svg",
        },
        items: [
          {
            type: "doc",
            label: "Docs",
            docId: "introduction",
            position: "left",
          },
          {
            label: "API",
            position: "left",
            to: "/docs/api/CCS"
          },
          {
            type: "docSidebar",
            sidebarId: "faq",
            label: "FAQ",
            position: "left",
          },
          {
            type:"doc",
            label: "Release Notes",
            docId: "release-notes",
            position: "left",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/twcc/man-vip/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "/docs/introduction",
              },
            ],
          },
          {
            title: "Members",
            items: [
              {
                label: "Academic Users",
                href: "https://iservice.nchc.org.tw",
              },
              {
                label: "Enterprise Users",
                href: "https://tws.twcc.ai",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/twcc/man-vip",
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
