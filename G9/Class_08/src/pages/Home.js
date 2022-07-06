import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateToCatalog = () => {
    // make api call to update the todo
    navigate("/catalog");
  };
  return (
    <div>
      <h1>HOME</h1>
      <Link to="/contact/email">Go to check our email</Link>
      <button onClick={navigateToCatalog}>Go to Catalog</button>
    </div>
  );
};

export default Home;
