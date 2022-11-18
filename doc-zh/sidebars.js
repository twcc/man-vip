/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: "doc", id:"overview", label: "TWCC 文件概觀",
    },
    {
      type: "category",
      label: "從零開始 TWCC",
      link: {
        type: "generated-index",
        title: "從零開始 TWCC",
        slug: "/zero-to-hero",
        keywords: ["zero-to-hero"]
      },
      collapsed: true,
      items: [
        { type: "doc", id:"ccs-interactive-container/get-started", label: "開發型容器",},
        { type: "doc", id:"twnia2-hpc-cli/get-started", label: "台灣杉二號 (命令列介面)",},
        { type: "doc", id:"hfs/get-started", label: "高速檔案系統",},
      ],
    },
    {
      type: "category",
      label: "瀏覽 TWCC 服務",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "doc", id:"member/user-guides/member-key-quota/sign-up-for-twcc", label: "會員中心",
        },
        {
          type: "category",
          label: "運算服務",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            {
              type: "category",
              label: "容器運算服務",
              link: {
                type: "generated-index",
              },
              collapsed: false,
              items: [
                { type: "doc", id:"ccs-interactive-container/overview", label: "開發型容器",},
                { type: "doc", id:"ccs-scheduled-container", label: "任務型容器",},]},
            { type: "doc", id:"hpc-job", label: "HPC 高速運算任務",},
            { type: "doc", id:"vcs/overview", label: "虛擬運算服務",},
            { type: "doc", id:"twnia2-hpc-cli/overview", label: "台灣杉二號 (命令列介面)",},
          ],
        },
        {
          type: "category",
          label: "儲存服務",
          link: {
            type: "generated-index",
          },
          collapsed: false,
          items: [
            /**{ type: "doc", id:"cos/overview", label: "雲端物件儲存",},*/
            { type: "doc", id:"vcs/user-guides/storage/overview", label: "虛擬磁碟服務",},
            { type: "doc", id:"hfs/overview", label: "高速檔案系統",},
            { type: "doc", id:"cos/tutorials/backup-synchronize-restore", label: "資料備份",},
            { type: "doc", id:"cfs/overview", label: "雲端檔案服務",},
          ],
        },
        {
          type: "category",
          label: "聯網與資安",
          link: {
            type: "generated-index",
          },
          collapsed: false,
          items: [
            { type: "doc", id:"vcs/user-guides/networking/virtual-network", label: "虛擬網路",},
            { type: "doc", id:"vcs/user-guides/security/security-group", label: "安全性群組",},
            { type: "doc", id:"vcs/user-guides/networking/load-balancing", label: "負載平衡",},
            { type: "doc", id:"vcs/user-guides/networking/auto-scaling", label: "Auto Scaling",},
            { type: "doc", id:"vcs/user-guides/security/virtual-network-firewall", label: "基礎虛擬防火牆",},
          ],
        },
        {
          type: "category",
          label: "人工智慧",
          link: {
            type: "generated-index",
          },
          collapsed: false,
          items: [
            { type: "doc", id:"oneai/overview", label: "OneAI",},
          ],
        },
      ],
    },
  ],

  openApiSidebar: [
    {
      type: "category",
      label: "CCS",
      link: {
        type: "generated-index",
        title: "CCS API",
        description:
          "This is a CCS.",
        slug: "/api/CCS"
      },
      // @ts-ignore
      items: require("./docs/api/CCS/sidebar.js")
    },
    {
      type: "category",
      label: "Ceph",
      link: {
        type: "generated-index",
        title: "Ceph API",
        description:
          "This is a Ceph.",
        slug: "/api/Ceph"
      },
      // @ts-ignore
      items: require("./docs/api/Ceph/sidebar.js")
    },
    {
      type: "category",
      label: "Common",
      link: {
        type: "generated-index",
        title: "Common API",
        description:
          "This is a Common.",
        slug: "/api/Common"
      },
      // @ts-ignore
      items: require("./docs/api/Common/sidebar.js")
    },
    {
      type: "category",
      label: "Harbor",
      link: {
        type: "generated-index",
        title: "Harbor API",
        description:
          "This is a Harbor.",
        slug: "/api/Harbor"
      },
      // @ts-ignore
      items: require("./docs/api/Harbor/sidebar.js")
    },
    {
      type: "category",
      label: "Slurm",
      link: {
        type: "generated-index",
        title: "Slurm API",
        description:
          "This is a Slurm.",
        slug: "/api/Slurm"
      },
      // @ts-ignore
      items: require("./docs/api/Slurm/sidebar.js")
    },
    {
      type: "category",
      label: "VCS",
      link: {
        type: "generated-index",
        title: "VCS API",
        description:
          "This is a VCS.",
        slug: "/api/VCS"
      },
      // @ts-ignore
      items: require("./docs/api/VCS/sidebar.js")
    },
  ],
  faq: [
    "faq",
    {
      type: "autogenerated",
      dirName: "faq",
    },
  ],
  ccs_interactive_container: [
    { type: 'autogenerated', dirName: 'ccs-interactive-container' }
  ],
  ccs_interactive_container_concepts_images: [
    { type: 'autogenerated', dirName: 'ccs-interactive-container-concepts-images' }
  ],
  cfs: [
    { type: 'autogenerated', dirName: 'cfs' }
  ],
  cos: [
    { type: 'autogenerated', dirName: 'cos' }
  ],
  hfs: [
    { type: 'autogenerated', dirName: 'hfs' }
  ],
  member: [
    { type: 'autogenerated', dirName: 'member' }
  ],
  member_concepts_roles_permissions: [
    { type: 'autogenerated', dirName: 'member-concepts-roles-permissions' }
  ],
  twnia2_hpc_cli: [
    { type: 'autogenerated', dirName: 'twnia2-hpc-cli' }
  ],
  twnia2_hpc_cli_user_guides_modules: [
    { type: 'autogenerated', dirName: 'twnia2-hpc-cli-user-guides-modules' }
  ],
  oneai: [
    { type: 'autogenerated', dirName: 'oneai' }
  ],
  vcs: [
    { type: 'autogenerated', dirName: 'vcs' }
  ],
  vcs_tutorials_host_secured_multi_web: [
    { type: 'autogenerated', dirName: 'vcs-tutorials-host-secured-multi-web' }
  ],
  vcs_tutorials_secure_web_high_traffic: [
    { type: 'autogenerated', dirName: 'vcs-tutorials-secure-web-high-traffic' }
  ],
  user_guides: [
    { type: 'autogenerated', dirName: 'user-guides' }
  ],
};

module.exports = sidebars;
