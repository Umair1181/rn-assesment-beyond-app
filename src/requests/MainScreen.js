import {useDispatch} from 'react-redux';
import axios from 'axios';
import {Action_SetRecords} from '../redux/dataReducer';
// Api call For Data Fetching
export const FetchData = async (page, onResponse) => {
  let limit = 10;
  let skip = page * limit;
  axios
    .get(`https://dummyjson.com/products?limit=10&skip=${skip}`)
    .then(res => {
      onResponse(res.data);
    })
    .then(err => {
      console.log(err?.response?.data);
      onResponse(false);
    });
};

// Api call For Single Product --START--
export const FetchSingleProductData = async (id, onResponse) => {
  axios
    .get(`https://dummyjson.com/products/${id}`)
    .then(res => {
      console.log('res.data: ', res.data);
      onResponse(res.data);
    })
    .then(err => {
      console.log(err?.response?.data);
      onResponse(false);
    });
};
// Api call For Single Product --END--
