import '../styles/global.css'

import { Provider } from 'next-auth/client'

export default function App({ Component, pageProps: { pageProps } }) {
    return (
        <Provider session={pageProps.session}>
            <Component {...pageProps} />
        </Provider>
    )
}
