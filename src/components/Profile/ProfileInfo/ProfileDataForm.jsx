import { createField, Input, Textarea } from '../../common/FormControls/FormControls';
import { reduxForm, Field } from 'redux-form';
import Contacts from './ProfileInfo';

const ProfileDataForm = ({ handleSubmit, error, profile }) => {
  <form onSubmit={handleSubmit}>
    <div>
      <button>save</button>
      {error && <div>{error}</div>}
      <div>
        <b>Name:</b> {createField('Full name', 'fullName', [], Input)}
      </div>
      <div>
        <b>looking for a job:</b>
        {createField('', 'lookingForAJob', [], Input, {
          type: 'checkbox',
        })}
      </div>

      <div>
        <b>My professional skills:</b>
        {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
      </div>

      <div>
        <b>contacts:</b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key}>
              <b>
                {key}:{createField(key, 'contacts.' + key, [], Input)}
              </b>
            </div>
          );
        })}
      </div>
    </div>
  </form>;
};

const ProfileDataFormReduxForm = reduxForm({
  form: 'edit-profile',
})(ProfileDataForm);

export default ProfileDataFormReduxForm;
