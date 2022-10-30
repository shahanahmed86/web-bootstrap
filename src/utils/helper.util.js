import * as _ from 'radash';

/**
 * capitalize
 * @param {string} label
 * @returns string
 */
export const capitalize = (label) => _.capitalize(label).split('_').join(' ');

/**
 * excludeNulls
 * @param {object} obj
 * @returns object
 */
export const excludeNulls = (obj) => _.shake(obj, (v) => !v);

/**
 * omit
 * @param {object} obj
 * @param {string[]} keys
 * @returns object
 */
export const omit = (obj, keys) => _.omit(obj, keys);

/**
 * reformPayload
 * @param {object} obj
 * @param {string | string[]} keys
 * @returns object
 */
export const excludeNullsAndOmit = (obj, keys) => {
  const temp = excludeNulls(obj);
  return omit(temp, Array.isArray(keys) ? keys : [keys]);
};

/**
 * getController
 * @param {AbortController} _controller
 * @returns {AbortController} controller
 */
export const getController = (_controller) => {
  if (_controller) _controller.abort();
  const controller = new AbortController('shahan');

  return controller;
};
