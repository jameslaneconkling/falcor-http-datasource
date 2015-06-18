'use strict';
module.exports = function buildQueryObject(url, method, queryData) {
  var qData = [];
  var keys;
  var data = {url: url};

  if (typeof queryData === 'string') {
    qData.push(queryData);
  } else {

    keys = Object.keys(queryData);
    keys.forEach(function (k) {
      var value = typeof queryData[k] === 'object' ? JSON.stringify(queryData[k]) : queryData[k];
      qData.push(k + '=' + value);
    });
  }

  if (method === 'GET') {
    data.url += '?' + qData.join('&');
  } else {
    data.data = qData.join('&');
  }

  return data;
};
