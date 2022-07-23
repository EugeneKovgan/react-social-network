import styles from './Login.module.scss';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { Input, createField } from '../common/FormControls/FormControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';
import { AppStateType } from '../../redux/redux-store';
import React from 'react';

const maxLength10 = maxLengthCreator(20);

type LoginFormOwnProps = {
  captchaUrl: string | null;
};

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({
  handleSubmit,
  error,
  captchaUrl,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.form}>
        {createField('Email', 'email', [required], Input)}
        {createField('password', 'password', [required], Input, { type: 'password' })}
        {createField(null, 'rememberMe', [], Input, { type: 'checkbox' }, 'remember me')}
        {captchaUrl && <img src={captchaUrl} alt='img' />}
        {captchaUrl && createField('Symbols from image', 'captcha', [required], Input, {})}
        {error && <div className={styles.formSummaryError}>{error}</div>}
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
  form: 'login',
})(LoginForm);

type MapStatePropsType = {
  captchaUrl: string | null;
  isAuth: boolean;
};

type MapDispatchPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void;
};

type LoginFormValuesType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
  const onSubmit = (formData: LoginFormValuesType) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };
  if (props.isAuth) {
    return <Navigate to={'/profile'} />;
  }

  return (
    <div className={styles.Login}>
      <h3>Login</h3>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
