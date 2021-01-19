import axios from "axios";

export default {
  async getConfig() {
    let res = await axios.get("http://localhost:8080/v1/configurations", {
      headers: {
        Authorization: `Bearer qhtfs87hjnc12kkos`
      }
    });
    return res.data;
  },

  async sendOrders(data) {
    const headers = {
      Authorization: `Bearer qhtfs87hjnc12kkos`
    };
    let res = await axios.post("http://localhost:8080/v2/orders", data, {
      headers
    });
    return res.data;
  },

  async merchant() {
    const headers = {
      Authorization: `Bearer qhtfs87hjnc12kkos`
    };
    const data = {
      merchantReference: "merchantOrder-1234-updated"
    };
    let res = await axios.post(
      "http://localhost:8080/v2/orders/41K982RQO3",
      data,
      {
        headers
      }
    );
    return res.data;
  }
};
