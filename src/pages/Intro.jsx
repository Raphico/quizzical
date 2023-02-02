import Button from "../components/Button"
import { Fade } from "react-reveal"

function Intro({ changePage }) {
  return (
    <Fade>
       <div className="container--intro">
        <div className="text-center">
          <h1 className="fs-700 fw-700">Quizzical</h1>
          <p className="fs-500">Some description if needed</p>
          <Button value="Start quiz" changePage={changePage} />
        </div>
      </div>
    </Fade>
  )
}
export default Intro