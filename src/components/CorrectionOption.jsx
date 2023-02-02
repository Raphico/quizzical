function CorrectionOption(props) {
  let color = ''

  if (
    props.opt.picked && props.opt.option === props.answer
    ) {
    color = "#94D7A2"
  } else if (
    props.opt.picked && props.opt.option !== props.answer
    ) {
      color = "#F8BCBC"
    } else if (props.opt.picked === false && props.opt.option === props.answer) {
      color = "#94D7A2"
    }

  const style = {
    backgroundColor: color
  }

  return (
    <div>
      <button 
      className="option" 
      style={style}>
        {props.opt.option}
      </button>
    </div>
  )
}

export default CorrectionOption