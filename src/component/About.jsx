import React from 'react'
import "./style.css";
import { Boxers } from '../assets';
import { Link } from 'react-router-dom';



const About = () => {
  return (
    <React.Fragment>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
            <div className="col-sm-12 col-md-12 col-lg-10">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <h1 className='font-weight-bolder text-center mb-5 mt-5'>ABOUT US</h1>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-1"></div>

        </div>

        <div className="row mb-5">
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
            <div className="col-sm-12 col-md-12 col-lg-10">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <img src={ Boxers } alt="" />
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6">
                       <div className='' style={{ marginTop: '120px'}}>
                            <h2 className='font-weight-bolder ml-5'>ABOUT BYC AFRICA</h2>
                            <p className='mt-3 ml-5' style={{ fontSize: '28px'}}>We are the sole distributor of BYC products in <br /> Africa. we import BYC products from Korea <br />
                                and distribute them to African countries <br /> through Onanik Holdings Limited.
                            </p>
                       </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-1"></div>

        </div>
      
    </React.Fragment>
  )
}

export default About
