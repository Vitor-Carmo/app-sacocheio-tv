import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  token: null,
  id: null,
  userName: null,
};

export const signIn = createAction("SIGN_IN");
export const signOut = createAction("SIGN_OUT");

export default createReducer(INITIAL_STATE, {
  [signIn.type]: (state, action) => ({
    ...state,
    id: action.payload.id,
    token: action.payload.token,
    userName: action.payload.userName,
  }),
  [signOut.type]: (state, action) => ({
    ...state,
    id: null,
    token: null,
    userName: null,
  }),
});
