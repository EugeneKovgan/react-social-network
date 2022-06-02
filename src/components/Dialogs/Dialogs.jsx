import styles from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  const dialogsElement = props.dialogsData.map((el) => <DialogItem name={el.name} id={el.id} key={el.id} />);
  const messagesElements = props.messagesData.map((el) => <Message message={el.message} key={el.id} />);

  return (
    <div className={styles.Dialogs}>
      <div className={styles.dialogsItems}>{dialogsElement}</div>
      <div className={styles.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
