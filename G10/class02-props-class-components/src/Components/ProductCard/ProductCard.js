//Importing css module classes into a react component
import classes from "./ProductCard.module.css";

const ProductCard = props => {
  console.log(props);
  const { title, description, price } = props.productData;
  return (
    //Applying css module classes to html elements
    <div className={classes.Card}>
      <h4>{title}</h4>
      <p>{description}</p>
      <div>
        <strong className={classes.price}>Price: {price}$</strong>
      </div>
    </div>
  );
};

export default ProductCard;
