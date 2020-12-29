import { GET_PERSONS } from "./actions";

const initialState = [];

export const getPersonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERSONS:
      return action.payload;

    default:
      return state;
  }
};
