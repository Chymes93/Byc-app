import React from 'react'
import "./style.css";
import { Boxers } from '../assets';
import { Link } from 'react-router-dom';
import { Ribbon } from '../assets';



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

        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
            <div className="col-sm-12 col-md-12 col-lg-10">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <h1 className='font-weight-bolder text-center mb-5 mt-5'>WHAT OUR RECORD SAYS</h1>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-1"></div>

        </div>

        <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
            <div className="col-sm-12 col-md-12 col-lg-10">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className='p-5' style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px, rgba(149, 157, 165, 0.2) 0px 8px 24px', width: '400px', height: '300px'}}>
                            <div className=''>
                                <img src={ Ribbon } alt="" className='ml-3' />
                                <p className='mt-3' style={{ fontSize: 'small'}}>Gold Prize for the Best Listed Firm awarded <br />
                                    by Daesin Economy Research Institute.
                                </p>
                                <h4 className='font-weight-bolder mt-4' style={{ color: 'rgba(215, 0, 15, 1)',}}>Year 1990</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className='p-5 d-flex flex-row' style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px, rgba(149, 157, 165, 0.2) 0px 8px 24px', width: '400px', height: '300px'}}>
                            <div className=''>
                                <img src={ Ribbon } alt="" className='ml-3' />
                                <p className='mt-3' style={{ fontSize: 'small'}}>Selected as representaive enterprise of Korea for
                                    successful stategies on globalization of Korean brands
                                    by Korean Traders Association.
                                </p>
                                <h4 className='font-weight-bolder mt-3' style={{ color: 'rgba(215, 0, 15, 1)',}}>Year 1993</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className='p-5' style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px, rgba(149, 157, 165, 0.2) 0px 8px 24px', width: '400px', height: '300px'}}>
                            <div className=''>
                                <img src={ Ribbon } alt="" className='ml-3' />
                                <p className='mt-3' style={{ fontSize: 'small'}}>BYC' selected as the most preferred brand for
                                    underwear by the Federation of Korean 
                                    Women Economists..
                                </p>
                                <h4 className='font-weight-bolder mt-3' style={{ color: 'rgba(215, 0, 15, 1)',}}>Year 1997</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 mt-4">
                        <div className='p-5' style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px, rgba(149, 157, 165, 0.2) 0px 8px 24px', width: '400px', height: '300px'}}>
                            <div className=''>
                                <img src={ Ribbon } alt="" className='ml-3' />
                                <p className='mt-3' style={{ fontSize: 'small'}}>Selected as the official commercializer of underwear for 
                                    1988 France Worldcup.
                                </p>
                                <h4 className='font-weight-bolder mt-5' style={{ color: 'rgba(215, 0, 15, 1)',}}>Year 1997</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 mt-4">
                        <div className='p-5' style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px, rgba(149, 157, 165, 0.2) 0px 8px 24px', width: '400px', height: '300px'}}>
                            <div className=''>
                                <img src={ Ribbon } alt="" className='ml-3' />
                                <p className='mt-3' style={{ fontSize: 'small'}}>The Prize for Export of Original Brands awarded as 
                                    recommended by the Korean Assoiatioon of 
                                    Textile Industries
                                </p>
                                <h4 className='font-weight-bolder mt-4' style={{ color: 'rgba(215, 0, 15, 1)',}}>Year 1999</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 mt-4">
                        <div className='p-5' style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px, rgba(149, 157, 165, 0.2) 0px 8px 24px', width: '400px', height: '300px'}}>
                            <div className=''>
                                <img src={ Ribbon } alt="" className='ml-3' />
                                <p className='mt-3' style={{ fontSize: 'small'}}>"The 10th Prize for the Enterprise of Economical
                                    Justice" by the enterprise Assessment commission.
                                </p>
                                <h4 className='font-weight-bolder mt-5' style={{ color: 'rgba(215, 0, 15, 1)',}}>Year 2001</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 mt-4">
                        <div className='p-5' style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px, rgba(149, 157, 165, 0.2) 0px 8px 24px', width: '400px', height: '300px'}}>
                            <div className=''>
                                <img src={ Ribbon } alt="" className='ml-3' />
                                <p className='mt-3' style={{ fontSize: 'small'}}>The Prize for Export of Original Brands awarded as 
                                    recommended by the Korean Assoiatioon of 
                                    Textile Industries
                                </p>
                                <h4 className='font-weight-bolder mt-4' style={{ color: 'rgba(215, 0, 15, 1)',}}>Year 2006</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 mt-4">
                        <div className='p-5' style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px, rgba(149, 157, 165, 0.2) 0px 8px 24px', width: '400px', height: '300px'}}>
                            <div className=''>
                                <img src={ Ribbon } alt="" className='ml-3' />
                                <p className='mt-3' style={{ fontSize: 'small'}}>selected by korea management association as no.1 <br /> 
                                    in brand influence among the men's underwear 
                                    companies
                                </p>
                                <h4 className='font-weight-bolder mt-4' style={{ color: 'rgba(215, 0, 15, 1)',}}>Year 2006</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 mt-4">
                        <div className='p-5' style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px, rgba(149, 157, 165, 0.2) 0px 8px 24px', width: '400px', height: '300px'}}>
                            <div className=''>
                                <img src={ Ribbon } alt="" className='ml-3' />
                                <p className='mt-3' style={{ fontSize: 'small'}}>Selected as the Best Korean Enterprise of 1992 by 
                                    Korean Management Association.
                                </p>
                                <h4 className='font-weight-bolder' style={{ color: 'rgba(215, 0, 15, 1)', marginTop: '42px'}}>Year 2011</h4>
                            </div>
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
