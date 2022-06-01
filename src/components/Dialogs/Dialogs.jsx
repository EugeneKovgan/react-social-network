import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.scss';

const Dialog = (props) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return <div className={styles.message}>{props.message}</div>;
};

const dialogsData = [
    { id: '1', name: 'Eugene' },
    { id: '2', name: 'Eugene 2' },
    { id: '3', name: 'Eugene 3' },
    { id: '4', name: 'Eugene 4' },
    { id: '5', name: 'Eugene 5' },
];

const messagesData = [
    { id: '1', message: 'hi' },
    { id: '2', message: 'hello' },
    { id: '3', message: 'how are you?' },
    { id: '4', message: 'hi' },
];

const dialogsElement = dialogsData.map((el) => <Dialog name={el.name} id={el.id} />);
const messagesElements = messagesData.map((el) => <Message message={el.message} />);

const Dialogs = () => {
    return (
        <div className={styles.Dialogs}>
            <div className={styles.dialogsItems}>{dialogsElement}</div>
            <div className={styles.messages}>{messagesElements}</div>
        </div>
    );
};

export default Dialogs;
