import CartList from "../../Components/CartList/CartList";

const CartPage = () => {
  return (
    <section className="page">
      <div className="page__heading">
        <h2>Shopping Cart</h2>
      </div>
      <div className="page__content">
        <CartList />
      </div>
    </section>
  );
};

export default CartPage;
