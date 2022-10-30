import token from '../utils/token.util';
import NetworkService from './network.service';

import '../type-defs';

const USER = '/api/user/auth';

class AuthService extends NetworkService {
  /**
   * login
   * @param {UserObject} data User object {@link UserObject}
   * @param {Function} signal - signal
   */
  async login(data, signal) {
    const url = `${this.baseUrl}${USER}`;
    const result = await this.networkHandler(url, { method: 'POST', data, signal }, false);
    if (result.success) token.setToken = result.data.token;

    // resolve the image by prefixing base url with the path
    if (typeof result.data === 'object') {
      result.data.payload.avatar = this.resolveImageUrl(result.data.payload.avatar);
    }

    return result;
  }

  /**
   * signup
   * @param {UserObject} data User object {@link UserObject}
   * @param {Function} signal - signal
   */
  async signup(data, signal) {
    const url = `${this.baseUrl}${USER}/signup`;
    const result = await this.networkHandler(url, { method: 'POST', data, signal }, false);
    if (result.success) token.setToken = result.data.token;

    // resolve the image by prefixing base url with the path
    if (typeof result.data === 'object') {
      result.data.payload.avatar = this.resolveImageUrl(result.data.payload.avatar);
    }

    return result;
  }
  /**
   * loggedIn
   * @param {Function} signal - signal
   */
  async loggedIn(signal) {
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
