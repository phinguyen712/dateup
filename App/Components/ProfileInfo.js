import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './Styles/ProfileInfoStyle';
import SwipeButton from './SwipeButton';

export default class ProfileInfo extends Component {
  static propTypes = {
    currentProfile: PropTypes.object.isRequired,
    handleLikePress: PropTypes.func,
    handleDislikePress: PropTypes.func,
  }

  render() {
    const {
      handleLikePress,
      handleDislikePress,
      currentProfile: {
        userName,
        height,
        age,
        distance,
      },
    } = this.props;

    return (
      <View style={styles.container}>
        <View>
          <Text>{userName}</Text>
          <Text>height {height}</Text>
          <Text>age{age}</Text>
          <Text>{distance} miles</Text>
        </View>
        <View style={styles.buttons}>
          <SwipeButton onPress={handleDislikePress} icon="clear" />
          <SwipeButton onPress={handleLikePress} icon="favorite" />
        </View>
      </View>
    );
  }
}
