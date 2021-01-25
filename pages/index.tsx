import styled from 'styled-components'
import Widget from '../src/components/Widget'
import db from '../db.json'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`

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
          <h1>This is realy Js</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            similique magni enim esse praesentium fuga necessitatibus obcaecati,
            sit harum eum quia, blanditiis nisi quis! Architecto dolorum ipsa
            nam molestias repudiandae.
          </p>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/zlincon" />
    </QuizBackground>
  )
}
