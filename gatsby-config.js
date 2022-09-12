module.exports = {
  siteMetadata: {
    title: "Heallo UK",
    description: "We design your perfect medical journey in Turkey",
    siteUrl: "https://heallo.co.uk",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
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
    "gatsby-plugin-netlify", // make sure to keep it last in the array
    {
      resolve: "gatsby-plugin-advanced-sitemap",
      options: {
        exclude: [
          "/admin",
          "/contact/thanks",
          "/404",
          "/404.html",
        ]
      }
    },
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: "https://heallo.co.uk",
        stripQueryString: true,
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "",
        sitemap: 'https://heallo.co.uk/sitemap-pages.xml',
        policy: [{userAgent: '*', disallow: ['/admin']}]
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-57QBC32",
        enableWebVitalsTracking: true,
        includeInDevelopment: true
      }
    }
  ],
};
