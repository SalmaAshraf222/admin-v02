import Table from "../components/Table";
import Navigation from "../components/Nav";
import AddUserForm from "../components/forms/AddUserForm";
import * as data from "../Data";

const Users = () => {
  return (
    <div className="container-fluid gx-0 ">
      <Navigation />

      <Table name="User" headers={data.usersHeaders} data={data.usersData} />

      <AddUserForm />
    </div>
  );
};
export default Users;
