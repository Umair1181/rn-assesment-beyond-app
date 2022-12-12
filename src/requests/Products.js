import axios from 'axios';
import {BASEURL} from '@env';
// Api call For Data Fetching
export const FetchData = async (page, onResponse) => {
  let limit = 10;
  let skip = page * limit;
  axios
    .get(`${BASEURL}/products?limit=10&skip=${skip}`)
    .then(res => {
      onResponse(res.data);
    })
    .then(err => {
      onResponse(false);
    });
};

// Api call For Single Product --START--
export const FetchSingleProductData = async (id, onResponse) => {
  axios
    .get(`${process.env.BASEURL}/products/${id}`)
    .then(res => {
      onResponse(res.data);
    })
    .then(err => {
      onResponse(false);
    });
};
// Api call For Single Product --END--
