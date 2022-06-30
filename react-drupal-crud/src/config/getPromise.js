import axios from 'axios';
import {baseurl} from './baseurl';


const url = `${baseurl.URL}`

export const getPromise = (path) => (
    axios({
      method: 'get',
      url: url + path,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
);