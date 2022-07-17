import React, { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';

type PropsType = {
  status: string;
  updateStatus: (newStatus: string) => void;
};

const ProfileStatus = (props: PropsType) => {
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

  let onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
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
