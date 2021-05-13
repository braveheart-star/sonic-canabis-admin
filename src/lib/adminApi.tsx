import axios from "axios";
import { RegisterPayload } from "../utils/type";

// const SERVER_BASE_URL = "https://canabismap.com";
const SERVER_BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
axios.defaults.baseURL = SERVER_BASE_URL;
console.log(
  "🚀 ~ file: adminApi.tsx ~ line 6 ~ SERVER_BASE_URL",
  SERVER_BASE_URL
);

const adminApi = {
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

      return response;
    } catch (error) {
      return error.response;
    }
  },

  getCurrentAdmin: async (...args: any) => {
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

  updateStoreProfile: async (id: string, payload: any, token: string) => {
    try {
      const response = await axios.put(`/api/admin/update/${id}`, payload, {
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
        `/api/admin/image/upload/${productId}`,
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

export default adminApi;
