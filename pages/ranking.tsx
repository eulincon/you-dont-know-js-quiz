import QuizBackground from '../src/components/QuizBackground'
import db from '../db.json'

const Ranking = () => {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <h1>Ranking here...</h1>
    </QuizBackground>
  )
}

export default Ranking
