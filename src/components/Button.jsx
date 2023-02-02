function Button({ value, changePage }) {
  return (
    <div>
      <button onClick={changePage} className="btn">{value}</button>
    </div>
  )
}

export default Button