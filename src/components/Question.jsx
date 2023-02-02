import { nanoid } from "nanoid"
import Option from "./Option"

function Question(props) {
  const optionsElement = props.options.map(opt => <Option 
      key={nanoid()}
      id={props.id}
      selectAnswer={props.selectAnswer} 
      opt={opt}
      answer={props.answer}
    />)

  return (
    <div>
      <h1 className="fs-600 fw-700">{props.question}</h1>

      <div className="options flex">
        {optionsElement}
      </div>
      
      <div className="bar"></div>
    </div>
  )
}

export default Question
