import Button from "../components/Button"
import Question from "../components/Question"
import { Fade } from "react-reveal"

function Quiz({ questionsArray, selectAnswer, changePage }) {
  const quizElements = questionsArray.map(questionObject => {
    return <Question 
      key={questionObject.id} 
      question={questionObject.question}
      id={questionObject.id}
      options={questionObject.options} 
      answer={questionObject.answer}
      selectAnswer={selectAnswer}
    />
  })

  return (
    <Fade>
      <div className="quiz-container">
        {quizElements}
        <div className="check-answers-btn">
          <Button 
            changePage={changePage} 
            value="Check answers" 
          />
        </div>
      </div>
    </Fade>
  )
}

export default Quiz
