import { API_URL } from "./utils/links";
import Axios from "axios";

class Auth {
  constructor() {
    this.token = null;
    this.user = null;
  }

  async getQuarter() {
    Axios.get(`https://ar-backend-ua6tbwojpa-uc.a.run.app/api/admin/quarter`)
      .then((res) => {
        console.log("Result" + res);
        localStorage.setItem("current-quarter", res.data[0].quarter_name);
        console.log("CURRENT QUARTER" + res.data[0].quarter_name);
      })
      .catch((err) => {
        console.log(err);
      });
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
          this.getQuarter();
          this.token = res.data.token;
          this.user = res.data.user;

          window.location.href = "/";
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
    window.location.href = "/login";
  }

  loggedIn() {
    return !!localStorage.getItem("token");
  }

  getUser() {
    return this.user;
  }

  getFirstName() {
    return this.user.firstname;
  }
}

export default new Auth();
