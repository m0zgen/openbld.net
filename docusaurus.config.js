// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenBLD.net DNS - Block advertising, tracking, telemetry, malicious domains and more for free',
  tagline: 'for free - with GeoDNS, DNSSEC, DoT, DoH',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/openbld.net/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'm0zgen', // Usually your GitHub org/user name.
  projectName: 'openbld.net', // Usually your repo name.
  // deploymentBranch: 'gh-pages',

  onBrokenLinks: 'log',
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
          editUrl:
            'https://github.com/m0zgen/openbld.net/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  // Connect Tailwind
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  customFields: {
    // HTML header
    titleHeader: 'free DNS with Anycast, GeoDNS, DNSSEC, DoH, DoT',
    // Hero, Header title
    titleHomeHeader: 'Block advertising, tracking, telemetry, malicious domains and more...',
  },

  // scripts: [
  //   'https://buttons.github.io/buttons.js',
  //   'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
  //   './js/code-block-buttons.js',
  // ],
  // stylesheets: ['./css/code-block-buttons.css'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'OpenBLD.net DNS',
        logo: {
          alt: 'My Site Logo',
          src: 'img/openbld-navbar-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/m0zgen',
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
                label: 'Intro',
                to: '/docs/intro',
              },
              {
                label: 'Tutorial',
                to: '/docs/tutorial',
              },
              {
                label: 'Disclaimer',
                to: '/docs/changelog',
              }
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/1928123/m0zgen?tab=profile',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/yevgeniy-goncharov/',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/sysadm_in_channel',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/m0zgen',
              },
              {
                label: 'Laboratory',
                href: 'https://lab.sys-adm.in/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OpenBLD.net, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
