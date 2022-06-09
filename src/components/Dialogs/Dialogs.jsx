import styles from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { FormControl, Button } from 'react-bootstrap';
import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPages;

  const dialogsElement = state.dialogs.map((el) => <DialogItem name={el.name} id={el.id} key={el.id} />);
  const messagesElements = state.messages.map((el) => <Message message={el.message} key={el.id} />);
  const newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={styles.Dialogs}>
      <div className={styles.dialogsItems}>{dialogsElement}</div>
      <div className={styles.messages}>{messagesElements}</div>
      <div className={styles.newMessageBlock}>
        <div>
          <FormControl as='textarea' value={newMessageBody} onChange={onNewMessageChange} />
        </div>
        <div className={styles.buttons}>
          <Button onClick={onSendMessageClick} variant='primary'>
            Add post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
