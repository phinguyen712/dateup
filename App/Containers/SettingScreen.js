import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SettingScreenStyle'

class SettingScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>SettingScreen Container</Text>
      </ScrollView>
    );
  }
}

export default SettingScreen;
