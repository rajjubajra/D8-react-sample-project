import axios from 'axios';
import {baseurl} from './baseurl';
import oauth from 'axios-oauth-client';


const url = `${baseurl.URL}`


export const oauth2token = oauth.client(axios.create(), {
  url: `${url}/oauth/token`,
  grant_type: 'password',
  client_id: 'cd7acf28-dd1d-40f2-b98c-fda0b5f936f0',
  client_secret: 'abc123',
  username: 'usertwo',
  password: 'abc@123'
});




export const postPromise = (path) => {
oauth2token().then(res=>console.log(res.access_token));
return axios({
      method: 'get',
      url: url + path, 
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        'Authorization': 'Bearer ' + oauth2token().then(res=>res.access_token),
      },
      data : {
        "type": "node--article",
        "attributes": {
          "title": "My custom title",
          "body": {
            "value": "Custom value",
            "format": "plain_text"
          }
        }
      }
    })
  };