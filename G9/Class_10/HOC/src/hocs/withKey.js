const withKey = (Component) => (props) => {
  const extraProp = props.theme === "white" ? "Goce" : "Jana";
  return (
    <Component {...props} {...{ firstName: extraProp }} key={Math.random()} />
  );
};

export default withKey;
