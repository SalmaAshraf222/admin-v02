import Navigation from "../components/Nav";
import Welcome from "../components/welcome/welcome";

const Home = () => {
  return (
    <div className="container-fluid gx-0">
      <header>
        <h1>Admin Dashboard</h1>
      </header>
      <Navigation />
      <Welcome />
    </div>
  );
};

export default Home;
