import axios from "axios";
import { RegisterPayload } from "../utils/type";

const SERVER_BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
axios.defaults.baseURL = SERVER_BASE_URL;
console.log(
  "🚀 ~ file: adminApi.tsx ~ line 6 ~ SERVER_BASE_URL",
  SERVER_BASE_URL
);

const AdminAPI = {
  register: async (payload: RegisterPayload) => {
    try {
      const response = await axios.post(
        "/api/admin/register",
        JSON.stringify(payload),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response;
    } catch (error) {
      return error.response;
    }
  },

  login: async (email: string, password: string) => {
    try {
      const response = await axios.post(
        "/api/admin/login",
        JSON.stringify({ email, password }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(
        "🚀 ~ file: adminApi.tsx ~ line 37 ~ login: ~ response",
        response
      );

      return response;
    } catch (error) {
      return error.response;
    }
  },
};

export default AdminAPI;
