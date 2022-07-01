import styles from './Login.module.scss';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormControls/FormControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';

const maxLength10 = maxLengthCreator(20);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.form}>
        <Field component={Input} name={'email'} placeholder='email' validate={[required]} />
        <Field
          component={Input}
          name={'password'}
          placeholder='password'
          validate={[required, maxLength10]}
          // type='password'
        />
        <Field component={Input} name={'rememberMe'} type='checkbox' />
        remember me
        {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
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
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Navigate to={'/profile'} />;
  }

  return (
    <div className={styles.Login}>
      <h3>Login</h3>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
