import axios from 'axios';
import {baseurl} from './baseurl';

const csrf_token = () => (
    axios({
      method: 'GET',
      url: `${baseurl.URL}/session/token`,
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => console.log(response))
    .catch(err => console.error(err))
)