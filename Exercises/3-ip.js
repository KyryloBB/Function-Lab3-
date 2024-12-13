'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const parse = (res, item) => (res<<8) + parseInt(item)
  return ip.split('.').reduce(parse,0)
};

module.exports = { ipToInt };
