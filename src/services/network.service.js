import axios from 'axios';
import token from '../utils/token.util';
import { BASE_URL } from '../utils/config.util';

class Network {
	baseUrl = BASE_URL;
	/**
	 * @param {{ method: string, data?: object | FormData }} options
	 */
	includeHeaders(options, includeToken = true) {
		const headers = {};
		if (includeToken) headers['Authorization'] = `Bearer ${token.getToken}`;

		options.headers = headers;
	}

	/**
	 * @param {string} url
	 * @param {{ method: string, data?: object }} options
	 */
	async networkHandler(url, options, includeToken = true) {
		try {
			this.includeHeaders(options, includeToken);

			const result = await axios(url, options);
			return {
				success: true,
				data: result.data
			};
		} catch (error) {
			return {
				success: false,
				message: error.response.data,
				debugMessage: error.code
			};
		}
	}

	resolveImageUrl (avatar) {
		if (!avatar) return avatar;
		return `${this.baseUrl}/api/common/image?filename=${avatar}`;
	}
}

export default Network;
