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
  totalQuestions: number
  onSubmit: () => void
}

const QuestionWidget = ({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
}: Question) => {
  const questionName = `question__${questionIndex}`

  const handleSubmitQuestion = (e) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <Widget>
      <Widget.Header>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
      </Widget.Header>
      {question.image && (
        <img
          src={question.image}
          alt="Descrição"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <form onSubmit={(e) => handleSubmitQuestion(e)}>
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
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const question = db.questions[currentQuestion]
  const totalQuestions = db.questions.length

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ)
    }, 1000)
  }, [])

  function handleSubmitQuiz() {
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion)
    } else {
      setScreenState(screenStates.RESULT)
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={currentQuestion}
            onSubmit={handleSubmitQuiz}
            totalQuestions={totalQuestions}
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
