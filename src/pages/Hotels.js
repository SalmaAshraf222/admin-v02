import Navigation from "../components/Nav";
import Table from "../components/Table";
import AddHotelForm from "../components/forms/AddHotelForm";
import {hotelsData , hotelsheaders} from "../Data";
import decor from "../assets/Decore.png";
import { useEffect , useState } from "react";
import {hotelController} from '../api'
import Pag from "../components/pagination/pagination";

/*
  1-
    useEffect => apiCalls 
    useState => setObjectData 

  2- setData => insted of hardcodedData, use data reterived from the DB   


*/  

const Hotels = () => {
  const [ hotels , sethotels ] = useState([]);


  useEffect(() => {
  
    const fetchhotels = async () => {
      
      const data = (await hotelController.gethotels());

      sethotels(data.docuemnts);
      
    };

    fetchhotels();
  }, []);


  
  return (
    <div

      className="container-fluid gx-0 bg-img"
      style={{
        backgroundImage: `url(${decor})`,
        backgroundPosition: "right top",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}

    >
      
      <Navigation />

      <Table name="Hotel" headers={hotelsheaders} data={hotels} />
<Pag/>
      <AddHotelForm />
    </div>
  );
};
export default Hotels;
{

  /* <div className="container-fluid gx-0 ">
      <Navigation />

      <Table name="User" headers={data.usersHeaders} data={data.usersData} />

      <AddUserForm />
    </div> */

}
