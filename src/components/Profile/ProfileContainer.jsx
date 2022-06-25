import React from 'react';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import Profile from './Profile';
import { getUserProfile } from './../../redux/profile-reducer';
import { Navigate } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

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
    let userId = this.props.match ? this.props.match.params.userId : 'My ID';
    this.props.getUserProfile(userId);
  }

  render() {
    // if (!this.props.isAuth) {
    //   return <Navigate to={'/login'} />;
    // }

    return (
      // <div>
      <Profile {...this.props} profile={this.props.profile} />
      // </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const ProfileURLMatch = (props) => {
  const match = useMatch('/profile/:userId/');
  return <ProfileContainer {...props} match={match} />;
};

// export default compose(connect(mapStateToProps, { getUserProfile }), withRouter, withAuthRedirect)(ProfileContainer);
export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter
  // withAuthRedirect
)(ProfileURLMatch);

// export default connect(mapStateToProps, { getUserProfile })(ProfileURLMatch);
