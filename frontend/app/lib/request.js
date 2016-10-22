function newXHR(resolve, reject) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = _ => {
    if(xhr.readyState == 4) {
      if (xhr.status == 200) {
        resolve(xhr);
      } else {
        reject(xhr);
      }
    }
  };
  return xhr;
}

export default {
  sendJSON(method, url, data) {
    return new Promise((resolve, reject) => {
      const xhr = newXHR(resolve, reject);
      xhr.open(method, url, true);
      xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
      xhr.responseType = 'json';
      xhr.send(JSON.stringify(data));
    });
  },

  getJSON(url, opts) {
    return new Promise((resolve, reject) => {
      const xhr = newXHR(resolve, reject);
      xhr.open('get', url, true);
      if (opts.headers) Object.keys(opts.headers).forEach(header => xhr.setRequestHeader(header, opts.headers[header]));
      xhr.responseType = 'json';
      xhr.send();
    });
  }
};
