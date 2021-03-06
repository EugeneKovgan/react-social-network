import React from 'react';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import Profile from './Profile';
import { getUserProfile } from './../../redux/profile-reducer.ts';
import { compose } from 'redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profile-reducer.ts';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  refreshProfile() {
    // let userId = this.props.match ? this.props.match.params.userId : 'My ID';
    let userId = this.props.match.params.userId;
    // let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push('/login');
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};
const ProfileURLMatch = (props) => {
  // const match = useMatch('/profile/:userId/');
  const match = useMatch('/profile');
  return <ProfileContainer {...props} match={match} />;
};

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
  withRouter
)(ProfileURLMatch);

// export default compose(
//   connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
//   withRouter
// )(ProfileContainer);
