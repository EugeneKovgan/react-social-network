import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Navigate } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { requiredField, Textarea } from '../utils/validators';

const reactFinalForm =
  ({ form, ...config }) =>
  (component) =>
  (props) =>
    <Form {...config} {...props} component={component} />;

const Dialogs = ({ dialogsPage, SendMessage, isAuth }) => {
  let state = dialogsPage;

  let addNewMessage = (value) => {
    SendMessage(value.newMessageBody);
  };

  if (!isAuth) return <Navigate to={'/login'} />;

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>
        {state.dialogs.map((item) => {
          return <DialogItem key={item.id} name={item.name} id={item.id} />;
        })}
      </div>
      <div className={styles.messages}>
        {state.messages.map((item) => {
          return <Message key={item.id} message={item.message} />;
        })}
      </div>
      <AddMessageReduxForm onSubmit={addNewMessage} />
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.newPostBlock}>
      <Field component={Textarea} name={'newMessageBody'} placeholder={'new message'} validate={requiredField} />
      <button>App post</button>
    </form>
  );
};

const AddMessageReduxForm = reactFinalForm({
  form: 'newMessage',
})(AddMessageForm);

export default Dialogs;
