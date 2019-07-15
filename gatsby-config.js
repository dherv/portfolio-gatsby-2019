module.exports = {
  siteMetadata: {
    title: `Damien Hervieux`,
    subtitle: `Fullstack Developer`,
    description: `I started my career in June 2018 and worked on various projects since then. I am currently living in Tokyo with my family with whom I usually spend my free time. 
    I also enjoy studying programming, watching movies and practicing jiujitsu.
    Just below are the side projects I enjoy developing at home`,
    author: `@dherv`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Open Sans:300,400,600"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "portfolio-gatsby-dherv",
        protocol: "https",
        hostname: "www.dherv.com",
      },
    },
    `gatsby-transformer-remark`,
    "gatsby-transformer-json",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
