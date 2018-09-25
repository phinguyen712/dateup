import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Button } from 'react-native'
import ProfilesActions from '../Redux/ProfilesRedux'
import { connect } from 'react-redux';
import styles from './Styles/SettingsScreenStyle';

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    if (!props.profilesList) {
      props.getProfiles();
    }
    
  }

  runstuff = () => {
    this.props.getProfiles();
  }

  renderShit() {
    if(this.props.profilesList) {
      return this.props.profilesList[0].userName;
    }
  }

  render() {
    return (
      <Text>
        <Button title="test" onPress={this.runstuff}>test</Button>
      </Text>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profilesList: state.profiles.profilesList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProfiles: () => dispatch(ProfilesActions.profilesRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
