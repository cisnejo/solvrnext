import '../styles/globals.css'

import {SessionProvider} from 'next-auth/react'
import type { AppProps } from 'next/app'
import Home from '.'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Component {...pageProps}/>
    </SessionProvider>
    )
}

export default MyApp
