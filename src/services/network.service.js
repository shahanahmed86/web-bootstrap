import axios from 'axios';
import token from '../utils/token.util';

class Network {
	baseUrl = 'https://dummyjson.com';
	/**
	 * @param {boolean} includeToken
	 */
	includeHeaders(includeToken = true) {
		const headers = new Headers();
		headers.append('content-type', 'application/json');

		if (includeToken) headers.append('Authorization', `Bearer ${token.getToken}`);

		return headers;
	}

	/**
	 * @param {{ method: string, headers: Headers, data?: object }} options
	 */
	includeBody(options) {
		switch (options.method.toLowerCase()) {
			case 'post':
			case 'put': {
				options.data = JSON.stringify(options.data);
				break;
			}
			default: {
				if ('data' in options) delete options.data;
				break;
			}
		}

		return options;
	}

	/**
	 * @param {string} url
	 * @param {{ method: string, data?: object }} options
	 */
	async networkHandler(url, options, includeToken = true) {
		try {
			options.headers = this.includeHeaders(includeToken);
			this.includeBody(options);

			const result = await axios(url, options);
			return {
				success: true,
				data: result.data
			};
		} catch (error) {
			return {
				success: false,
				data: error.message,
				debugMessage: error.code
			};
		}
	}
}

export default Network;
