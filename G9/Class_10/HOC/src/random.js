import withKey from "./hocs/withKey";

const Random = (props) => {
  console.log(props);
  return (
    <div>
      <h1>RANDOM TITLE</h1>
    </div>
  );
};

export default withKey(Random);
