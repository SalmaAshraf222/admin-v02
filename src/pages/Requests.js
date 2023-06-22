import Navigation from "../components/Nav";
import decor from "../assets/Decore.jpg";
import HotelRequests from "../components/Requests/hotelRequests";
import RestRequests from "../components/Requests/restRequests";

const Requests = () => {
  return (
    <div
      className="container-fluid gx-0 bg-img"
      style={{
        backgroundImage: `url(${decor})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <Navigation />
      <HotelRequests />
      <RestRequests />
    </div>
  );
};
export default Requests;
