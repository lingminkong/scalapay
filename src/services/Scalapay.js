import axios from "axios";
const BEARER_TOKEN = "Bearer qhtfs87hjnc12kkos";
const API_CONFIGURATION_URI = "http://localhost:8080/v1/configurations";
const API_ORDER_URI = "http://localhost:8080/v2/orders";

export default {
  async getConfig() {
    const headers = {
      Authorization: BEARER_TOKEN,
      "Content-Type": "application/json"
    };
    let res = await axios.get(API_CONFIGURATION_URI, {
      headers
    });
    return res.data;
  },

  async sendOrders(data) {
    const headers = {
      Authorization: BEARER_TOKEN,
      "Content-Type": "application/json"
    };
    let res = await axios.post(API_ORDER_URI, data, {
      headers
    });
    return res.data;
  }
};
