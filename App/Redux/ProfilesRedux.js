import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  profilesRequest: ['data'],
  profilesSuccess: ['payload'],
  profilesFailure: null,
  likeProfile: null,
  nextProfile: null,
});

export const ProfilesTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  profilesList: null,
  currentProfile: null,
  currentProfileIndex: 0,
  fetchingProfile: null,
  payload: null,
  error: null,
});

/* ------------- Selectors ------------- */

export const ProfilesSelectors = {
  getData: state => state.data,
};

export const request = (state, { data }) => state.merge({ fetchingProfile: true, data });

export const likeProfile = (state) => {

};

export const nextProfile = (state) => {
  if (state.currentProfile < state.profilesList.length) {
    const nextProfileIndex = state.currentProfile + 1;
    state.merge({ currentProfile: nextProfileIndex });
  } else {
    request();
  }
};

export const success = (state, action) => {
  const { payload } = action;

  return state.merge({
    fetching: false,
    error: null,
    profilesList: payload,
    currentProfile: payload[state.currentProfileIndex],
  });
};

export const failure = state => state.merge({ fetching: false, error: true, payload: 'test' });


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PROFILES_REQUEST]: request,
  [Types.PROFILES_SUCCESS]: success,
  [Types.PROFILES_FAILURE]: failure,
  [Types.LIKE_PROFILE]: likeProfile,
  [Types.NEXT_PROFILE]: nextProfile,
});      
