import React from 'react';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import Profile from './Profile';
import { setUserProfile } from './../../redux/profile-reducer';
import { Navigate } from 'react-router-dom';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
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
  componentDidMount() {
    debugger;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {
      this.props.setUserProfile(response.data);
    });
    //     let userId = this.props.match ? this.props.match.params.userId : 'My ID';
    //     this.props.getUserProfile(userId);
  }

  render() {
    // if (!this.props.isAuth) {
    //   return <Navigate to={'/login'} />;
    // }
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

// const ProfileURLMatch = (props) => {
//   const match = useMatch('/profile/:userId/');
//   return <ProfileContainer {...props} match={match} />;
// };

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  //   isAuth: state.auth.isAuth,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);
// export default ProfileContainer;
