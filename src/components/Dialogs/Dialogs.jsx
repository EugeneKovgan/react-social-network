import styles from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { FormControl, Button } from 'react-bootstrap';
import React from 'react';

const Dialogs = (props) => {
  const dialogsElement = props.state.dialogs.map((el) => <DialogItem name={el.name} id={el.id} key={el.id} />);
  const messagesElements = props.state.messages.map((el) => <Message message={el.message} key={el.id} />);
  let ref = React.createRef();
  let addMessage = () => {
    let result = ref.current.value;
    console.log(result);
  };

  return (
    <div className={styles.Dialogs}>
      <div className={styles.dialogsItems}>{dialogsElement}</div>
      <div className={styles.messages}>{messagesElements}</div>
      <div className={styles.newMessageBlock}>
        <div>
          <FormControl as='textarea' ref={ref} />
        </div>
        <div className={styles.buttons}>
          <Button onClick={addMessage} variant='primary'>
            Add post
          </Button>
          <Button variant='primary'>Delete post</Button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
