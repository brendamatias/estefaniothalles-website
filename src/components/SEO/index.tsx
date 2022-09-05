import * as React from 'react';
import { useSiteMetadata } from '../../hooks/use-site-metadata';

type SEOProps = {
  children: any;
};

export default function SEO({ children }: SEOProps) {
  const {
    title,
    description,
    siteUrl,
    image: pathname,
    author,
    copyright,
    keywords,
  } = useSiteMetadata();

  const seo = {
    author,
    copyright,
    title,
    description,
    image: `${siteUrl}${pathname || ``}`,
    keywords,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="author" content={seo.author} />
      <meta name="copyright" content={seo.copyright} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="keywords" content={seo.keywords} />
      <link rel="icon" href={seo.image} />
      {children}
    </>
  );
}
