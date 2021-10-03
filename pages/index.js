import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'

import utilStyles from '../styles/utils.module.css'

export default function Home({ data = [] }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <Link href="/pokemon">Pokedex</Link>
                <br />
                <Link href="/test">Test</Link>
            </section>
        </Layout>
    )
}
