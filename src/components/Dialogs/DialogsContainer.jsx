import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        // let state = store.getState().dialogsPages;
        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };
        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        };

        return (
          <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPages={store.getState().dialogsPages}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
