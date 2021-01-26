import Link from 'next/link'
import db from '../db.json'

function Quiz() {
  return (
    <>
      <div style={{ color: 'black' }}>Hey, i am Quiz</div>
      <Link href="/">Go home</Link>
    </>
  )
}

export default Quiz
