const Button = () => {
  const handleClick = () => {
    console.log("clicked!");
  };
  return (
    <>
      <button onClick={handleClick}>Click me!</button>
      <button onClick={() => console.log("Second button")}>
        Second Button
      </button>
    </>
  );
};

export default Button;
