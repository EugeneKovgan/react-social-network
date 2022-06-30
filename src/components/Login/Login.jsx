import styles from './Login.module.scss';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormControls/FormControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';

const maxLength10 = maxLengthCreator(10);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.form}>
        <Field component={Input} name={'login'} placeholder='login' validate={[required]} />
        <Field component={Input} name={'password'} placeholder='password' validate={[required, maxLength10]} />
        <Field component={Input} name={'rememberMe'} type='checkbox' validate={[required, maxLength10]} />
        remember me
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div className={styles.Login}>
      <h3>Login</h3>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
