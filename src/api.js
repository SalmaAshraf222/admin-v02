import axios from "axios";

export const BASE_URL = "http://localhost:3004/api";
const HOTELS_URL = "/hotels";


const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTQ2NjJhODJiNGE0MWUyNGUwMWEzNiIsImlhdCI6MTY4NzQ0NzA4MiwiZXhwIjoxNjk1MjIzMDgyfQ.pvNNxP55cD0mJuQkIE-jwK7DsaBIyA1kyl7paXqWwxI`
  }
};


const deleteId=(obj)=>{
  console.log(obj);
  
  obj.docuemnts.map(element => {
    delete element._id
    delete element.phone
    if(!element.phone ){
        element.phone = "xxxxx" ; 
    }    
   
  });
  console.log(obj.docuemnts);
}

export const hotelController = {
  gethotels: async  () => {
    try {
      const response = await axios.get(`${BASE_URL}${HOTELS_URL}?fields=-location,-image,-priceLevel,-__v,-id,-_id,-status` , config);

      deleteId(response.data.data) ;
      return response.data.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  gethotel: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/hotels/${id}`);
      return response.data.data;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  },

  createHotel: async (hotelData) => {
    try {
      const response = await axios.post(`${BASE_URL}/hotels`, hotelData);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  deleteHotel: async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/hotels/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  updateHotel: async (hotelData) => {
    try {
      const response = await axios.patch(`${BASE_URL}/hotels/`, hotelData);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  getHotelRequests : async () => {
         try {
           const response = await axios.get(`${BASE_URL}/hotels/InActiveHotels`)
           return response.data.data
         } catch (error) {console.log(error)}
       }

};


export const attractionController = {
  getAttractions: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/attractions?fields=-location,-image,-__v,-id,-_id,-type`,
      );
      deleteId(response.data.data) ;

      return response.data.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  getAttraction: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/attractions/${id}`);
      return response.data.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  createAttraction: async (attractionData) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/attractions`,
        attractionData
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  deleteAttraction: async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/attractions/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  updateAttraction: async (postData) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/attractions/${postData.id}`,
        postData
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};


export const restaurantController = {
  getRestaurants: async () => {
    try {
      const response = await axios.get(`http://localhost:3004/api/restaurants?fields=-location,-image,-priceLevel,-__v,-id,-_id`, config);
      
      deleteId(response.data.data) ;

      
      return response.data.data;
    } catch (error) {
      // console.log(error);
      throw error;
    }
  },

  // getAttractions: async () => {
  //   try {
  //     const response = await axios.get(`${BASE_URL}/attractions?fields=-location,-image,-__v,-id,-_id,-type`,
  //     );
  //     return response.data.data;
  //   } catch (error) {
  //     console.error(error);
  //     throw error;
  //   }
  // },

  // gethotels: async  () => {
  //   try {
  //     const response = await axios.get(`${BASE_URL}${HOTELS_URL}?fields=-location,-image,-priceLevel,-__v,-id,-_id,-status` , config);
  //     deleteId(response.data.data) ;
  //     return response.data.data;
  //   } catch (error) {
  //     console.log(error);
  //     throw error;
  //   }
  // },

  getRestaurant: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/restaurants/${id}`);
      return response.data.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  createRestaurant: async (restaurantData) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/restaurants`,
        restaurantData
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  deleteRestaurant: async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/restaurants/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  updateRestaurant: async (postData) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/restaurants/${postData.id}`,
        postData
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  getRestaurantsRequests : async () => {
    try {
      const response = await axios.get(`${BASE_URL}/restaurants/inactiveRest`)
      return response.data.data
    } catch (error) {console.log(error)}
  }

};


