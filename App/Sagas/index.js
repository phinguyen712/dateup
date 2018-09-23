import { takeLatest, all } from 'redux-saga/effects';
import API from '../Services/Api';
import { ProfileService } from '../Services';
import FixtureAPI from '../Services/FixtureApi';
import DebugConfig from '../Config/DebugConfig';

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux';
import { GithubTypes } from '../Redux/GithubRedux';
import { ProfilesReduxTypes } from '../Redux/ProfilesRedux';
import { AccountReduxTypes } from '../Redux/AccountRedux';


/* ------------- Sagas ------------- */

import { startup } from './StartupSagas';
import { getUserAvatar } from './GithubSagas';
import { profiles } from './ProfilesSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    takeLatest(ProfilesTypes.PROFILES_REQUEST, ProfileService),

    takeLatest(AccountReduxTypes.ACCOUNT_REQUEST, ProfileService),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),
  ]);
}
