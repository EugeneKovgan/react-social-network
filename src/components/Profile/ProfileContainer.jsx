import React from 'react';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import Profile from './Profile';
import { setUserProfile } from './../../redux/profile-reducer';
import { Navigate } from 'react-router-dom';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import axios from 'axios';
// import { useLocation, useNavigate, useParams } from 'react-router-dom';

// function withRouter(Component) {
//   function ComponentWithRouterProp(props) {
//     let location = useLocation();
//     let navigate = useNavigate();
//     let params = useParams();
//     return <Component {...props} router={{ location, navigate, params }} />;
//   }

//   return ComponentWithRouterProp;
// }

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((response) => {
      this.props.setUserProfile(response.data);
    });
    //     let userId = this.props.match ? this.props.match.params.userId : 'My ID';
    //     this.props.getUserProfile(userId);
  }

  render() {
    debugger;
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  //   isAuth: state.auth.isAuth,
});

// let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
// export default ProfileContainer;
