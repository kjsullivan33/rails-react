import { GET_THINGS_REQUEST, GET_THINGS_SUCCESS } from "./actionTypes";

export const getThings = () => dispatch => {
  console.log('fetching things');
    return fetch("v1/things.json")
      .then((response) => response.json())
      .then((json) => 
          dispatch(setThings(json)) 
      )
      .catch((error) => console.log(error))
};

const setThings = (json) => {
  console.log('setting things');
  return { type: GET_THINGS_SUCCESS, payload: json }
}