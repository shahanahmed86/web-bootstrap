import NetworkService from './network.service';

const COMMON = '/api/common';

class CommonService extends NetworkService {
  uploadController = new AbortController();
  /**
   * upload
   * @param {File} data
   * @returns Promise
   */
  upload(data) {
    this.uploadController = this.getController(this.uploadController);
    const { signal } = this.uploadController;

    const url = `${this.baseUrl}${COMMON}/image`;
    return this.networkHandler(url, { method: 'POST', data, signal }, false);
  }

  getGenderOptionsController = new AbortController();
  getGenderOptions() {
    this.getGenderOptionsController = this.getController(this.getGenderOptionsController);
    const { signal } = this.getGenderOptionsController;

    const url = `${this.baseUrl}${COMMON}/gender`;
    return this.networkHandler(url, { signal }, false);
  }
}

const commonService = new CommonService();

export default commonService;
