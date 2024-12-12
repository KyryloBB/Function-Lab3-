'use strict';

const random = (min, max) => {
  Math.ceil(min);
  Math.floor(max);
  const result = Math.floor(Math.random() * (max-min+1) + min);
  return result;
};

module.exports = { random };
