const idMatcher = /pokemon\/(?<id>\d+)/

const pokemonIdParser = ({ order, url }) => {
    if (order) {
        return order
    }

    const { id } = url.match(idMatcher)?.groups || {}
    return id
}

export default pokemonIdParser
