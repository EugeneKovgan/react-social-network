import styles from './Message.module.scss';
import { Alert } from 'react-bootstrap';

const Message = (props) => {
  return (
    <Alert variant={'warning'} className={styles.dialog}>
      {props.message}
    </Alert>
  );
};

export default Message;
