import axios from 'axios';
import {baseURL} from "../../base-url";

const instance = axios.create({
    baseURL
});
let saveToken = (token: string) => {
    localStorage.setItem('tokenData', JSON.stringify(token))
};
export const  SignInAPI = {
    signIn (email: string, password: string, rememberMe: boolean) {
      return  instance.post('auth/login', {email, password, rememberMe}).then(
          res => {
              saveToken(JSON.stringify(res.data.token));
              return res
          }
      );
  }
};
