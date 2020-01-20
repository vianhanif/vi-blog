module.exports = {
  siteMetadata: {
    title: `Ananda's Blog`,
    author: `Alvian Rahman Hanif`,
    description: `Ananda Collection of Stories`,
    siteUrl: `https://blog.ananda.family/`,
    social: {
      twitter: `twit_vianhanif`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `ananda-family`
      }
    },
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        // your segment write key for your production environment
        // when process.env.NODE_ENV === 'production'
        // required; non-empty string
        prodKey: process.env.SEGMENT_KEY,
  
        // boolean (defaults to false) on whether you want
        // to include analytics.page() automatically
        // if false, see below on how to track pageviews manually
        trackPage: true,
  
        // boolean (defaults to false); whether to delay load Segment
        // ADVANCED FEATURE: only use if you leverage client-side routing (ie, Gatsby <Link>)
        // This feature will force Segment to load _after_ either a page routing change
        // or user scroll, whichever comes first. This delay time is controlled by
        // `delayLoadTime` setting. This feature is used to help improve your website's
        // TTI (for SEO, UX, etc).  See links below for more info.
        // NOTE: But if you are using server-side routing and enable this feature,
        // Segment will never load (because although client-side routing does not do
        // a full page refresh, server-side routing does, thereby preventing Segment
        // from ever loading).
        // See here for more context:
        // GIF: https://github.com/benjaminhoffman/gatsby-plugin-segment-js/pull/19#issuecomment-559569483
        // TTI: https://github.com/GoogleChrome/lighthouse/blob/master/docs/scoring.md#performance
        // Problem/solution: https://marketingexamples.com/seo/performance
        delayLoad: true,
  
        // number (default to 1000); time to wait after scroll or route change
        // To be used when `delayLoad` is set to `true`
        delayLoadTime: 1000
      }
    },
    `gatsby-plugin-netlify-cms`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
