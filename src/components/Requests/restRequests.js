import { useEffect, useState } from "react";
import { BASE_URL, restaurantController } from "../../api";
import axios from "axios";
import swal from 'sweetalert';

const RestRequests=()=>{
    const [restaurantRequests, setrestaurantRequests] = useState();

    const fetchRestaurantRequest = async () => {
        const data = await restaurantController.getRestaurantsRequests();
        console.log(data.restaurants);
        
        setrestaurantRequests(data.restaurants);
      };

      useEffect(()=>{
            fetchRestaurantRequest();
        },[])

       

        const acceptRequest = async (id) => {
          try {
            console.log("inn");
      
            const res = await axios.patch(`${BASE_URL}/restaurants/${id}`
            ,{
              status:"Active"
            }
            );
            fetchRestaurantRequest();
           swal("Request accepted")

          } catch (error) {
            console.log(`something went wrong->${error}`);
          }
        };
      
        const denyRequest = async (id) => {
          try {
            console.log("inn");
      
            const res = await axios.patch(`${BASE_URL}/restaurants/${id}`
            ,{
              status:"Active"
            }
            );
            fetchRestaurantRequest();
            swal("Request denied")

          } catch (error) {
            console.log(`something went wrong->${error}`);
          }
        };

       
    return(
        <div className="row mt-5  d-flex flex-row justify-content-center ">
        <h1
          className="m-5 mb-3 ms-4  d-flex flex-row justify-content-center"
          style={{ color: "#8F9090" }}
        >
          <strong>Restaurant Requests</strong>
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
              <th style={{backgroundColor:"#F2A11E",color:"white"}}>Requests</th>
              <th style={{backgroundColor:"#F2A11E",color:"white"}}>Accept-Deny request</th>
            </tr>
          </thead>

          <tbody style={{ backgroundColor: "white" }}>
            {restaurantRequests?.map((restaurant) => (
              <tr key={restaurant._id}>
                <td className="h-100">
                  {restaurant.name}
                </td>
                <td className="h-100">
                <button
                    className="col-12 col-lg-4  btn btn-light"
                    onClick={() => acceptRequest(restaurant._id)}
                  >
                    Accept
                  </button>
                  {/* <Modal show={isShow}/> */}
                  <button
                    className="col-12 col-lg-4 btn btn-light ms-lg-5 mt-sm-2"
                    onClick={() => denyRequest(restaurant._id)}
                  >
                    Deny
                  </button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}
export default RestRequests;