import React from 'react';
import { black } from '../assets';
import { mygirl } from '../assets';
import { victor } from '../assets';
import { myguy } from '../assets';
import { girl2 } from '../assets';
import { sit } from '../assets';
import { kidss } from '../assets';
import { big } from '../assets';
import { sm } from '../assets';
import { white } from '../assets';
import { pant } from '../assets';
import { d } from '../assets';
import { bbb } from '../assets';
import { arrow } from '../assets';
import { kkk } from '../assets';
import { red } from '../assets';
import { views } from '../assets';
import { hug } from '../assets';
import { com } from '../assets';
import './style.css';

const Macbook = () => {
  return (
    <div className="body mb-5 mt-5">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="top-section">
            <h5 className="" style={{ textAlign: 'center' }}>
              Your body deserves comfort
            </h5>
            <h1 className="" style={{ textAlign: 'center', fontSize: '50px' }}>
              Get The Best For Yourself
            </h1>

            <div
              className="double-btn"
              style={{ textAlign: 'center', marginTop: '10px' }}
            >
              <button
                type="button"
                class=""
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  padding: '4px 40px',
                }}
              >
                Shop now
              </button>
              <button
                type="button"
                class="ml-5"
                style={{
                  border: '1px solid black',
                  backgroundColor: 'white',
                  padding: '4px 40px',
                }}
              >
                Learn more
              </button>
            </div>
          </div>
          <div className="threeimages">
            <div>
              <img style={{ marginTop: '7.5rem' }} src={black} alt="" />
            </div>
            <div>
              <img src={bbb} alt="" />
            </div>
            <div>
              <img style={{ marginTop: '7.5rem' }} src={victor} alt="" />
            </div>
          </div>
          <div className="row">
            <h2
              className=""
              style={{
                marginTop: '5.5rem',
                marginBottom: '5.5rem',
                marginLeft: '27.5rem',
              }}
            >
              Checkout BYC New Arrivals
            </h2>
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
            <div className="col-sm-12 col-md-12 col-lg-10">
              <div className="ccc">
                <div>
                  <img
                    src={myguy}
                    alt=""
                    style={{ marginLeft: '150px', marginRight: '-8' }}
                  />
                </div>
                <div>
                  <img src={girl2} alt="" />
                </div>
                <div>
                  <img src={sit} alt="" />
                </div>
              </div>
              <button
                className=""
                style={{
                  border: '1px solid black',
                  backgroundColor: 'white',
                  padding: '2px 40px',
                  marginLeft: '540px',
                  marginTop: '40px',
                }}
              >
                View All
              </button>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
          </div>
          <div className="row m-5" style={{ marginRight: '30rem' }}>
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
            <div className="col-sm-12 col-md-12 col-lg-10">
              <div className="row">
                <div
                  className="col-sm-12 col-md-12 col-lg-6"
                  style={{ backgroundColor: '#F3F3F3' }}
                >
                  <h3
                    className=""
                    style={{ marginTop: '10rem', marginLeft: '2rem' }}
                  >
                    BYC Collection 2021
                  </h3>
                  <h2
                    className=""
                    style={{
                      marginLeft: '2rem',
                      marginTop: '1rem',
                      fontSize: 'bold',
                    }}
                  >
                    BYC Collection
                  </h2>
                  <p
                    className=""
                    style={{ marginLeft: '2rem', marginTop: '2rem' }}
                  >
                    The best everyday option in a Super Saver range within a{' '}
                    <br />
                    reasonable price. It is our responsibility to keep you{' '}
                    <br />
                    100 percent stylish. Be smart & trendy with us.
                  </p>
                  <button
                    className=""
                    style={{
                      border: '1px solid black',
                      backgroundColor: '#F3F3F3',
                      padding: '2px 40px',
                      marginLeft: '2rem',
                      marginTop: '5rem',
                    }}
                  >
                    Explore
                  </button>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <img src={kidss} alt="" />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-1"></div>
            <div className="col-sm-12 col-md-12 col-lg-10">
              <div className="row">
                <div className="two-images">
                  <div className="">
                    <img
                      src={mygirl}
                      alt=""
                      style={{ width: '40.7rem', marginLeft: '-5px' }}
                    />
                  </div>
                  <div className="">
                    <img src={big} alt="" style={{ width: '40.7rem' }} />
                  </div>
                </div>
                <button
                  className=""
                  style={{
                    border: '1px solid black',
                    backgroundColor: 'white',
                    padding: '2px 40px',
                    marginLeft: '36rem',
                    marginTop: '5rem',
                  }}
                >
                  Explore
                </button>
              </div>
            </div>
            <h3 className="" style={{ marginLeft: '40rem', marginTop: '5rem' }}>
              Shop By Category
            </h3>
          </div>
          <div
            className="paragraphs"
            style={{ display: 'flex', gap: '10px', marginLeft: '40rem' }}
          >
            <p>For Women</p>
            <p>For Men</p>
            <p>For kids</p>
          </div>
          <img
            src={sm}
            alt=""
            style={{ marginLeft: '730px', width: '4rem', marginBottom: '45px' }}
          />
          <div
            className="new-para"
            style={{ display: 'flex', gap: '2rem', marginLeft: '40rem' }}
          >
            <p>T-Shirt</p>
            <p>Singlet</p>
            <p className="bg-danger">Pant</p>
            <p>Boxers</p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
            <div className="" style={{ marginLeft: '200px' }}>
              <div className="images-3">
                <div>
                  <img src={white} alt="" />
                  <p className="" style={{ marginLeft: '2rem' }}>
                    WOWEN PANTS BYC-501LMS
                  </p>
                  <p
                    className=""
                    style={{
                      marginBottom: '10rem',
                      marginTop: '-1.5rem',
                      marginLeft: '2rem',
                    }}
                  >
                    ₦2,800.00
                  </p>
                </div>
                <div>
                  <img src={pant} alt="" style={{ width: '23.5rem' }} />
                  <p className="" style={{ marginLeft: '2rem' }}>
                    WOWEN PANTS BYC-501LMS
                  </p>

                  <p
                    className=""
                    style={{
                      marginBottom: '10rem',
                      marginTop: '-1.5rem',
                      marginLeft: '2rem',
                    }}
                  >
                    ₦2,800.00
                  </p>
                </div>
                <div>
                  <img src={d} alt="" style={{ marginTop: '1rem' }} />
                  <p style={{ marginLeft: '2rem' }}>WOWEN PANTS BYC-501LMS</p>
                  <p
                    className=""
                    style={{
                      marginBottom: '10rem',
                      marginTop: '-1.5rem',
                      marginLeft: '2rem',
                    }}
                  >
                    ₦2,800.00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <button
            className=""
            style={{
              border: '1px solid black',
              backgroundColor: 'white',
              padding: '2px 40px',
              marginLeft: '51.7rem',
            }}
          >
            View All
          </button>
        </div>
        <div>
          <h3
            className=""
            style={{
              marginTop: '1rem',
              marginLeft: '49rem',
              marginBottom: '4rem',
            }}
          >
            BYC AFRICA Blog News
          </h3>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div
            className="col-sm-12 col-md-12 col-lg-10"
            style={{ marginBottom: '15rem' }}
          >
            <div className="row">
              <div
                className="col-sm-12 col-md-12 col-lg-4"
                style={{ marginBottom: '3rem' }}
              >
                <div
                  className="card"
                  style={{ width: '24rem', marginLeft: '2rem' }}
                >
                  <img src={red} alt="" />
                  <img
                    src={views}
                    alt=""
                    style={{
                      width: '13rem',
                      marginTop: '15px',
                      marginLeft: '25px',
                    }}
                  />
                  <div className="" style={{ display: 'flex', gap: '7px' }}>
                    <h5 className="" style={{}}>
                      Wade Warren
                    </h5>
                    <p className="" style={{}}>
                      Fashion Designer
                    </p>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      How important are clothes <br /> in your style?
                    </h5>
                    <p className="card-text">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim{' '}
                      <br /> velit mollit. Exercitation veniam consequat sunt
                      nostrud <br /> amet.
                    </p>
                    <button
                      className="btn"
                      style={{
                        backgroundColor: 'white',
                        border: '1px solid black',
                      }}
                    >
                      Read More <img src={arrow} alt="" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-4">
                <div
                  className="card"
                  style={{ width: '24rem', marginLeft: '2rem' }}
                >
                  <img src={hug} alt="" />
                  <img
                    src={views}
                    alt=""
                    style={{
                      width: '13rem',
                      marginTop: '15px',
                      marginLeft: '',
                    }}
                  />
                  <div className="" style={{ display: 'flex', gap: '7px' }}>
                    <h5 className="" style={{}}>
                      Wade Warren
                    </h5>
                    <p className="" style={{}}>
                      Fashion Designer
                    </p>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      How important are clothes <br /> in your style?
                    </h5>
                    <p className="card-text">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim{' '}
                      <br /> velit mollit. Exercitation veniam consequat sunt
                      nostrud <br /> amet.
                    </p>
                    <button
                      className="btn"
                      style={{
                        backgroundColor: 'white',
                        border: '1px solid black',
                      }}
                    >
                      Read More <img src={arrow} alt="" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-4">
                <div
                  className="card"
                  style={{ width: '34.2rem', marginLeft: '1rem' }}
                >
                  <img src={com} alt="" />
                  <img
                    src={views}
                    alt=""
                    style={{ width: '13rem', marginTop: '15px' }}
                  />
                  <div className="" style={{ display: 'flex', gap: '7px' }}>
                    <h5 className="" style={{}}>
                      Wade Warren
                    </h5>
                    <p className="" style={{}}>
                      Fashion Designer
                    </p>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      How important are clothes <br /> in your style?
                    </h5>
                    <p className="card-text">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim{' '}
                      <br /> velit mollit. Exercitation veniam consequat sunt
                      nostrud <br /> amet.
                    </p>
                    <button
                      className="btn"
                      style={{
                        backgroundColor: 'white',
                        border: '1px solid black',
                      }}
                    >
                      Read More <img src={arrow} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-1"></div>
    </div>
  );
};

export default Macbook;