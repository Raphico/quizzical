import Button from "../components/Button"
import Question from "../components/Question"

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
    <div className="quiz-container">
      {quizElements}
      <div className="check-answers-btn">
        <Button 
          changePage={changePage} 
          value="Check answers" 
        />
      </div>
    </div>
  )
}

export default Quiz
