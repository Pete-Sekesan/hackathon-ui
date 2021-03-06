import config from "../config";
import jwtDecode from "jwt-decode";

const TokenService = {
  // create auth token
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
  },
  // confirm auth token
  hasAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },
  clearAuthToken() {
    return window.localStorage.removeItem(config.TOKEN_KEY);
  },
  clearUserType() {
    return window.localStorage.removeItem("user_type");
  },
  parseJwt(jwt) {
    return jwtDecode(jwt);
  },
  readJwtToken() {
    return TokenService.parseJwt(TokenService.hasAuthToken());
  },
  saveUserType(type) {
    window.localStorage.setItem("user_type", type);
  },
  saveUserName(username) {
    window.localStorage.setItem("username", username);
  },
  hasUserType() {
    return window.localStorage.getItem("user_type");
  },
  saveUserId(userId) {
    window.localStorage.setItem("user_id", userId);
  },
  hasUserId() {
    return window.localStorage.getItem("user_id");
  },
  clearUserId() {
    return window.localStorage.removeItem("user_id");
  },
  hasUserName() {
    return window.localStorage.getItem("username");
  },
  clearUserName() {
    return window.localStorage.removeItem("username");
  },
  saveUserURL(user_url) {
    window.localStorage.setItem("user_url", user_url);
  },
  hasUserURL() {
    return window.localStorage.getItem("user_url");
  },
  clearUserURL() {
    return window.localStorage.removeItem("user_url");
  },
};

export default TokenService;