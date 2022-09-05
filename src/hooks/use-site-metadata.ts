import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
          keywords
          author
          copyright
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
