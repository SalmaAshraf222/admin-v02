import Navigation from "../components/Nav";
import Welcome from "../components/welcome/welcome";
import decor from "../assets/Decore.png"
const Home = () => {
  return (
    <div className="container-fluid gx-0 bg-img"
    style={{backgroundImage: `url(${decor})` ,
    backgroundPosition:"right top",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat"}}>
      <header style={{backgroundColor:" #E76D24"}}>
        
        <h1>Admin Dashboard</h1>
      </header>
      <Navigation />
      <Welcome />
    </div>
  );
};

export default Home;
