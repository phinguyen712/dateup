import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles, { colors } from './Styles/SwipeButtonStyle';

export default class SwipeButton extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    icon: PropTypes.string,
  }

  render() {
    const { icon, onPress } = this.props;
    const iconSettings = {
      name: icon,
      color: colors[icon],
      style: styles.icon,
    };

    return (
      <Button
        icon={iconSettings}
        onPress={onPress}
        title={null}
        buttonStyle={styles.button}
      />
    );
  }
}
