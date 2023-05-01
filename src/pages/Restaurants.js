import Table from "../components/Table";
import AddRestaurantForm from "../components/forms/AddRestaurantForm";
import restaurantsheaders from "../Data";
import restaurantsData from "../Data";

const Restaurants = () => {
  return (
    <div className="group">
      <Table
        name="Restaurant"
        headers={restaurantsheaders}
        data={restaurantsData}
      />
      <AddRestaurantForm />
    </div>
  );
};
export default Restaurants;
