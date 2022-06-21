import React from "react";
import styles from "./Message.module.css";
import { Alert } from "react-bootstrap";

const Message = (props) => {
    return (
        <Alert variant={"warning"} className={styles.dialog}>
            {props.message}
        </Alert>
    );
};

export default Message;
