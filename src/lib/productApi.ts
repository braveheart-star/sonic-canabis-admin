import axios from "axios";
import { ProductPayload } from "../utils/type";

const SERVER_BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
axios.defaults.baseURL = SERVER_BASE_URL;

const productApi = {
  upload: async (payload: ProductPayload, token: string) => {
    try {
      const response = await axios.post("/api/product/upload", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(
        "🚀 ~ file: productApi.ts ~ line 20 ~ upload: ~ response",
        response
      );

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
};

export default productApi;
