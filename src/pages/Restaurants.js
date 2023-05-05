import Navigation from "../components/Nav";
import Table from "../components/Table";
import AddRestaurantForm from "../components/forms/AddRestaurantForm";
import * as data from "../Data";
import decor from "../assets/Decore.png"

const Restaurants = () => {
  return (
    <div className="container-fluid gx-0 bg-img"
    style={{backgroundImage: `url(${decor})` ,
    backgroundPosition:"right top",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat"}}>
      <Navigation />

      <Table
        name="Restaurant"
        headers={data.restaurantsheaders}
        data={data.restaurantsData}
      />
      <AddRestaurantForm />
    </div>
  );
};
export default Restaurants;

{/* <div className="container-fluid gx-0 ">
      <Navigation />

      <Table name="User" headers={data.usersHeaders} data={data.usersData} />

      <AddUserForm />
    </div> */}