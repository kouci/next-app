import * as types from "../types";

const initialState = {
   word: ""
};

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TEST_REDUX:{
        return {
            ...state,
            word: action.payload,
        }
    }
    default:
      return state;
  }
};
