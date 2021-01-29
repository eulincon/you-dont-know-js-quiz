import { ThemeProvider } from 'styled-components'
import QuizScreen from '../../src/screens/Quiz'

type PropsExterno = {
  dbExterno: {
    questions: [
      {
        image: string
        title: string
        description: string
        answer: number
        alternatives: string[]
        explanation?: string
      }
    ]
    bg: string
    theme: object
  }
}

export default function QuizDaGaleraPage({ dbExterno }: PropsExterno) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
      />
    </ThemeProvider>
  )
}

export async function getServerSideProps(context) {
  const [projectName, githubUsername] = context.query.id.split('___')

  const dbExterno = await fetch(
    // eslint-disable-next-line comma-dangle
    `https://${projectName}.${githubUsername}.vercel.app/api/db`
  ).then((respostaDoServer) => {
    if (respostaDoServer.ok) return respostaDoServer.json()

    throw new Error('Falha em pegar os dados')
  })

  return {
    props: { dbExterno },
  }
}
