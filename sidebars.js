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
  apiSidebar: [
    "api/overview",
    {
      type: "category",
      label: "Endpoints",
      items: [
        "api/actions",
        "api/admin",
        "api/auth",
        "api/communities",
        "api/device-profile",
        "api/downloads",
        "api/events",
        "api/feature-flags",
        "api/goals",
        "api/graphs",
        "api/media-library",
        "api/messages",
        "api/misc",
        "api/policy",
        "api/subscribers",
        "api/summary",
        "api/tag",
        "api/team",
        "api/testimonial",
        "api/user-profile",
        "api/vendors",
      ],
    },
    "api/global-variables",
    "api/database-models",
  ],

  docSidebar: [
    "introduction",
    {
      type: "category",
      label: "Installation",
      collapsed: false,
      items: [
        "installation/api",
        "installation/frontend-admin",
        "installation/frontend-portal",
        "installation/frontend-mobile",
      ]
    },
    {
      type: "category",
      label: "Guides",
      items: [
        "guides/getting-started",
        "guides/testing",
      ]
    },
    {
      type: "category",
      label: "Knowledge Base",
      items: [
        "knowledge/architecture",
        "knowledge/host-names",
        "knowledge/user-roles"]
    }
  ]
};

module.exports = sidebars;
