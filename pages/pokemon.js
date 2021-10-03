import Head from 'next/head'
import Link from 'next/link'
import Pagination from '@mui/material/Pagination'
import { getPokemonList, getPokemon } from '@api/pokemonProvider'
import Layout, { siteTitle } from '@components/layout'

import { useRouter } from 'next/router'
import { Button } from '@mui/material'
import utilStyles from '../styles/utils.module.css'

const PAGE_COUNT = Math.ceil(151 / 30)

export default function PokemonList({ data = [] }) {
    const router = useRouter()

    const page = +router.query.page || 1

    const onPageChange = newPage => {
        // replace so that browsers "back" doesnt go to previous page
        router.replace({
            pathname: router.pathname,
            query: { page: newPage }
        })
    }

    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <Button onClick={() => getPokemon(5)}>Test rewrite</Button>
                <ul>
                    {data.map((pokemon, i) => {
                        return (
                            <li key={`pokemon-${pokemon.name}`}>
                                <Link href={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
                            </li>
                        )
                    })}
                </ul>
                <Pagination
                    count={PAGE_COUNT}
                    page={page}
                    variant="outlined"
                    shape="rounded"
                    onChange={(e, newPage) => {
                        onPageChange(newPage)
                    }}
                />
            </section>
        </Layout>
    )
}

export async function getServerSideProps(ctx) {
    const { query } = ctx
    const data = await getPokemonList(query?.page || 1)
    return {
        props: {
            data
        }
    }
}
