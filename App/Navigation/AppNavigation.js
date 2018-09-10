import React from 'react';
import { TabNavigator, TabBarBottom  } from 'react-navigation';
import CardScreenJs from '../Containers/CardScreenJs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingScreen from '../Containers/SettingScreen';
import SwipingScreen from '../Containers/SwipingScreen';
import ChatScreen from '../Containers/ChatScreen';
import styles from './Styles/NavigationStyles';
import { Colors } from '../Themes';

const PrimaryNav = TabNavigator(
  CardScreenJs: { screen: CardScreenJs },
  {
    Nearby: { screen: SwipingScreen },
    Matches: { screen: ChatScreen },
    Settings: { screen: SettingScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Nearby') {
          iconName = 'ios-heart';
        } else if (routeName === 'Settings') {
          iconName = 'ios-settings';
        } else if (routeName === 'Matches') {
          iconName = 'ios-chatbubbles';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={35} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: Colors.themeLight,
      labelStyle: {
        color: 'white',
      },
      style: styles.navBar,
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  },
);

export default PrimaryNav;
