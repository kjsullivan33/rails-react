import { GET_THINGS_REQUEST, GET_THINGS_SUCCESS } from "../actionTypes";

const initialState = {
  things: [
  ],
};

const things = (state = initialState, action) => {
  console.log('things reducer', action);
  switch (action.type) {
    case GET_THINGS_SUCCESS: {
      const { things } = action.payload;
      return things;
    }
    default:
      return state;
  }
};

export default things;

