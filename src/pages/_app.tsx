import { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

import LayoutRoot from '~components/layout/layout-root'
import { DefaultSEO } from '~components/shared/seo'
import globalStyles from '~global-styles'

export default function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <>
      <DefaultSEO />
      <LayoutRoot>
        <Toaster />
        <Component {...pageProps} />
      </LayoutRoot>
    </>
  )
}
