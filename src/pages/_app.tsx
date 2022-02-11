import { AppProps } from 'next/app'
import Head from 'next/head'
import LayoutRoot from '~components/layout/layout-root'

import globalStyles from '~global-styles'

export default function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <LayoutRoot>
        <Component {...pageProps} />
      </LayoutRoot>
    </>
  )
}
