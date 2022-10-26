import NetworkService from './network.service';

const COMMON = '/api/common';

class CommonService extends NetworkService {
	/**
	 * @param {File} data
	 */
	upload(data) {
		const url = `${this.baseUrl}${COMMON}/image`;
		return this.networkHandler(url, { method: 'POST', data }, false);
	}

	getGenderOptions() {
		const url = `${this.baseUrl}${COMMON}/gender`;
		return this.networkHandler(url, {}, false);
	}
}

const commonService = new CommonService();

export default commonService;
