import styles from './Dialogs.module.scss';
import DialogItem from './DialogItem';
import Message from './Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { reduxForm, Field, values } from 'redux-form';

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />;
  });

  let messagesElements = state.messages.map((m) => {
    return <Message message={m.message} key={m.id} />;
  });
  let newMessageBody = state.newMessageBody;

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) {
    return <Navigate to={'/login'} />;
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>{dialogsElements}</div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component='textarea' name='newMessageBody' placeholder='Enter your message' />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({
  form: 'dialogAddMessageForm',
})(AddMessageForm);

export default Dialogs;
