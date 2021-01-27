import { useEffect, useState } from 'react'
import db from '../db.json'
import Button from '../src/components/Button'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import QuizLogo from '../src/components/QuizLogo'
import Widget from '../src/components/Widget'

const LoadingWidget = () => (
  <Widget>
    <Widget.Header>Carregando...</Widget.Header>
    <Widget.Content>[Desafio do loading]</Widget.Content>
  </Widget>
)

type Question = {
  question: {
    image: string
    title: string
    description: string
    answer: number
    alternatives: string[]
  }
  questionIndex: number
  handleSubmit: () => void
}

const QuestionWidget = ({
  question,
  questionIndex,
  handleSubmit,
}: Question) => {
  const questionName = `question__${questionIndex}`

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Widget>
      <Widget.Header>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        {`Pergunta ${questionIndex + 1} de ${db.questions.length}`}
      </Widget.Header>
      <img
        src={question.image}
        alt="Descrição"
        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          {question.alternatives.map((alternative, alternativeIndex) => (
            <Widget.Topic
              key={[alternativeIndex]}
              as="label"
              htmlFor={`${alternativeIndex}`}
            >
              <input
                name={questionName}
                id={`${alternativeIndex}`}
                type="radio"
              />
              {alternative}
            </Widget.Topic>
          ))}
          <Button type="submit">Confirmar</Button>
        </form>
      </Widget.Content>
    </Widget>
  )
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
}

function QuizPage() {
  const [screenState, setScreenState] = useState(screenStates.LOADING)
  const [questionIndex, setQuestionIndex] = useState(0)
  const question = db.questions[questionIndex]

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ)
    }, 1000)
  }, [])

  function handleSubmit() {
    setQuestionIndex(questionIndex + 1)
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            handleSubmit={handleSubmit}
          />
        )}
        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.RESULT && (
          <div>Você acertou X questões. Parabéns!</div>
        )}
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/zlincon" />
    </QuizBackground>
  )
}

export default QuizPage
