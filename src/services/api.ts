import axios from "axios";

export interface Joke {
  value: string
}

const api = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes/'
});

/* export function apiCallCategories(url: string) {
  const data = api(url).then(response => {
    return response.data;
  });
  console.log(data);
  return data;
} */

export function apiCall(url: string) {
  const data = api.get(url).then(response => {
    return response.data;
  });
  console.log(data);
  return data;
}
