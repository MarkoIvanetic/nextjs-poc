import Head from 'next/head'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'

import { Button } from '@mui/material'
import Layout, { siteTitle } from '@components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home({ data = [] }) {
    const [session, loading] = useSession()

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <div>
                    <h1>Github OAuth Demo</h1>

                    {!session ? (
                        <>
                            <Button onClick={() => signIn('github')}>Sign in with Github</Button>
                        </>
                    ) : (
                        <>
                            <p>Not {session.user.name || session.user.email}? Then Logout and login again</p>
                            <Button onClick={signOut}>Logout</Button>
                        </>
                    )}
                </div>
            </section>
            <section className={utilStyles.headingMd}>
                <Link href="/pokemon">Pokedex</Link>
                <br />
                <Link href="/test">Test</Link>
            </section>
        </Layout>
    )
}
