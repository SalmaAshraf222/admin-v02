import Table from "../components/Table";
import AddAttractionForm from "../components/forms/AddAttractionForm";
import attarctionsHeader from "../Data";
import attractionsData from "../Data";

const Attractions = () => {
  return (
    <div className="group">
      <Table
        name="Attraction"
        headers={attarctionsHeader}
        data={attractionsData}
      />
      <AddAttractionForm />
    </div>
  );
};
export default Attractions;
