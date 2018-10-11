import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  profilesRequest: ['data'],
  profilesSuccess: ['payload'],
  failure: null,
  likeProfile: null,
  dislikeProfile: null,
  likeDislikeSuccess: null,
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

/* ------------- Helpers------------- */

const nextProfile = (state) => {
  const { currentProfileIndex, profilesList } = state;
  const newIndex = currentProfileIndex + 1;

  if (currentProfileIndex < profilesList.length + 1) {
    return state.merge({
      currentProfileIndex: newIndex,
      currentProfile: profilesList[newIndex],
    });
  }
  return Creators.profilesRequest('userID');
};

/* ------------- Reducer------------- */

export const profileRequestReducer = state => state.merge({
  fetchingProfile: true,
});

export const profileSuccessReducer = (state, action) => {
  const { payload } = action;
  const initialIndex = 0;

  return state.merge({
    fetching: false,
    error: null,
    profilesList: payload,
    currentProfileIndex: initialIndex,
    currentProfile: payload[initialIndex],
  });
};

export const failureReducer = state => state.merge({ fetching: false, error: true, payload: 'test' });

export const likeRequestReducer = state => state.merge({
  fetching: true, id: state.currentProfile.id,
});


export const dislikeRequestReducer = state => state.merge({
  fetching: true, id: state.currentProfile.id,
});

export const likeDislikeSuccessReducer = state => nextProfile(state);


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PROFILES_REQUEST]: profileRequestReducer,
  [Types.PROFILES_SUCCESS]: profileSuccessReducer,
  [Types.FAILURE]: failureReducer,
  [Types.LIKE_PROFILE]: likeRequestReducer,
  [Types.LIKE_DISLIKE_SUCCESS]: likeDislikeSuccessReducer,
  [Types.DISLIKE_PROFILE]: dislikeRequestReducer,
});
