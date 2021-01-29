import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useState } from 'react'
import db from '../db.json'
import Button from '../src/components/Button'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Input from '../src/components/Input'
import Link from '../src/components/Link'
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
        <Widget
          as={motion.section}
          transition={{ duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
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

        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>Quizez da Galera</Widget.Header>
          <Widget.Content>
            <ul>
              {db.external.map((linkExternal) => {
                const [projectName, githubUsername] = linkExternal
                  .replace(/\/|https:|\.vercel\.app/g, '')
                  .split('.')
                return (
                  <li key={linkExternal}>
                    <Widget.Topic
                      as={Link}
                      // style={{
                      //   pointerEvents: 'none',
                      //   cursor: 'default',
                      // }}
                      href={`/quiz/${projectName}___${githubUsername}`}
                    >
                      {`${githubUsername}/${projectName}`}
                    </Widget.Topic>
                  </li>
                )
              })}
            </ul>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/zlincon" />
    </QuizBackground>
  )
}
