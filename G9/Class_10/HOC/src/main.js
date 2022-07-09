import withColor from "./hocs/withColor";

const Main = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <p>This is some very long text</p>
    </>
  );
};

export default withColor(Main);
