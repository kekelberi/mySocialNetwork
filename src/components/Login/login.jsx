import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControl/FormsControl';
import { maxLenghtCreator, required } from '../utils/Validators/validators';


let max = maxLenghtCreator(20);


const LoginForm = (props) => {
	return (
		<form onSubmit={ props.handleSubmit } >
			<div>
				<Field placeholder={ "Login" } name={ 'login' } component={ Input }
					validate={ [required, max] } />
			</div>
			<div>
				<Field placeholder={ "Password" } name={ 'password' } component={ Input } validate={ [required, max] } />
			</div>
			<div>
				<Field type={ "checkbox" } name={ 'Rremember me' } component={ Input } /> remember me
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
	const onSubmit = (formData) => {
		console.log(formData);
	}
	return <div>
		<h1>Login</h1>
		<LoginReduxForm onSubmit={ onSubmit } />
	</div>
}

export default Login;