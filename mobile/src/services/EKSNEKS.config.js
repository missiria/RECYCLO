import { getData } from "../hooks/hooks";
import { toCapitalizeCase } from "./EKSNEKS.string";

class Config {
    constructor() {
      this.user = null;
    }

    async init() {
      this.user = await getData("user");
    }

    async getToken() {
      await this.init();
      // TODO : use yup to validate bearer token
      if (this.user.auth.type === "bearer") {
        const token = `${toCapitalizeCase(this.user.auth.type)} ${this.user.auth.token}`;
        return token;
      } else {
        return false;
      }
    }

    async getUserEmail() {
      await this.init();
      // TODO : use yup to validate the email
      if (this.user.email) {
        return this.user.email;
      } else {
        return false;
      }
    }
  }

  export default new Config;