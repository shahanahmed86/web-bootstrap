const LABEL = '@token';

class Token {
  get getToken() {
    return localStorage.getItem(LABEL);
  }
  /**
   * @param {string} value
   */
  set setToken(value) {
    localStorage.setItem(LABEL, value);
  }

  removeToken() {
    localStorage.removeItem(LABEL);
  }
}

export default new Token();
