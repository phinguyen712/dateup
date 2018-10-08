import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './Styles/ProfileInfoStyle';
import SwipeButton from './SwipeButton';

export default class ProfileInfo extends Component {
  static propTypes = {
    currentProfile: PropTypes.object.isRequired,
    onPress: PropTypes.func,
  }

  render() {
    const {
      onPress,
      currentProfile: { userName, height },
    } = this.props;
    return (
      <View style={styles.container}>
        <Text>{userName}</Text>
        <Text>{height}</Text>
        <SwipeButton onPress={onPress} icon="clear" />
        <SwipeButton onPress={onPress} icon="favorite" />
      </View>
    );
  }
}
