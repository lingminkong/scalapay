import axios from "axios";

export default {
  async getConfig() {
    let res = await axios.get("http://localhost:8081/v1/configurations", {
      headers: {
        Authorization: `Bearer qhtfs87hjnc12kkos`
      }
    });
    return res.data;
  },

  async sendOrders(data) {
    let res = await axios.post("http://localhost:8081/v2/orders", {
      headers: {
        Authorization: `Bearer qhtfs87hjnc12kkos`
      },
      ...data
    });
    return res.data;
  }
};
