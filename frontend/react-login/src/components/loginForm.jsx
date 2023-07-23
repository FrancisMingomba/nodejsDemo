import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import { errors } from 'joi/lib/language';


class LoginForm extends Component {
state = {
    account: {username: "", password: ""},
    errors: {}
};

schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password')
};

validate = () => {
    const options = {abortEarly: false}
    const {error} = Joi.validate(this.state.account, this.schema, options);
    if (!error) return null;

    for (let item of error.details)
        errors[item.path[0]] = item.message;
        return errors;
};

validateProperty = ({name, value}) => {
    const obj = { [name]: value };
    const scheme = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, scheme);
    if (error) return  null;
    return error ? error.details[0].message : null;

}

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({errors: errors || {} });
        if (errors) return;


        console.log("Submited");
    };

    handleChange = ({ currentTarget: input}) => {
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({ account });
    }
        
    render() { 
        const { account, errors } = this.state;
        return(
         <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
               <Input
               name="username"
               value={ account.username}
               label="Username"
               onChange={this.handleChange} 
               error={errors.username}
              />

              <Input
               name="password"
               value={ account.password}
               label="Password"
               onChange={this.handleChange} 
               error={errors.password}
             />

                <button
                 disabled={this.validate()} className="btn btn-primary">Login</button>
            </form>
        </div>
        );
    }
}
 
export default LoginForm;