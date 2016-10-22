export default {
  sendJSON(method, url, data, opts) {
    return new Promise((resolve, reject) => {
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
      xhr.open(method, url, true);
      xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
      if (opts && opts.headers) Object.keys(opts.headers).forEach(header => xhr.setRequestHeader(header, opts.headers[header]));
      xhr.responseType = 'json';
      xhr.send(data ? JSON.stringify(data) : null);
    });
  },

  getJSON(url, opts) {
    return this.sendJSON('GET', url, null, opts);
  }
};
