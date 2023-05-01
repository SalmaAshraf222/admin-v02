import Table from "../components/Table";
import AddUserForm from "../components/forms/AddUserForm";
import {
  usersData,
  restaurantsData,
  hotelsData,
  attractionsData,
  usersHeaders,
  restaurantsheaders,
  hotelsheaders,
  attarctionsHeader,
} from "../Data";

const Users = () => {
  return (
    <div className="group">
      <Table name="User" headers={usersHeaders} data={usersData} />

      <AddUserForm />
    </div>
  );
};
export default Users;
