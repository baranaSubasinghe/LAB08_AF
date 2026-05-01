function Button({ text, type, size }) {
  return (
    <button className={`btn ${type} ${size}`}>
      {text}
    </button>
  );
}

export default Button;