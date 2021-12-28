import '../styles/globals.css'
import { SWRConfig } from 'swr'

import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps, fallback }) {
    return (
        <Layout>
            <SWRConfig value={{ provider: () => new Map() }}>
                <Component {...pageProps} />
            </SWRConfig>
        </Layout>
    )
}

export default MyApp
