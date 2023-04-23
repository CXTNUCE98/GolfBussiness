import axios from 'axios';
import { API_URL } from './API_URL';

export function useAxios() {
  const fetchData = async (url: string) => {
    try {
      const response = await axios.get(`${API_URL}${url}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchData
  };
}