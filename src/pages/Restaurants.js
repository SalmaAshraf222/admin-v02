import Navigation from "../components/Nav";
import Table from "../components/Table";
import AddRestaurantForm from "../components/forms/AddRestaurantForm";
import {restaurantsheaders} from "../Data";
import decor from "../assets/Decore.png"
import { useState , useEffect } from "react";
import  {restaurantController} from "../api";


const Restaurants = () => {
  const [ restaurants , setRestaurant ] = useState([]);


  useEffect(() => {
  
    const fetchRestaurant = async () => {
      
      const data = (await restaurantController.getRestaurants());

      setRestaurant(data.docuemnts);
      
    };

    fetchRestaurant();
  }, []);
  return (
    <div className="container-fluid gx-0 bg-img"
    style={{backgroundImage: `url(${decor})` ,
    backgroundPosition:"right top",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat"}}>
      <Navigation />

      <Table

        name="restaurants"
        headers={restaurantsheaders}
        data={restaurants}

      />
      <AddRestaurantForm />
    </div>
  );
};
export default Restaurants;

