import db from '../db.json'
import QuizBackground from '../src/components/QuizBackground'

const Ranking = () => (
  <QuizBackground backgroundImage={db.bg}>
    <h1>Ranking here...</h1>
  </QuizBackground>
)

export default Ranking
