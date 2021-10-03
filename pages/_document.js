/* eslint-disable react/no-danger */
import Document, { Head, Html, Main, NextScript } from 'next/document'

class PokemonDocument extends Document {
    render() {
        return (
            <Html lang="hr-HR">
                <Head>
                    <link
                        rel="preload"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                        as="font"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default PokemonDocument
