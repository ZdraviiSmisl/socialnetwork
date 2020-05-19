import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {InputType} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux(BLL)/authentications-reducer";
import {Redirect} from "react-router-dom";
import style from  './../common/FormsControls/FormsControls.css';
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={'email'} validate={[required]} placeholder={'Email'} component={InputType}
                        types={'input'}/></div>
            <div><Field name={'password'} validate={[required]} placeholder={'Password'} component={InputType}
                        types={'input'}/></div>
            <div><Field name={'rememberMe'} type={'checkbox'} component={'input'}/>remember my date</div>
            {props.error&&<div className={style.formMainError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (<div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    );
};
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login})(Login);
