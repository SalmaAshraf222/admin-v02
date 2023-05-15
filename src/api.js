import axios from "axios";

export const BASE_URL = "http://localhost:3004/api";
const HOTELS_URL = "/hotels";

export const hotelController = {
  gethotels: async  () => {
    try {
      const response = await axios.get(`${BASE_URL}${HOTELS_URL}?fields=-location`);

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
};


export const attractionController = {
  getAttractions: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/attractions?fields=-location`);
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
      const response = await axios.get(`${BASE_URL}/restaurants?fields=-location`);
      return response.data.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
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
};
