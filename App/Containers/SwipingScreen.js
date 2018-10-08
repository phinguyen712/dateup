import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import SlidingUpPanel from 'rn-sliding-up-panel';
import PropTypes from 'prop-types';
import ProfilesActions from '../Redux/ProfilesRedux';
import ProfileInfo from '../Components/ProfileInfo';

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 15,
  },
  background: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
  },
};

class SwipingScreen extends Component {
  static propTypes = {
    getProfiles: PropTypes.func.isRequired,
    likeProfile: PropTypes.func.isRequired,
    currentProfile: PropTypes.object,
  }

  // constructor(props) {
  //   super(props);
  //   if (!props.currentProfile) {
  //     props.getProfiles('userIDPlaceHere');
  //   }
  // }

  componentDidMount() {
    if (!this.props.currentProfile) {
      this.props.getProfiles('userIDPlaceHere');
    }
  }

  snapPanelTop = (position) => {
    if (position > 270) {
      this.slideComponent.transitionTo({
        toValue: 400,
        duration: 100,
      });
    } else {
      this.slideComponent.transitionTo({
        toValue: 200,
        duration: 100,
      });
    }
  }

  handleDislikePress = () => {
    this.props.likeProfile();
  }

  renderProfileInfo() {
    if (this.props.currentProfile) {
      return (
        <ProfileInfo
          currentProfile={this.props.currentProfile}
          handleDislikePress={this.handleDislikePress}
        />
      );
    }

    return (
      <Text>LOADING</Text>
    );
  }

  render() {
    return (
      <View style={styles.background}>
        <SlidingUpPanel
          onDragEnd={this.snapPanelTop}
          visible
          allowDragging
          draggableRange={{ top: 400, bottom: 200 }}
          allowMomentum
          startCollapsed
          ref={(component) => { this.slideComponent = component; }}
        >
          <View style={styles.container}>
            {this.renderProfileInfo()}
          </View>
        </SlidingUpPanel>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currentProfile: state.profiles.currentProfile,
});

const mapDispatchToProps = dispatch => ({
  getProfiles: () => dispatch(ProfilesActions.profilesRequest()),
  likeProfile: () => dispatch(ProfilesActions.likeProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SwipingScreen);
