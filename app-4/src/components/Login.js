import React, {Component} from 'react';

class Login extends Component {
constructor() {
    super();
    this.state = {
        userName: '',
        password: ''
    }
    this.handleLogin = this.handleLogin.bind(this);
    }

    handleUserName(name) {
        this.setState({userName: name})
    }

    handlePassword(pw) {
        this.setState({password: pw})
    }

    handleLogin(e) {
        alert(`UserName: ${this.state.userName} \nPassword: ${this.state.password}`);
    }
    
    render() {
        return (
            <div>
                <input onChange={e => this.handleUserName(e.target.value)}/>
                <input onChange={e => this.handlePassword(e.target.value)}/>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}

export default Login;