import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', 'Poppins', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>You Dont Know JS - Quiz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <!-- Primary Meta Tags --> */}
        <title>You Dont Know JS - Quiz</title>
        <meta name="title" content="You Dont Know JS - Quiz" />
        <meta
          name="description"
          content="Desafie-se em seus conhecimentos sobre Javascript."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://you-dont-know-js-quiz.vercel.app/"
        />
        <meta property="og:title" content="You Dont Know JS - Quiz" />
        <meta
          property="og:description"
          content="Desafie-se em seus conhecimentos sobre Javascript."
        />
        <meta property="og:image" content="/assets/img/background.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://you-dont-know-js-quiz.vercel.app/"
        />
        <meta property="twitter:title" content="You Dont Know JS - Quiz" />
        <meta
          property="twitter:description"
          content="Desafie-se em seus conhecimentos sobre Javascript."
        />
        <meta property="twitter:image" content="/assets/img/background.jpg" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
