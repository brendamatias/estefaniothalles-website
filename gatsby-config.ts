import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Estefanio Thalles Eletricista`,
    description:
      'Em busca de um eletricista em Belo Horizonte? O melhor preço de eletrecisita da sua região. Solicite um orçamento.',
    image: `/ET-logo.svg`,
    siteUrl: `https://estefaniothalles.netlify.com`,
    keywords: 'eletricista, eletricista belo horizonte, elétrica',
    author: `Brenda Matias - LaikaCode`,
    copyright: '© 2022 LaikaCode',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};

export default config;
