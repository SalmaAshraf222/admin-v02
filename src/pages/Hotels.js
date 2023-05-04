import Navigation from "../components/Nav";
import Table from "../components/Table";
import AddHotelForm from "../components/forms/AddHotelForm";
import * as data from "../Data";

const Hotels = () => {
  return (
    <div className="container-fluid gx-0 ">
      <Navigation />

      <Table name="Hotel" headers={data.hotelsheaders} data={data.hotelsData} />
      <AddHotelForm />
    </div>
  );
};
export default Hotels;
{/* <div className="container-fluid gx-0 ">
      <Navigation />

      <Table name="User" headers={data.usersHeaders} data={data.usersData} />

      <AddUserForm />
    </div> */}