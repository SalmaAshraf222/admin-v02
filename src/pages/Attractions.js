import Table from "../components/Table";
import AddAttractionForm from "../components/forms/AddAttractionForm";
import { attractionController } from "../api";
import Navigation from "../components/Nav";
import decor from "../assets/Decore.jpg"
import { useEffect , useState } from "react";
import { attarctionsHeader } from '../Data'
import Pagination from "../components/pagination/pagination"

const Attractions = () => {

  const [ attractions , setAttractions ] = useState([]);
  const[currentPage,setCurrentPage]=useState(1)
  const [itemsPerPage,setItemsPerPage]=useState(4)

  useEffect(() => {
  
    const fetchAttractions = async () => {
      
      const data = (await attractionController.getAttractions());

      setAttractions(data.docuemnts);
      
    };

    fetchAttractions();
  }, []);

  const lastIndex=currentPage*itemsPerPage;
const firstIndex=lastIndex-itemsPerPage;
const currenItems=attractions.slice(firstIndex,lastIndex)
  
  return (
    
    <div className="container-fluid gx-0 bg-img"
    style={{backgroundImage: `url(${decor})` ,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"}}>
    <Navigation />

    <Table name="Attractions"
     headers={attarctionsHeader}
      data={currenItems} />
      
  <Pagination totalPosts={attractions.length} postsPerPage={itemsPerPage} setCurrentPage={setCurrentPage}/>
  <AddAttractionForm />
  </div>
  );
};
export default Attractions;
