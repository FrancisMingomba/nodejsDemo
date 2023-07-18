import React, { Component } from 'react';

class LoginForm extends Component {
state = {
    account: {username: "", password: ""}
};

    handleSubmit = e => {
        e.preventDefault();
      
    };

    handleChange = ({ currentTarget: input}) => {
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({ account });
    }
        
    render() { 
        const { account } = this.state;
        return(
         <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                <label htmlFor="username">Username</label>
                <input 
                value={account.username}
                onChange={this.handleChange}
                autoFocus id="username"
                name="username"
                type="text" 
                className="form-control"
                />
                </div>

                <div className="form-group">
                <label htmlFor="password">password</label>
                <input
                value={account.password}
                onChange={this.handleChange}
                name="password"
                autoFocus id="password" type="text" className="form-control" /></div>
                <button className="btn btn-primary">Login</button>
            </form>
        </div>
        );
    }
}
 
export default LoginForm;