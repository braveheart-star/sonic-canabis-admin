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
};

export default productApi;
