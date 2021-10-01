import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home({ data = [] }) {
    console.log(data)
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <ul>
                    {data.map((pokemon, i) => {
                        // return <p key={pokemon.name}>{pokemon.name}</p>
                        return (
                            <li key={`pokemon-${pokemon.name}`}>
                                <Link href={`/pokemon/${i + 1}`}>{pokemon.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const { results } = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151').then(response => response.json())
    return {
        props: {
            data: results
        }
    }
}
