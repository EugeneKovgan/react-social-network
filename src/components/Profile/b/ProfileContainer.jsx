import React from "react";
import { connect } from "react-redux";
import { useMatch } from "react-router-dom";
import Profile from "./Profile";
import { getUserProfile } from "./../../redux/profile-reducer";
import { Navigate } from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : "My ID";
        this.props.getUserProfile(userId);
    }

    render() {
        if (!this.props.isAuth) {
            return <Navigate to={"/login"} />;
        }

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        );
    }
}

const ProfileURLMatch = (props) => {
    const match = useMatch("/profile/:userId/");
    return <ProfileContainer {...props} match={match} />;
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { getUserProfile })(ProfileURLMatch);
