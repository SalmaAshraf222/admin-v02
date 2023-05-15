import Table from "../components/Table";
import AddAttractionForm from "../components/forms/AddAttractionForm";
import { restaurantController } from "../api";
import Navigation from "../components/Nav";
import decor from "../assets/Decore.png"
import { useEffect , useState } from "react";
import { attarctionsHeader } from '../Data'
import Pag from "../components/pagination/pagination";


const Attractions = () => {

  const [ attractions , setAttractions ] = useState([]);


  useEffect(() => {
  
    const fetchAttractions = async () => {
      
      const data = (await restaurantController.getRestaurants());

      setAttractions(data.docuemnts);
      
    };

    fetchAttractions();
  }, []);
  
  return (
    
    <div className="container-fluid gx-0 bg-img"
    style={{backgroundImage: `url(${decor})` ,
    backgroundPosition:"right top",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat"}}>
    <Navigation />

    <Table name="Attraction"
     headers={attarctionsHeader}
      data={attractions} />
<Pag/>
  <AddAttractionForm />
  </div>
  );
};
export default Attractions;
// <div className="group">
    //   <Navigation />
    //   <Table
    //     name="Attraction"
    //     headers={data.attarctionsHeader}
    //     data={data.attractionsData}
    //   />
    //   <AddAttractionForm />
    // </div>