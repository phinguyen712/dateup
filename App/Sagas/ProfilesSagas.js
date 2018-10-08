import { call, put } from 'redux-saga/effects';
import ProfilesActions from '../Redux/ProfilesRedux';


export function* getProfilesSaga(api, action) {
  const { data } = action;

  const response = yield call(api.getUsersProfiles, data);

  // success?
  if (response) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(ProfilesActions.profilesSuccess(response));
  } else {
    yield put(ProfilesActions.profilesFailure());
  }
}

export function* likeProfileSaga(api, action) {
  const { data } = action;

  const response = yield call(api.getUsersProfiles, data);

  // success?
  if (response) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(ProfilesActions.profilesSuccess(response));
  } else {
    yield put(ProfilesActions.profilesFailure());
  }
}
