// const withColor = (WrappedComponent) => {
//   const colors = ["yellow", "red", "blue", "green"];
//   const color = Math.floor(Math.random() * 4);

//   return (props) => {
//     return (
//       <div className={`${colors[color]}-color`}>
//         <WrappedComponent {...props} />
//       </div>
//     );
//   };
// };

const withColor = (WrappedComponent) => (props) => {
  const colors = ["yellow", "red", "blue", "green"];
  const color = Math.floor(Math.random() * 4);
  return (
    <div className={`${colors[color]}-color`}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withColor;
