import axios from 'axios';

const url = 'https://api.github.com/';

const Api = {
  getOrgs: name => axios.get(`${url}orgs/${name}`),
};

export default Api;
