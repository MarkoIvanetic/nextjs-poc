import Head from 'next/head'
import Layout from '@components/layout'

import utilStyles from '../styles/utils.module.css'

export default function PokemonList({ data = [] }) {
    return (
        <Layout>
            <Head>
                <title>Test page</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Protected route</p>
            </section>
        </Layout>
    )
}
