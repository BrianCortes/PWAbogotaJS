import axios from 'axios';

const url = 'https://api.github.com/';

const Api = {
  getOrgs: name => axios.get(`${url}orgs/${name}`),
  getFacebookMembers: name =>
    axios.get(`${url}orgs/${name}?page=1&per_page=100`),
};

export default Api;
