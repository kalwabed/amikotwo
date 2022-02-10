import { AppProps } from 'next/app'

import globalStyles from '~global-styles'

export default function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return <Component {...pageProps} />
}
