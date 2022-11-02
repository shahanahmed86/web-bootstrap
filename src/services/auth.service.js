import token from '../utils/token.util';
import NetworkService from './network.service';

import '../type-defs';

const USER = '/api/user/auth';

class AuthService extends NetworkService {
  loginController = new AbortController();
  /**
   * login
   * @param {UserObject} data User object {@link UserObject}
   */
  async login(data) {
    this.loginController = this.getController(this.loginController);
    const { signal } = this.loginController;

    const url = `${this.baseUrl}${USER}`;
    const result = await this.networkHandler(url, { method: 'POST', data, signal }, false);
    if (result.success) token.setToken = result.data.token;

    // resolve the image by prefixing base url with the path
    if (typeof result.data === 'object') {
      result.data.payload.avatar = this.resolveImageUrl(result.data.payload.avatar);
    }

    return result;
  }

  signupController = new AbortController();
  /**
   * signup
   * @param {UserObject} data User object {@link UserObject}
   */
  async signup(data) {
    this.signupController = this.getController(this.signupController);
    const { signal } = this.signupController;

    const url = `${this.baseUrl}${USER}/signup`;
    const result = await this.networkHandler(url, { method: 'POST', data, signal }, false);
    if (result.success) token.setToken = result.data.token;

    // resolve the image by prefixing base url with the path
    if (typeof result.data === 'object') {
      result.data.payload.avatar = this.resolveImageUrl(result.data.payload.avatar);
    }

    return result;
  }

  loggedInController = new AbortController();
  async loggedIn() {
    this.loggedInController = this.getController(this.loggedInController);
    const { signal } = this.loggedInController;

    const url = `${this.baseUrl}${USER}`;
    const result = await this.networkHandler(url, { method: 'GET', signal });

    // resolve the image by prefixing base url with the path
    if (result.data) {
      result.data.avatar = this.resolveImageUrl(result.data.avatar);
    }

    return result;
  }
}

const authService = new AuthService();

export default authService;
