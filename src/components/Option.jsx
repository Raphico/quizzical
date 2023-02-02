function Option(props) {
  const style = {
    backgroundColor: props.opt.picked ? "#D6DBF5" : "#F5F7FB"
  }

  return (
    <div>
      <button 
      onClick={() => props.selectAnswer(props.id, props.opt.option)} 
      className="option" 
      style={style}>
        {props.opt.option}
      </button>
    </div>
  )
}
export default Option