// eslint-disable-next-line import/no-commonjs
module.exports = {
    async redirects() {
        return [
            {
                source: '/pokemon',
                destination: '/pokemon?page=1',
                permanent: true
            }
        ]
    }
}
