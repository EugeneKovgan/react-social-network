import styles from './Dialogs.module.scss';
import DialogItem from './DialogItem';
import Message from './Message';
import { Navigate } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../common/FormControls/FormControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';

const maxLength10 = maxLengthCreator(10);

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />;
  });

  let messagesElements = state.messages.map((m) => {
    return <Message message={m.message} key={m.id} />;
  });

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
        <Field
          component={Textarea}
          name='newMessageBody'
          placeholder='Enter your message'
          validate={[required, maxLength10]}
        />
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
