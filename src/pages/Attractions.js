import Table from "../components/Table";
import AddAttractionForm from "../components/forms/AddAttractionForm";
import * as data from "../Data";
import Navigation from "../components/Nav";

const Attractions = () => {
  return (
    
    <div className="container-fluid gx-0 ">
    <Navigation />

    <Table name="Attraction"
     headers={data.attarctionsHeader}
      data={data.attractionsData} />

//   <AddAttractionForm />
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