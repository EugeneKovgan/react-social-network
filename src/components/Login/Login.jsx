import styles from './Login.module.scss';
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.form}>
        <Field component={'input'} name={'login'} placeholder='login' />
        <Field component={'input'} name={'password'} placeholder='password' />
        <Field component={'input'} name={'rememberMe'} type='checkbox' />
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
