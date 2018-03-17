import axios from 'axios';

const url = 'https://api.github.com/';

const Api = {
  getOrgs: name => axios.get(`${url}orgs/${name}`),
  getByUrl: fullUrl => axios.get(fullUrl).then(res => res),
};

export default Api;
