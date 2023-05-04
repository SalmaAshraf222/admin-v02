import Navigation from "../components/Nav";
import Table from "../components/Table";
import AddRestaurantForm from "../components/forms/AddRestaurantForm";
import * as data from "../Data";

const Restaurants = () => {
  return (
    <div className="container-fluid gx-0">
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