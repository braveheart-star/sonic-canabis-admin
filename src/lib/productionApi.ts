import axios from "axios";

const SERVER_BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
axios.defaults.baseURL = SERVER_BASE_URL;

const ProductionAPI = {};

export default ProductionAPI;
