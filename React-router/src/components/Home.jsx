import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about"> Go to about</Link>
      <br />
      <button onClick={() => navigate("/about")}>Go to about</button>
      <br />
      <button onClick={() => navigate(-1)}>back</button>
      <br />
      <button onClick={() => navigate(1)}>forward</button>
      <br />

      {/* Passing Data via Query Params */}
      <Link to="/products?id=10&name=phone">Products</Link>
      <br />

      {/* Passing Data Between Pages (Route Params) */}
      <Link to="/users/2">Users</Link>
      <br />

      {/* Passing Data Using Navigation State */}
      <button
        onClick={() =>
          navigate("/profile", {
            state: { name: "Alice", age: 22 },
          })
        }
      >
        Profile
      </button>
    </div>
  );
};

export default Home;
