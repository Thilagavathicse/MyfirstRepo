import React, {Component} from "react";
import './LoginPage.css';
import NavBar from "../NavBar/NavBar";
import axios from "axios";
class LoginPage extends Component
{
    constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: '',
        error: '',
        formErrors: {username: '', password: ''},
        isAuthenticated:false,
        keyValue:''
    };
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
}
    dismissError() {
    this.setState({ error: '' });
}
    handleSubmit(evt) {
    evt.preventDefault();
    let fieldValidationErrors = this.state.formErrors;
    if (!this.state.username) {
        return this.setState({ error: 'Username is required' });
    }
    if (!this.state.password) {
        return this.setState({ error: 'Password is required' });
    }
    if((this.state.username.length)>=3)
    {
        if((this.state.password.length)>=6)
        {
            let uname=this.state.username;
            let upswd=this.state.password;
            const name=evt.target.name;
            const value=evt.target.value;
            axios.post(`http://180.179.151.146/IDAUTH/login.aspx?UserId=${uname}&Password=${upswd}&Provider=TRUEDATA`)
                .then((response) =>{const userkey= response.data;
                    const keyValue=userkey.split('\n')[0];
                    console.log(keyValue)
                    if (keyValue ===null)
                    {
                        return this.setState({ error: 'Auth key is null' });
                    }
                    else if (keyValue==="")
                    {
                        return this.setState({ error: 'Auth key is empty'});
                    }
                    else if (keyValue ==="STLK")
                    {
                        return this.setState({ error: 'Auth key is blocked'});
                    }
                    else if (keyValue==="IV")
                    {
                        return this.setState({ error: 'Auth key is invalid'});
                    }
                    else if (keyValue==="SE" || keyValue==="DU" || keyValue==="EX")
                    {
                        return this.setState({ error: 'Auth key is process more than 3 times' });
                    }
                    else
                    {
                        console.log(this.state.keyValue);
                        this.props.history.push({pathname:'/watchlist', state: { username: this.state.username,
                                password: this.state.password }});
                    }
                })


        }
    }

}

handleUserChange(evt) {
    this.setState({username: evt.target.value,});
};

    handlePassChange(evt) {
    this.setState({password: evt.target.value,});
}
    errorClass(error) {

        return(error.length === 0 ? '' : 'has-error');

    }

    render() {
    return (
        <div><NavBar/>
            <div className="col-lg-12 bg">
                <div className="form_cont " >
                    <h3 className="h3ead">LOGIN</h3>
                    <form onSubmit={this.handleSubmit}>

                        <div >
                        <input type="text" name="username" className="field" placeholder="Username" required
                               pattern="^[a-zA-Z0-9.\-_$@*!]{3,20}$" title="UserName must match the format" value={this.state.username} onChange={this.handleUserChange}/>
                        </div>
                        <div >
                            <input type="password" name="password" className="field" placeholder="Password" required
                               pattern="^[a-zA-Z0-9.\-_$@*!]{6,20}$" title="password must match the format" value={this.state.password} onChange={this.handlePassChange} />
                        </div>
                            <input type="submit" className="btn btn-primary" value="Login" data-test="submit"/>
                        <span className="error-text">{
                            this.state.error &&
                            <h3 data-test="error" onClick={this.dismissError}>
                                <button className="btn-danger err-btn" onClick={this.dismissError}>!</button>
                                {this.state.error}</h3>
                        }</span>
                    </form>
                </div>
            </div>
        </div>
    );
}
};
export default LoginPage;
