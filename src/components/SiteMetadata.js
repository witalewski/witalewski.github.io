import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const SiteMetadata = ({ pathname }) => {
  const {
    site: {
      siteMetadata: {
        siteUrl,
        title,
        description,
        image,
        social: { twitter },
      },
    },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          siteUrl
          title
          image
          social {
            twitter
          }
        }
      }
    }
  `);

  return (
    <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
      <html lang="en" />
      <link rel="canonical" href={`${siteUrl}${pathname}`} />
      <meta name="docsearch:version" content="2.0" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en" />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="360" />
      <meta property="og:image:height" content="360" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:site" content={siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SiteMetadata;
