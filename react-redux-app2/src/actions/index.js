import axios from "axios";

export const FETCH_PLAYER_DATA_START = "FETCH_PLAYER_DATA_START";
export const FETCH_PLAYER_DATA_SUCCESS = "FETCH_PLAYER_DATA_SUCCESS";
export const FETCH_PLAYER_DATA_FAILURE = "FETCH_PLAYER_DATA_FAILURE";

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_PLAYER_DATA_START });
    axios
      .get("https://www.balldontlie.io/api/v1/players")
      .then(res => {
        // console.log(res);
        dispatch({ type: FETCH_PLAYER_DATA_SUCCESS, payload: res.data.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_PLAYER_DATA_FAILURE, payload: err.response });
      });
  };
};
