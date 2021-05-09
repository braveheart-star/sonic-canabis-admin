import axios from "axios";
import { ProductPayload } from "../utils/type";

const SERVER_BASE_URL = "https://canabismap.com";

axios.defaults.baseURL = SERVER_BASE_URL;

const productApi = {
  upload: async (payload: ProductPayload, token: string) => {
    try {
      const response = await axios.post("/api/product/upload", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      return error.response;
    }
  },

  uploadImage: async (payload: any, token: string, productId: number) => {
    var data = new FormData();
    data.append("file", payload);
    try {
      const response = await axios.post(
        `/api/product/image/upload/${productId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;
    } catch (error) {
      return error.response;
    }
  },

  getProductsByUser: async (...args: any) => {
    const [url, token] = args;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response;
    } catch (error) {
      return error.response;
    }
  },
};

export default productApi;
