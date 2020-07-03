import { Head } from 'next/head'

import GlobalStyles from '../styles/global'

function App({ Component, pageProps }) {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet"></link>
            <GlobalStyles />
            <Component {...pageProps} />
        </>

    )
}

export default App