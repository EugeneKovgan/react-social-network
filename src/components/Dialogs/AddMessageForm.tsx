import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { Textarea, createField } from '../common/FormControls/FormControls';
import { NewMessageFormValuesType } from './Dialogs';
import { maxLengthCreator, required } from '../../utils/validators/validators';

const maxLength10 = maxLengthCreator(10);

type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>;
type PropsType = {};

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {createField<NewMessageFormValuesKeysType>(
          'Enter your message',
          'newMessageBody',
          [required, maxLength10],
          Textarea
        )}
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

export default reduxForm<NewMessageFormValuesType>({
  form: 'dialogAddMessageForm',
})(AddMessageForm);
