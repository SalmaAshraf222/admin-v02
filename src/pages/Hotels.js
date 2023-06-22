import Navigation from "../components/Nav";
import Table from "../components/Table";
import AddHotelForm from "../components/forms/AddHotelForm";
import { hotelsheaders } from "../Data";
import decor from "../assets/Decore.jpg";
import { useEffect, useState } from "react";
import { hotelController } from "../api";
import Pagination from "../components/pagination/pagination";

const Hotels = () => {
  const [hotels, sethotels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const fetchhotels = async () => {
      const data = await hotelController.gethotels();

      sethotels(data.docuemnts);
    };

    fetchhotels();
  }, []);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currenItems = hotels.slice(firstIndex, lastIndex);

  return (
    <div
      className="container-fluid gx-0 bg-img"
      style={{
        backgroundImage: `url(${decor})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navigation />

      <Table name="Hotels" headers={hotelsheaders} data={currenItems} />

      <Pagination
        totalPosts={hotels.length}
        postsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
      <AddHotelForm />
    </div>
  );
};
export default Hotels;
