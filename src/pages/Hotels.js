import Table from "../components/Table";
import AddHotelForm from "../components/forms/AddHotelForm";
import hotelsheaders from "../Data";
import hotelsData from "../Data";

const Hotels = () => {
  return (
    <div className="group">
      <Table name="Hotel" headers={hotelsheaders} data={hotelsData} />
      <AddHotelForm />
    </div>
  );
};
export default Hotels;
