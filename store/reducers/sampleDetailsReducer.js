import { GET_SAMPLE_DETAILS, SAMPLE_DETAILS_ERROR } from '../types';

const initialState = {
  sample: [],
  loading: true,
};

const sampleDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SAMPLE_DETAILS:
      return {
        ...state,
        sample: action.payload,
        loading: false,
      };

    case SAMPLE_DETAILS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default sampleDetailsReducer;
