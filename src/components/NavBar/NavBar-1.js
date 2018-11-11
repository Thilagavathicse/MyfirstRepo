import React, {Component} from "react";
import './NavBar.css';
class NavBar extends Component
{
    render() {
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="http://www.i-darts.com/" className="navbar-left test"></a>
                        <a className="navbar-brand" href="#"><span className="glyphicon glyphicon-tower"></span>WebAPI</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href={"/watchlist"}><span className="glyphicon glyphicon-stats"></span> Watchlist</a></li>
                            <li><a href="/"><span className="glyphicon glyphicon-log-out "></span> Logout</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}
export default NavBar;