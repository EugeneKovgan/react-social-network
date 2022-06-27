import bg_img from '../../../assets/img/bg-img.jpeg';
import Preloader from './../../common/Preloader/Preloader';
import React from 'react';

class ProfileStatus extends React.Component {
  // statusInputRef = React.createRef();
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };
  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value });
  };

  render() {
    return (
      <div className={ProfileStatus}>
        ProfileStatus
        <div>
          {!this.state.editMode ? (
            <div onDoubleClick={this.activateEditMode}>{this.props.status || 'no status'}</div>
          ) : (
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              type='text'
              value={this.state.status}
            />
          )}
        </div>
      </div>
    );
  }
}

export default ProfileStatus;
