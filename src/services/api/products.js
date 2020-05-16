import axios from 'axios';
import API from '../../constants';

export function beers(relativeUrl) {
    const url = API + relativeUrl;
    
    return axios.request({
      url,
    });
}
