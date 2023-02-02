import { nanoid } from "nanoid"
import CorrectionOption from "./CorrectionOption"

function Corrections(props) {

  const optionsElement = props.options.map(opt => {
    return <CorrectionOption
      key={nanoid()}
      opt={opt}
      answer={props.answer}
    />
  })
  
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

export default Corrections
