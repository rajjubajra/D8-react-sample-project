import axios from 'axios';
import oauth from 'axios-oauth-client';
import {baseurl} from './config';

export const simpleOauthToken = oauth.client(axios.create(), {
  url: `${baseurl.URL}/oauth/token`,
  grant_type: 'password',
  client_id: 'cd7acf28-dd1d-40f2-b98c-fda0b5f936f0',
  client_secret: 'abc123',
  username: 'usertwo',
  password: 'abc@123'
});


