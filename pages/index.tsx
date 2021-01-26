import styled from 'styled-components'
import Widget from '../src/components/Widget'
import db from '../db.json'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizLogo from '../src/components/QuizLogo'
import Head from 'next/head'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>JS Quiz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <!-- Primary Meta Tags --> */}
        <title>JS Quiz</title>
        <meta name="title" content="JS Quiz" />
        <meta name="description" content="" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://you-dont-know-js-quiz.vercel.app/"
        />
        <meta property="og:title" content="JS Quiz" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://you-dont-know-js-quiz.vercel.app/"
        />
        <meta property="twitter:title" content="JS Quiz" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content="" />
      </Head>
      <QuizLogo />
      <QuizContainer>
        <Widget>
          <Widget.Header>sd</Widget.Header>
          <Widget.Content>
            <h1>This is realy Js</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              similique magni enim esse praesentium fuga necessitatibus
              obcaecati, sit harum eum quia, blanditiis nisi quis! Architecto
              dolorum ipsa nam molestias repudiandae.
            </p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>sd</Widget.Header>
          <Widget.Content>
            <h1>This is realy Js</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              similique magni enim esse praesentium fuga necessitatibus
              obcaecati, sit harum eum quia, blanditiis nisi quis! Architecto
              dolorum ipsa nam molestias repudiandae.
            </p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/zlincon" />
    </QuizBackground>
  )
}
