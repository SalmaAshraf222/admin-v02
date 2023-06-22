import Table from "../components/Table";
import Navigation from "../components/Nav";
import AddUserForm from "../components/forms/AddUserForm";
import * as data from "../Data";
import decor from "../assets/Decore.jpg";
import Pag from "../components/pagination/pagination";

const Users = () => {
  return (
    <div
      className="container-fluid gx-0 bg-img "
      style={{
        backgroundImage: `url(${decor})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      
      <Navigation />

      <Table name="User" headers={data.usersHeaders} data={data.usersData} />
      <Pag />

      <AddUserForm />
    </div>
  );
};
export default Users;
