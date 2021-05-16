import axios from "axios";

const SERVER_BASE_URL = "https://canabismap.com";
// const SERVER_BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

axios.defaults.baseURL = SERVER_BASE_URL;

export default async function fetcher(...args: any) {
  const [url] = args;
  const user: any = window.localStorage.getItem("user");
  const token = user?.token;

  try {
    const response = axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    return error.response;
  }
}
