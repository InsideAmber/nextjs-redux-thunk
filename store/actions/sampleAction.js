import {
  GET_SAMPLE,
  GET_SAMPLE_DETAILS,
  SAMPLE_ERROR,
  SAMPLE_DETAILS_ERROR,
} from '../types';
import axios from 'axios';

export const getSampleData = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    dispatch({
      type: GET_SAMPLE,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SAMPLE_ERROR,
      payload: 'error message',
    });
  }
};

export const getSampleDetailsData = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    dispatch({
      type: GET_SAMPLE_DETAILS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SAMPLE_DETAILS_ERROR,
      payload: 'error message',
    });
  }
};
