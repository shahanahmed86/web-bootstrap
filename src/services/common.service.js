import NetworkService from './network.service';

const COMMON = '/api/common';

class CommonService extends NetworkService {
  /**
   * upload
   * @param {File} data
   * @param {Function} signal - signal
   * @returns Promise
   */
  upload(data, signal) {
    const url = `${this.baseUrl}${COMMON}/image`;
    return this.networkHandler(url, { method: 'POST', data, signal }, false);
  }

  /**
   * getGenderOptions
   * @param {Function} signal - signal
   * @returns Promise
   */
  getGenderOptions(signal) {
    const url = `${this.baseUrl}${COMMON}/gender`;
    return this.networkHandler(url, { signal }, false);
  }
}

const commonService = new CommonService();

export default commonService;
