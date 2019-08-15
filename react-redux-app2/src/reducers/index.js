import {
  FETCH_PLAYER_DATA_START,
  FETCH_PLAYER_DATA_SUCCESS,
  FETCH_PLAYER_DATA_FAILURE
} from "../actions/index";

const initialState = {
  players: [],
  isLoading: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYER_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_PLAYER_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        players: action.payload,
        error: ""
      };
    case FETCH_PLAYER_DATA_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
