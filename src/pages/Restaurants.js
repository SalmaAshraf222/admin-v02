import Navigation from "../components/Nav";
import Table from "../components/Table";
import AddRestaurantForm from "../components/forms/AddRestaurantForm";
import { restaurantsheaders } from "../Data";
import decor from "../assets/Decore.jpg";
import { useState, useEffect } from "react";
import { restaurantController } from "../api";
import Pagination from "../components/pagination/pagination";

const Restaurants = () => {
  const [restaurants, setRestaurant] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const fetchRestaurant = async () => {
      const data = await restaurantController.getRestaurants();
      console.log("data");
      console.log(data);

      setRestaurant(data.docuemnts);
    };

    fetchRestaurant();
  }, []);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currenItems = restaurants.slice(firstIndex, lastIndex);

  return (
    <div
      className="container-fluid gx-0 bg-img"
      style={{
        backgroundImage: `url(${decor})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navigation />

      <Table
        name="Restaurants"
        headers={restaurantsheaders}
        data={currenItems}
      />

      <Pagination
        totalPosts={restaurants.length}
        postsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
      <AddRestaurantForm />
    </div>
  );
};
export default Restaurants;
