import React, { Component } from 'react';

class LoginForm  extends Component {
   
    render() { 
        return (
        <div>
            <h1>Login</h1>
            <form>
                <div className="form-group"><label htmlFor="UserName"></label>UserName<input id="UserName" type="text" className="form-control" /></div>
                <div className="form-group"><label htmlFor="Password"></label>Password<input id="Password" type="text" className="form-control" />
                </div>
                <button className="btn btn-primary">Login</button>
            </form>
            
        </div>
        );
    }
}
 
export default LoginForm;