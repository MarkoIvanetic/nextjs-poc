import Layout from '../../components/layout'

export default function Pokemon({ pokemon }) {
    return (
        <Layout>
            <h1>{`${pokemon.name} (#${pokemon.order})`}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </Layout>
    )
}

export async function getStaticPaths() {
    const { results } = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151').then(response => response.json())
    return {
        paths: results.map((pokemon, i) => {
            return {
                params: {
                    id: `${i + 1}`,
                    name: pokemon.name
                }
            }
        }),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { id } = params
    // Fetch necessary data for the blog post using params.id
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => response.json())
    return {
        props: {
            pokemon: data
        }
    }
}
