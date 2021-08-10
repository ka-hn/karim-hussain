module.exports = {
  siteMetadata: {
    title: 'Karim Hussain - Lead Solution Architect',
    description:
      'Karim Hussain is a building automation specialist, solution architect and problem solver. Ensures life on earth with energy efficient and sustainable buildings.',
    author: 'Karim Hussain',
    siteUrl: 'https://karim-hussain.com/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Karim Hussain - Lead Solution Architect & Software Designer',
        short_name: 'Karim Hussain',
        description:
          'Professional problem solver and technical enthusiast. Reducing carbon footprint and working for a better tomorrow with modern technologies in buildings.',
        lang: 'en',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        theme_color_in_head: false,
        display: 'standalone',
        icon: 'src/images/favicon.png',
        cache_busting_mode: 'none',
      },
    },
    'gatsby-plugin-material-ui',
    'gatsby-plugin-styled-components',
  ],
};
