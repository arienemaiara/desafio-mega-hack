import 'react-toastify/dist/ReactToastify.css';

import GlobalStyles from '../styles/global'
import { ToastContainer } from 'react-toastify';

function App({ Component, pageProps }) {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet"></link>
            <GlobalStyles />
            <ToastContainer />
            <Component {...pageProps} />
        </>

    )
}

export default App