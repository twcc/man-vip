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
  openApiSidebar: [
    {
      type: "category",
      label: "CCS",
      link: {
        type: "generated-index",
        title: "CCS API",
        /**description:
          "This is a CCS.",*/
        slug: "/api/CCS"
      },
      // @ts-ignore
      items: require("./docs/api/CCS/sidebar.js")
    },
    {
      type: "category",
      label: "COS",
      link: {
        type: "generated-index",
        title: "COS API",
        /**description:
          "This is a Ceph.",*/
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
        /**description:
          "This is a Common.",*/
        slug: "/api/Common"
      },
      // @ts-ignore
      items: require("./docs/api/Common/sidebar.js")
    },
    // {
    //   type: "category",
    //   label: "Harbor",
    //   link: {
    //     type: "generated-index",
    //     title: "Harbor API",
    //     /**description:
    //       "This is a Harbor.",*/
    //     slug: "/api/Harbor"
    //   },
    //   // @ts-ignore
    //   items: require("./docs/api/Harbor/sidebar.js")
    // },
    // {
    //   type: "category",
    //   label: "Slurm",
    //   link: {
    //     type: "generated-index",
    //     title: "Slurm API",
    //     /**description:
    //       "This is a Slurm.",*/
    //     slug: "/api/Slurm"
    //   },
    //   // @ts-ignore
    //   items: require("./docs/api/Slurm/sidebar.js")
    // },
    {
      type: "category",
      label: "VCS",
      link: {
        type: "generated-index",
        title: "VCS API",
        /**description:
          "This is a VCS.",*/
        slug: "/api/VCS"
      },
      // @ts-ignore
      items: require("./docs/api/VCS/sidebar.js")
    },
  ],
  faqs: [
    {
      type: "autogenerated",
      dirName: "faqs",
    },
  ],
  user_guides: [
    { type: "autogenerated", dirName: "user-guides"}
  ],
};

module.exports = sidebars;