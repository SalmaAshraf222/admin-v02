import Table from "../components/Table";
import Navigation from "../components/Nav";
import AddUserForm from "../components/forms/AddUserForm";
import * as data from "../Data";
import decor from "../assets/Decore.png"

const Users = () => {
  return (
    <div className="container-fluid gx-0 bg-img "
    style={{backgroundImage: `url(${decor})` ,
    backgroundPosition:"  right top",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat"}}
   >
     
      <Navigation />

      <Table name="User" headers={data.usersHeaders} data={data.usersData} />

      <AddUserForm />
    </div>
  );
};
export default Users;
