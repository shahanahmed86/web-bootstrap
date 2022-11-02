import axios from 'axios';
import { BASE_URL } from '../utils/config.util';
import token from '../utils/token.util';

import '../type-defs';

class Network {
  baseUrl = BASE_URL;

  /**
   * @param {NetworkOptions} options - {@link NetworkOptions} network options
   * @param {boolean=} includeToken - includeToken
   * @returns {void} - void
   */
  includeHeaders(options, includeToken = true) {
    const headers = {};
    if (includeToken) headers['Authorization'] = `Bearer ${token.getToken}`;

    options.headers = headers;
  }

  /**
   * @param {string} url
   * @param {NetworkOptions} options - {@link NetworkOptions} network options
   * @param {boolean=} includeToken - includeToken
   * @returns {Promise<Result>} result - {@link Result} network results
   */
  async networkHandler(url, options, includeToken = true) {
    try {
      this.includeHeaders(options, includeToken);

      const result = await axios(url, options);
      return {
        success: true,
        data: result.data,
      };
    } catch (error) {
      const result = {
        success: false,
        message: error.response ? error.response.data : error.message,
        debugMessage: error.code,
        canShowToaster: true,
      };

      if (error.code.includes('ERR_CANCELED')) result.canShowToaster = false;

      return result;
    }
  }

  /**
   * resolveImageUrl
   * @param {string} avatar
   * @returns string
   */
  resolveImageUrl(avatar) {
    if (!avatar) return avatar;
    return `${this.baseUrl}/api/common/image?filename=${avatar}`;
  }

  /**
   * getController
   * @param {AbortController} _controller
   * @returns {AbortController} controller
   */
  getController(_controller) {
    if (!_controller.signal.aborted) _controller.abort();
    const controller = new AbortController();

    return controller;
  }
}

export default Network;
