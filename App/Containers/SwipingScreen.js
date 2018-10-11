import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Swiper from 'react-native-swiper';
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
    dislikeProfile: PropTypes.func.isRequired,
  }

  handleLikePress = () => {
    this.props.likeProfile();
  }

  handleDislikePress = () => {
    this.props.dislikeProfile();
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

  returnImages() {
    const { currentProfile } = this.props;
    if (currentProfile && currentProfile.pictures) {
      return this.props.currentProfile.pictures.map((picture, i) => {
        return (
          <View key={i}>
            <Image
              style={{ width: 500, height: 500 }}
              source={{ uri: picture }}
            />
          </View>
        );
      });
    }
    return '';
  }

  retriveProfiles() {
    if (!this.props.currentProfile) {
      this.props.getProfiles('userIDPlaceHere');
    }
  }

  renderProfileInfo() {
    if (this.props.currentProfile) {
      return (
        <ProfileInfo
          currentProfile={this.props.currentProfile}
          handleLikePress={this.handleLikePress}
          handleDislikePress={this.handleDislikePress}
        />
      );
    }

    return (
      <Text>LOADING</Text>
    );
  }

  render() {
    this.retriveProfiles();
    return (
      <View style={styles.background}>
        {/* break this swiper to smaller component */}
        <Swiper>
          {this.returnImages()}
        </Swiper>
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
  dislikeProfile: () => dispatch(ProfilesActions.dislikeProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SwipingScreen);
