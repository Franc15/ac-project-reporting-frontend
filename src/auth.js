import { API_URL } from "./utils/links";
import Axios from "axios";

class Auth {
  constructor() {
    this.token = null;
    this.user = null;
  }

  async login(username, password) {
    Axios.post(`${API_URL}/login`, {
      username,
      password,
    })
      .then((res) => {
        if (res.data.error) {
          console.log(res.data.error);
        } else {
          console.log(res.data);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          window.location.href = "/sites";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  logout() {
    this.token = null;
    this.user = null;
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  loggedIn() {
    return !!localStorage.getItem("token");
  }

  getUser() {
    return this.user;
  }
}

export default new Auth();
