import Table from "../components/Table";
import AddAttractionForm from "../components/forms/AddAttractionForm";
import * as data from "../Data";
import Navigation from "../components/Nav";
import decor from "../assets/Decore.png"

const Attractions = () => {
  return (
    
    <div className="container-fluid gx-0 bg-img"
    style={{backgroundImage: `url(${decor})` ,
    backgroundPosition:"right top",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat"}}>
    <Navigation />

    <Table name="Attraction"
     headers={data.attarctionsHeader}
      data={data.attractionsData} />

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