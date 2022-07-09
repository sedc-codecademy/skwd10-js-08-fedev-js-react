import withColor from "./hocs/withColor";

const Second = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <p>Another very long text</p>
    </>
  );
};

export default withColor(Second);
