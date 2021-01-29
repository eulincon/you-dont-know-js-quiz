import { useEffect, useState } from 'react'
import AlternativesForm from '../../components/AlternativesForm'
import BackLinkArrow from '../../components/BackLinkArrow'
import Button from '../../components/Button'
import GitHubCorner from '../../components/GitHubCorner'
import QuizBackground from '../../components/QuizBackground'
import QuizContainer from '../../components/QuizContainer'
import QuizLogo from '../../components/QuizLogo'
import Widget from '../../components/Widget'

type Props = {
  results: boolean[]
}

const ResultWidget = ({ results }: Props) => (
  <Widget>
    <Widget.Header>Results</Widget.Header>
    <Widget.Content>
      <p>
        {`Você acertou ${results.reduce((sum, Actualresult) => {
          if (Actualresult === true) return sum + 1
          return sum
        }, 0)}
        perguntas.`}
      </p>
      <ul>
        {results.map((result, resultIndex) => (
          <li key={`question__${[resultIndex]}`}>
            {`Questão ${resultIndex + 1}: Resultado: ${result}`}
          </li>
        ))}
      </ul>
    </Widget.Content>
  </Widget>
)
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
    explanation?: string
  }
  questionIndex: number
  totalQuestions: number
  onSubmit: () => void
  // eslint-disable-next-line no-unused-vars
  addResult: (_: boolean) => void
}

const QuestionWidget = ({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}: Question) => {
  const questionName = `question__${questionIndex}`
  const [selectedAlternative, setSelectedAlternative] = useState(undefined)
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false)
  const isCorrect = selectedAlternative === question.answer

  const handleSubmitQuestion = (e) => {
    e.preventDefault()
    setIsQuestionSubmited(true)
    setTimeout(() => {
      addResult(isCorrect)
      onSubmit()
      setIsQuestionSubmited(false)
      setSelectedAlternative(undefined)
    }, 3000)
  }

  return (
    <Widget>
      <Widget.Header>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        <BackLinkArrow href="/" />
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
        <AlternativesForm onSubmit={(e) => handleSubmitQuestion(e)}>
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR'
            const isSelected = selectedAlternative === alternativeIndex
            return (
              <Widget.Topic
                key={alternativeId}
                as="label"
                htmlFor={`${alternativeIndex}`}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  name={questionName}
                  id={`${alternativeIndex}`}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            )
          })}
          <Button type="submit" disabled={selectedAlternative === undefined}>
            Confirmar
          </Button>
          {isQuestionSubmited && isCorrect && <p>Você acertou! :)</p>}
          {isQuestionSubmited && !isCorrect && <p>Você errou :(</p>}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  )
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
}

type ExternalQuestions = {
  externalQuestions: [
    {
      image: string
      title: string
      description: string
      answer: number
      alternatives: string[]
      explanation?: string
    }
  ]
  externalBg: string
}

function QuizScreen({ externalQuestions, externalBg }: ExternalQuestions) {
  const [screenState, setScreenState] = useState(screenStates.LOADING)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  // const question = db.questions[currentQuestion]
  const question = externalQuestions[currentQuestion]
  const [results, setResults] = useState([])
  const totalQuestions = externalQuestions.length

  function addResult(result) {
    setResults([...results, result])
  }

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
    <QuizBackground backgroundImage={externalBg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={currentQuestion}
            onSubmit={handleSubmitQuiz}
            totalQuestions={totalQuestions}
            addResult={addResult}
          />
        )}
        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.RESULT && (
          <ResultWidget results={results} />
        )}
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/zlincon" />
    </QuizBackground>
  )
}

export default QuizScreen
