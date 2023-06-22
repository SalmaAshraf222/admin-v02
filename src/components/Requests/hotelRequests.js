 import { useEffect, useState } from "react";
import { BASE_URL, hotelController } from "../../api";
import axios from "axios";
import swal from 'sweetalert';


const HotelRequests = () => {

  const [hotelRequests, sethotelRequests] = useState();
  

  const fetchHotelRequest = async () => {
    const data = await hotelController.getHotelRequests();
    console.log(data.hotels);
   sethotelRequests(data.hotels);
  };

  useEffect(() => {
    fetchHotelRequest();
  }, []);

 
  const acceptRequest = async (id) => {
    try {
      console.log("inn");
      const res = await axios.patch(`${BASE_URL}/hotels/${id}`
      ,{
        status:"Active"
      }
      );

      sethotelRequests(hotelRequests?.filter(a=>a.id!==id))
        fetchHotelRequest();
        // console.log(hotelRequests);
      swal("Request accepted")
    } catch (error) {
      console.log(`something went wrong->${error}`);
    }
  };


  const denyRequest = async (id) => {
    try {
      console.log("inn");

      const res = await axios.patch(`${BASE_URL}/hotels/${id}`
      ,{
        status:"Active"
      }
       );
   
       fetchHotelRequest();
      swal("Request denied")

    } catch (error) {
      console.log(`something went wrong->${error}`);
    }
  };


    return (
    <div className="row mt-5  d-flex flex-row justify-content-center ">
      <h1
        className="m-5 mb-3 ms-4  d-flex flex-row justify-content-center"
        style={{ color: "#8F9090" }}
      >
        <strong>Hotel Requests</strong>
      </h1>

      <table
        className="table border border-grey shadow w-50 "
        style={{
          tableLayout: "fixed",
          height: "20px",
          overflow: "auto",
          wordBreak: "break-all",
        }}
      >
        <thead>
          <tr
            className="table "
            // style={{backgroundColor:"#F2A11E",color:"white"}}
            >
          
            <th 
            style={{backgroundColor:"#F2A11E",color:"white"}}
            >Requests</th>
            <th 
             style={{backgroundColor:"#F2A11E",color:"white"}}
             >Accept-Deny request</th>
          </tr>
        </thead>

        <tbody style={{ backgroundColor: "white" }}>
          {hotelRequests?.map((hotel) => (
            <tr key={hotel._id}>
              <td className=" h-100">
                {hotel.name}
              </td>
              <td className=" h-100">
                <button
                  className="col-12 col-lg-4  btn btn-light"
                  
                  onClick={() => acceptRequest(hotel._id)}
                >
                  Accept
                </button>
                <button
                style={{maxWidth:"100%"}}
                  className="col-12 col-lg-4 btn btn-light ms-lg-5 mt-sm-2"
                  onClick={() => denyRequest(hotel._id)}
                >
                  Deny
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default HotelRequests;
