import fetch from "isomorphic-fetch";

const API = {
  data: {
    async get(obj) {
      let response = await fetch(
        `/api/getoximetria/${encodeURIComponent(JSON.stringify(obj))}`
      );

      const status = response.status;
      let data = await response.json();

      return {
        data,
        status
      };
    },
    async update(item) {
      const response = await fetch(`/api/oximetria/`, {
        method: "PUT",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json"
        }),
        body: JSON.stringify(item)
      });
      const status = response.status;
      const data = await response.json();
      return { data: data, status: status };
    }
  }
};
export default API;
