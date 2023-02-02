import Corrections from "../components/Corrections"
import { useEffect, useState } from "react"

function Correction({ questionsArray, changePage, handleChangeQuestion }) {
  const [score, setScore] = useState(0)

  useEffect(() => {
    for (let i = 0; i < questionsArray.length; i++) {
      const questionObject = questionsArray[i]

      const pickedOption = questionObject.options.find(opt => 
        opt.picked === true) || ''
  
      if (questionObject.answer === pickedOption.option) {
        setScore(oldScore => oldScore + 1) 
      }
    }
  }, [])

  function handleChange() {
    handleChangeQuestion()
    changePage()
  }

  const correctionElements = questionsArray.map(questionObject => {
    return <Corrections 
      key={questionObject.id} 
      question={questionObject.question}
      options={questionObject.options}
      answer={questionObject.answer}
    />
  })

  return (
    <div className="quiz-container">
      {correctionElements}

      <div 
        className="text-center" 
        style={{ marginTop: "2rem" }}
      >
        <h1 className="fs-600 fw-700">You got {Math.ceil(score / 2)}/5 correct answers &#129315;</h1>
        <button onClick={handleChange} className="btn">Play again</button>
      </div>
    </div>
  )
}

export default Correction
