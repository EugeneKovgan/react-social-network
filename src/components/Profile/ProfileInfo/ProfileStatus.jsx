import React from 'react';
import { useEffect, useState } from 'react';

const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  let activateEditMode = () => {
    setEditMode(true);
  };

  let deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  let onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div onDoubleClick={activateEditMode}>
          <span>{props.status || 'no status'}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input autoFocus={true} type='text' onBlur={deactivateEditMode} onChange={onStatusChange} value={status} />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
