import React, {Component} from "react";
import './NavBar.css';
class NavBar extends Component
{
    render() {
    return(
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbars">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-left test" href="http://www.i-darts.com/" ></a>
                    <a className="navbar-brand" href="#"><span className="glyphicon glyphicon-tower"></span>WebAPI</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbars">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href={"/login"}><span className="glyphicon glyphicon-log-in "></span> Login</a></li>
                        <li><a href={"/subscription"}><span className="glyphicon glyphicon-user"></span> Subscription</a></li>
                    </ul>
                </div>
            </div>
        </nav>
);
}

}
export default NavBar;