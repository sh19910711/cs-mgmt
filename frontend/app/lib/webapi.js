import Request from 'request';

export default class API {
  constructor(token) {
    this.token = token;
  }

  send(method, url, data) {
    return new Promise((resolve, reject) => {
      const headers = {Authorization: 'token ' + this.token};
      Request.sendJSON(method, url, data, {headers}).then(
        (res)=> {
          resolve(res.response.applications);
          // TODO: error handling
        },
        reject
      );
    });
  }

  signout() {
    return this.send('DELETE', `/api/auth/sign_out`);
  }

  apps(team) {
    return this.send('GET', `/api/${team}/apps`)
  }
};
