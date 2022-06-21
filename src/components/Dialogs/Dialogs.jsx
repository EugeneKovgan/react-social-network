import React from "react";
// import { NavLink } from "react-router-dom";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import Message from "./Message";
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer";
import { Button } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />;
    });

    let messagesElements = state.messages.map((m) => {
        return <Message message={m.message} key={m.id} />;
    });
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    };

    if (!props.isAuth) {
        return <Navigate to={"/login"} />;
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogs_items}>{dialogsElements}</div>
            <div className={c.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <FormControl
                            as="textarea"
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder="Enter your message"
                        ></FormControl>
                    </div>
                    <div>
                        <Button variant="primary" onClick={onSendMessageClick}>
                            Send
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
