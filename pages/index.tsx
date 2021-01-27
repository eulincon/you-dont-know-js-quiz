import { useRouter } from 'next/router'
import { useState } from 'react'
import db from '../db.json'
import Button from '../src/components/Button'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Input from '../src/components/Input'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import QuizLogo from '../src/components/QuizLogo'
import Widget from '../src/components/Widget'

export default function Home() {
  const router = useRouter()
  const [name, setName] = useState<string>('')

  const handleSubmit = (event) => {
    event.preventDefault()
    router.push(`/quiz?name=${name}`)
    console.log(event)
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>You don&apos;t Know JS!</Widget.Header>
          <Widget.Content>
            <form onSubmit={(e) => handleSubmit(e)}>
              <Input
                name="nomeDoUsuario"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Diz aí teu nome"
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>Quizez da Galera</Widget.Header>
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
