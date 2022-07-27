import styles from './Dialogs.module.scss';
import DialogItem from './DialogItem';
import Message from './Message';
// import { Navigate } from 'react-router-dom';
// import { reduxForm, Field } from 'redux-form';
import React from 'react';
import { InitialStateType } from '../../redux/dialogs-reducer';
import AddMessageForm from './AddMessageForm';

export type PropsType = {
  dialogsPage: InitialStateType;
  sendMessage: (messageText: string) => void;
};
export type NewMessageFormValuesType = {
  newMessageBody: string;
};
// type LoginFormValuesTypeKeys = Extract<keyof NewMessageFormValuesType, string>;
const Dialogs: React.FC<PropsType> = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />;
  });

  let messagesElements = state.messages.map((m) => {
    return <Message message={m.message} key={m.id} />;
  });

  let addNewMessage = (values: NewMessageFormValuesType) => {
    props.sendMessage(values.newMessageBody);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>{dialogsElements}</div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <AddMessageForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
