import Head from 'next/head'
import Link from 'next/link'
import Pagination from '@mui/material/Pagination'
import { getPokemonList } from '@api/pokemonProvider'
import Layout, { siteTitle } from '@components/layout'

import utilStyles from '../styles/utils.module.css'

export default function PokemonList({ data = [] }) {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>{' '}
            </Head>
            <section className={utilStyles.headingMd}>
                <ul>
                    {data.map((pokemon, i) => {
                        return (
                            <li key={`pokemon-${pokemon.name}`}>
                                <Link href={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
                            </li>
                        )
                    })}
                </ul>
                <Pagination count={10} variant="outlined" shape="rounded" />
            </section>
        </Layout>
    )
}

export async function getStaticProps(ctx) {
    const { params } = ctx
    console.log(params)
    const data = await getPokemonList(params?.page || 1)
    return {
        props: {
            data
        }
    }
}
