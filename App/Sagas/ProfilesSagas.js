/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects';
import ProfilesActions from '../Redux/ProfilesRedux';


export default function* getProfilesSaga(api, action) {
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
