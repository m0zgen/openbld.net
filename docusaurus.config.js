// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenBLD',
  tagline: 'Free DNS - with DoT, DoH - HTTP/2, TLSv1.2, TLSv1.3, GeoDNS',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // url: 'https://m0zgen.github.io',
  url: 'https://openbld.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: '/openbld.net/',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'm0zgen', // Usually your GitHub org/user name.
  projectName: 'openbld.net', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  onBrokenLinks: 'log',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn', // or 'throw', 'ignore'
    },
  },

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
          // sidebarCollapsible: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/m0zgen/openbld.net/edit/dev/',
        },
        blog: {
          blogTitle: 'OpenBLD.net Blog',
          blogDescription: 'OpenBLD.net news and updates',
          postsPerPage: 6,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',

          feedOptions: {
            type: ['rss', 'atom', 'json'],
            title: 'OpenBLD.net Blog',
            description: 'OpenBLD.net news, DNS security notes, infrastructure updates, and real-world threat insights.',
            language: 'en',
            limit: 5,
          },

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
    serviceName: 'OpenBLD.net | ',
    serviceDescription: 'Free DNS with Ad and Malware Blocking',
    siteDescription: 'OpenBLD.net — Free DNS with block ads, malware and proactive cybersecurity. Be yourself, be focused.',
    // Hero, Header title
    titleHomeHeader: 'Fast, clean, free, secure DNS: Block ads, telemetry, cybersecurity threats',
  },

  // scripts: [
  //   'https://buttons.github.io/buttons.js',
  //   'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
  //   './js/code-block-buttons.js',
  // ],
  // stylesheets: ['./css/code-block-buttons.css'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'kz'],
    path: 'i18n',
    localeConfigs: {
        en: {
            label: 'English',
        },
        ru: {
            label: 'Русский',
        },
        kz: {
            label: 'Қазақша',
        },
    }
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/open-bld-og-logo-1200.jpg',
      navbar: {
        title: 'OpenBLD.net DNS',
        logo: {
          alt: 'OpenBLD.net Logo',
          src: 'img/openbld-navbar-logo-64.webp',
          width: 32,
          height: 32,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },

          {
            to: '/docs/overwiew/how-it-works',
            label: 'How it works',
            position: 'left',
          },

          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
          },

          {
            to: '/#live-stats',
            label: 'Live Stats',
            position: 'right',
          },

          {
            href: 'https://github.com/m0zgen',
            label: 'GitHub',
            position: 'right',
          },

          {
            type: 'localeDropdown',
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
                label: 'Get Started',
                to: '/docs/category/get-started',
              },
              {
                label: 'Disclaimer',
                to: '/docs/disclaimer',
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
                href: 'https://www.linkedin.com/company/openbld',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/openbld',
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
          {
            title: 'Donation',
            items: [
              {
                label: 'Paypal',
                href: 'https://www.paypal.com/paypalme/m0zgen',
              },
              {
                label: 'Ko-fi',
                href: 'https://ko-fi.com/sysadminkz/goal?g=14',
              },
              {
                label: 'DonorBox',
                href: 'https://donorbox.org/open-bld-dns-donation?default_interval=m&amount=10',
              },
              {
                label: 'YooMoney',
                href: 'https://yoomoney.ru/to/41001928837376',
              },
            ],
          },
        ],
        copyright: `© 2019-${new Date().getFullYear()} OpenBLD.net.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
