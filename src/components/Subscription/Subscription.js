import React, {Component} from "react";
import './Subscription.css';
import NavBar from "../NavBar/NavBar";
class Subscription extends Component
{

    render() {
        return(
            <div><NavBar/>
            <div className="col-lg-12 style">
            <div className="form_cont bg1">
            <h3 className="h3ead" >SUBSCRIBE</h3>
            <form >
                <input type="text" name="fname" className="field" placeholder="Firstname..." required
                       title="Enter the Firstname"/>
                <input type="text" name="lname" className="field" placeholder="Lastname..."
                       title="Enter the Lastname"/>
                <input type="email" name="email" className="field" placeholder="Username..."
                       title="Enter the Email Id" required/>
                <input type="password" name="psd" className="field" placeholder="Password..." required
                       pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$&*!%]).{8,}"
                       title="Must contain at least one number and one uppercase and lowercase letter and  one special charcters, and at least 8 or more characters"/>
                <input type="submit" className="btn" value="Subscribe"/>
            </form>
            </div>
    </div>
</div>
    );
    }

    }
    export default Subscription;