import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import { lightTheme } from "../styles/theme"

const SEO = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:site_name`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `https://github.com/rico157/rico157.github.io/blob/gatsby-portfolio/content/index/preview/preview.png?raw=true`,
        },
        {
          name: `twitter:image`,
          content: `https://github.com/rico157/rico157.github.io/blob/gatsby-portfolio/content/index/preview/preview.png?raw=true`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `msapplication-TileColor`,
          content: lightTheme.colors.primary,
        },
        {
          name: `theme-color`,
          content: lightTheme.colors.primary,
        },
      ].concat(meta)}
    />
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.array,
  lang: PropTypes.string,
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default SEO
