import Request from 'request';

export default class API {
  constructor(token) {
    this.token = token;
  }

  apps(team) {
    return new Promise((resolve, reject)=> {
      const headers = {Authorization: 'token ' + this.token};
      Request.getJSON(`/api/${team}/apps`, {headers}).then(
        (res)=> {
          resolve(res.response.applications);
          // TODO: error handling
        }
      );
    });
  }
};
