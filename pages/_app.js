import '../styles/globals.css'
import Head from 'next/head'
import { SWRConfig } from 'swr'

import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps, fallback }) {
    return (
        <Layout>
            <Head>
                <title>NextJS App</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <SWRConfig value={{ provider: () => new Map() }}>
                <Component {...pageProps} />
            </SWRConfig>
        </Layout>
    )
}

export default MyApp
