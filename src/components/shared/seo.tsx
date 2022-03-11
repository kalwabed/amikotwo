import { DefaultSeo, NextSeoProps } from 'next-seo'

const app = {
  siteUrl: 'https://amikotwo.vercel.app',
  description: 'Web base Bot Presensi. Originated from Amikom Bot Presensi.',
  defaultOgImg: '/assets/cover.png'
}

const defaultSeoConfig: NextSeoProps = {
  defaultTitle: 'AmikoTwo',
  description: app.description,
  canonical: app.siteUrl,
  additionalMetaTags: [{ name: 'image', content: app.defaultOgImg }],
  additionalLinkTags: [
    { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon', sizes: 'any' },
    { rel: 'icon', href: '/assets/icon.svg', type: 'image/svg+xml' },
    { rel: 'apple-touch-icon', href: '/assets/apple-touch-icon.png' },
    { rel: 'manifest', href: '/manifest.webmanifest' }
  ],
  openGraph: {
    description: app.description,
    locale: 'id',
    site_name: 'AmikoTwo',
    url: app.siteUrl,
    title: 'AmikoTwo',
    type: 'website',
    images: [
      {
        width: 1200,
        height: 628,
        url: app.defaultOgImg,
        alt: 'AmikoTwo default og-image'
      }
    ]
  }
}

export const DefaultSEO = () => {
  return <DefaultSeo {...defaultSeoConfig} />
}
