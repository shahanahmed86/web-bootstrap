import token from '../utils/token.util';
import NetworkService from './network.service';

const USER = '/api/user/auth';

class AuthService extends NetworkService {
  /**
   * @param {{username: string, password: string}} data
   */
  async login(data) {
    const url = `${this.baseUrl}${USER}`;
    const result = await this.networkHandler(url, { method: 'POST', data }, false);
    if (result.success) token.setToken = result.data.token;

    // resolve the image by prefixing base url with the path
    if (result.data) {
      result.data.payload.avatar = this.resolveImageUrl(result.data.payload.avatar);
    }

    return result;
  }
  /**
   * @param {{username: string, password: string}} data
   */
  async signup(data) {
    const url = `${this.baseUrl}${USER}/signup`;
    const result = await this.networkHandler(url, { method: 'POST', data }, false);
    if (result.success) token.setToken = result.data.token;

    // resolve the image by prefixing base url with the path
    if (result.data) {
      result.data.payload.avatar = this.resolveImageUrl(result.data.payload.avatar);
    }

    return result;
  }
  async loggedIn() {
    const url = `${this.baseUrl}${USER}`;
    const result = await this.networkHandler(url, { method: 'GET' });

    // resolve the image by prefixing base url with the path
    if (result.data) {
      result.data.avatar = this.resolveImageUrl(result.data.avatar);
    }

    return result;
  }
}

const authService = new AuthService();

export default authService;
