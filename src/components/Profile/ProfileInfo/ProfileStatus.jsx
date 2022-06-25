import bg_img from '../../../assets/img/bg-img.jpeg';
import Preloader from './../../common/Preloader/Preloader';
import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };
  deactivateEditMode = () => {
    this.setState({ editMode: false });
  };

  render() {
    return (
      <div className={ProfileStatus}>
        ProfileStatus
        <div>
          {!this.state.editMode ? (
            <div onDoubleClick={this.activateEditMode}>{this.props.status}</div>
          ) : (
            <input autoFocus={true} onBlur={this.deactivateEditMode} type='text' value={this.props.status} />
          )}
        </div>
      </div>
    );
  }
}

export default ProfileStatus;
