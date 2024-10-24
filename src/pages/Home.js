import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Better Clone</h1>
      <p>Get the best mortgage rates.</p>
      <div className="buttons">
        <Link to="/calculator">
          <button>Mortgage Calculator</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
