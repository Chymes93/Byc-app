import React from "react";
import { Link } from "react-router-dom";
import { Byc } from "../assets";
import { Search } from "../assets";
import { Cart } from "../assets";
import { Group } from "../assets";
import { Vector } from "../assets";
import "./style.css";


const Navbar = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <nav className="navbar navbar-expand-lg navbar-light mt-3">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item active mr-3">
                  <Link className="nav-link" to="/">Shop Products <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active mr-3">
                  <Link className="nav-link" to="/">Blog <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item mr-3">
                  <Link className="nav-link" to="/">FAQ<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item" style={{ marginLeft: '300px'}}>
                  <img className="" src={ Byc } alt="" />
                </li> 
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-3">
                  <Link className="nav-link" href="#">About Us<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item mr-3">
                  <Link className="nav-link" href="#">Contact<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item mr-3">
                  <Link className="nav-link" href="#"><img className="" style={{ width: '24px'}} src={ Search } alt="" /><span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item mr-3">
                  <Link className="nav-link" href="#"><img className="" style={{ width: '20px'}} src={ Vector } alt="" /><span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item mr-3">
                  <Link className="nav-link" href="#"><img className="" style={{ width: '20px'}} src={ Group } alt="" /><span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item mr-3">
                  <Link className="nav-link" href="#"><img className="" style={{ width: '20px'}} src={ Cart } alt="" /><span className="sr-only">(current)</span></Link>
                </li>
              </ul>
              
            </div>
          </nav>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>

      </div>
    </React.Fragment>
  );
};

export default Navbar;
