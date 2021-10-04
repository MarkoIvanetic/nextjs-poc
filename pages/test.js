import Head from 'next/head'
import Layout from '@components/layout'

import { getSession, useSession } from 'next-auth/client'
import utilStyles from '../styles/utils.module.css'

export default function PokemonList({ data = [] }) {
    const [session, loading] = useSession()
    return (
        <Layout>
            <Head>
                <title>Test page</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Test session: {loading ? 'loading' : !!session}</p>
            </section>
        </Layout>
    )
}

export async function getServerSideProps(ctx) {
    const session = await getSession()
    return {
        props: {
            session
        }
    }
}
