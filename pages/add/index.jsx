import React, { useEffect, useState } from 'react'

const AddIndex = () => {

  const [questions, setQuestions] = useState([]);  

  const makeQuestions = () => {
    setQuestions([questions, 'new q'])
  }
  useEffect(() => makeQuestions(), [])
  return (
    <div>
      <div>{questions.map((q, idx) => <p key={idx}>{q}</p>)}</div>
      <div>□ = <input type="number" /></div>

    </div>
  )
}

export default AddIndex