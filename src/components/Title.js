import ButtonTitle from "./ButtonTitle";

const Title = (props) => {
  // console.log(props);
  return (
    <div style={{ margin: 20 }}>
      <h1 style={{ color: "blue", backgroundColor: "yellow" }}>
        {props.title}
      </h1>
      <p style={{ color: "red" }}>{props.sad ? "Sad story :(" : "Happy :)"}</p>
      <p>{props.description}</p>
      <ButtonTitle />
    </div>
  );
};

export default Title;
