import Navigation from "../components/Nav";
import Welcome from "../components/welcome/welcome";
import decor from "../assets/Decore.jpg"
const Home = () => {
  return (
    <div className="container-fluid gx-0 bg-img"
    style={{
    backgroundImage: `url(${decor})`,
        backgroundPosition: " right top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }}
    >
     
      <Navigation />
      <Welcome />
    </div>
  );
};

export default Home;
