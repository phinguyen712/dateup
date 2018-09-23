import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { ProfilesActions } from '../Redux/ProfilesRedux'
import { connect } from 'react-redux';
import styles from './Styles/SettingsScreenStyle';

class SettingsScreen extends Component {
  componentWillMount() {
    if(!this.props.profilesList) {
      this.props.getProfiles(this.props.accountId)
    }
  }
  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>SettingsScreen</Text>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profilesList: state.profiles.profilesList,
    accountId: state.account.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProfiles: dispatch(ProfilesActions.getProfiles),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
