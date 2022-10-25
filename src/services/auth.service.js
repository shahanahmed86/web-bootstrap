import token from '../utils/token.util';
import NetworkService from './network.service';

const LOGIN_URL = '/auth/login';
const LOGGED_IN_URL = '/auth/RESOURCE';

class AuthService extends NetworkService {
	/**
	 * @param {{username: string, password: string}} data
	 */
	async login(data) {
		const url = `${this.baseUrl}${LOGIN_URL}`;
		const result = await this.networkHandler(url, { method: 'POST', data }, false);
		if (result.success) token.setToken = result.data.token;

		return result;
	}
	loggedIn() {
		const url = `${this.baseUrl}${LOGGED_IN_URL}`;
		return this.networkHandler(url, { method: 'GET' });
	}
}

const authService = new AuthService();

export default authService;
