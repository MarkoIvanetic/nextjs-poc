import pokemonIdParser from '@utils/pokemonIdParser'

const getPokemonList = async (page = 1) => {
    const offset = (page - 1) * 30
    const { results } = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=30&offset=${offset}`).then(response =>
        response.json()
    )

    const data = results.map(pokemon => {
        return { ...pokemon, id: pokemonIdParser(pokemon) }
    })
    return data
}

const getPokemon = async id => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => response.json())
    return data
}

export { getPokemonList, getPokemon }
