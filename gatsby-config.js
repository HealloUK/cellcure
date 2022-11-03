module.exports = {
  siteMetadata: {
    title: "Edge Medica",
    description: "We provide a tailored and comprehensive treatment approach that helps patients with difficult-to-treat diseases including autism, multiple sclerosis, diabetes type 2, stroke, arthritis, COPD, Parkinson's improve their condition and quality of life.",
    siteUrl: "https://stemcellpoint.com",
  },
  trailingSlash: "never",
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          indentedSyntax: true,
        },
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/all.sass"], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    {
      resolve: "gatsby-plugin-advanced-sitemap",
      options: {
        exclude: [
          "/admin",
          "/tags",
          "/contact/thanks",
          "/offline-plugin-app-shell-fallback",
          "/404",
          "/404.html",
        ]
      }
    },
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://stemcellpoint.com",
        stripQueryString: true,
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "",
        sitemap: 'https://stemcellpoint.com/sitemap-pages.xml',
        policy: [{userAgent: '*', disallow: ['/admin']}]
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-K5W48Q5",
        enableWebVitalsTracking: true,
        includeInDevelopment: false
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
        purgeCSSOptions: {
          // https://purgecss.com/configuration.html#options
          safelist: ['blockquote'], // Don't remove this selector
        },
        // More options defined here https://purgecss.com/configuration.html#options
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stem Cell Point`,
        short_name: `Stem Cell Point`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#7c4bc0`,
        display: `standalone`,
        icon: `src/assets/images/favicons/android-chrome-512x512.png`,
        icons: [
          {
            src: `src/assets/images/favicons/maskable_icon_x192.png`,
            sizes: `192x192`,
            type: `image/png`,
            purpose: `any maskable`
          },
          {
            src: `src/assets/images/favicons/maskable_icon_x512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `any maskable`
          }
        ]
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-preact",
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
