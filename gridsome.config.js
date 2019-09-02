// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const postcssCustomProperties = require('postcss-custom-properties')

const postcssPlugins = [
  tailwind(),
  postcssCustomProperties()
]
 
if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
  siteName: 'Comunidad boliviana de Vue.js',
  siteDescription: 'Somos desarrolladores y entusistas en el Framework Vue.js y todo lo relazionado con el Desarrollo web en Bolivia',
  siteUrl: 'https://vuejsbolivia.github.io',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            route: 'tag/:id',
            create: true
          }
        },
        remark: {
          plugins: [
            [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
          ]
        }
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Comunidad boliviana de Vue.js',
          feed_url: 'https://vuejsbolivia.github.io/rss.xml',
          site_url: 'https://vuejsbolivia.github.io/'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.summary,
          url: 'https://vuejsbolivia.github.io' + node.path,
          author: 'Comunidad boliviana de Vue.js',
          date: node.date
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
