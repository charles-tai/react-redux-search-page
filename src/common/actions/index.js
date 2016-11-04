import axios from 'axios';

export function queryArtist(artist) {
  var BASE_URL = '/api/artists';
  var queryURL = BASE_URL + '?title=' + artist;
  var request = axios.get(queryURL);
  return {
    type: 'QUERY_ARTIST',
    payload: request
  };
}
