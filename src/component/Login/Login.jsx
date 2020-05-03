import React from 'react';
import {Field, reduxForm} from 'redux-form';
import handleSubmit from 'redux-form/lib/handleSubmit';

const LoginForm = () => {
  return (
    <form onSubmit={handleSubmit}>
      <div><Field name={'Login'} placeholder={'Login'} component={'input'}/></div>
      <div><Field name={'password'} placeholder={'Password'} component={'input'}/></div>
      <div><Field name={'remember'} type={'checkbox'} component={'input'}/>remember my date</div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
const onSubmit=(formData)=>{
console.log(formData);
}

const Login = () => {
  return (<div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>

  );
};

export default Login;
