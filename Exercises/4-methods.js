'use strict';

const methods = iface => {
  const result = new Array()
  for (const key in iface){
    const fn = iface[key]
    if(typeof fn === 'function') result.push([key,fn.length])
  }
return result
};

module.exports = { methods };
