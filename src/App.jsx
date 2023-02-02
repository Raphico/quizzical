import Intro from "./pages/Intro"
import Quiz from "./pages/Quiz"
import Correction from "./pages/Correction"
import { useEffect, useState } from "react"
import { nanoid } from "nanoid"


function App() {
  const [page, setPage] = useState('intro')
  const [questionsArray, setQuestionsArray] = useState([])
  const [changeQuestion, setChangeQuestion] = useState(false)

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=23&difficulty=medium&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        const dataFromApi = data.results

        /* 
          [
            {
              question: "blah blah",
              options: [{ option: '', picked: true || false }],
              answer: "the answer",
            }
          ]
        */
        const questions = dataFromApi.map(data => {
          return {
            id: nanoid(),

            question: data.question,

            options: [...data.incorrect_answers.map(ans => (
              { option: ans, picked: false }
            )), { option: data.correct_answer, picked: false }],

            answer: data.correct_answer
          }
        })

        setQuestionsArray(questions)
      })
  }, [changeQuestion])

  function selectAnswer(id, answer) {
    setQuestionsArray(oldQuestionsArray => oldQuestionsArray.map(
      questionObject => {
        if (questionObject.id === id) {
          const options = questionObject.options
  
          const newOptions = options.map(opt => 
            opt.option === answer
            ? { ...opt, picked: !opt.picked } 
            : { ...opt, picked: false }
          )
  
          return {
            ...questionObject, 
            options: newOptions
          }
        }

        return {
          ...questionObject
        }
    }))
  }

  function changePage(page) {
    setPage(page)
  }

  function handleChangeQuestion() {
    setChangeQuestion(oldQuestion => !oldQuestion)
  }

  return (
    <div className="container">
      {page === 'intro' && <Intro 
        changePage={() => changePage('quiz')} 
      />}

      {page === 'quiz' && <Quiz 
        questionsArray={questionsArray}
        selectAnswer={selectAnswer}
        changePage={() => changePage('correction')}
      />}

      {page === 'correction' && <Correction 
        questionsArray={questionsArray}
        handleChangeQuestion={handleChangeQuestion}
        changePage={() => changePage('quiz')} 
      />}
    </div>
  )
}

export default App
