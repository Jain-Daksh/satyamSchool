import React from 'react'
import Image from 'next/image'
import Girl from '../public/girl.png'
import Boy from '../public/boy.png'
import Rocket from '../public/rocket (1).svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faSchool, faChalkboardTeacher, faBookReader, } from '@fortawesome/free-solid-svg-icons';
import Star from './star'

function Home() {
  return (
    <div>
      <section className="home">
        <div class="position-absolute bottom-0 start-0 rotate-74 d-none d-md-block rocket">
          <Image src={Rocket}></Image>
        </div>
        <div className="container">
          <div className="row mx-auto">
            <div className="col-xl-3 mt-0 pt-0 mt-xl-5 pt-xl-5 text-center position-relative d-none d-xl-block">
              <figure className="position-absolute bottom-0 start-50 translate-middle-x mt-4 mb-0">
                <svg width="290.2px" height="296.4px">
                  <path className="fill-info"
                    d="M287.8,112.4c0.7-5.5-17.6-26-41.7-47.9l0-0.1c-1.3-1.3-2.5-2.7-3.7-4.2c-0.7-0.9-2.3-1.9-4-3.2 c-1.8-1.4-3.6-3-5.4-4.5c-3.8-3.3-7.7-6.5-11.6-9.5c-3.8-2.9-8-5-11.6-8.5c-0.1-0.1-0.1-0.1-0.2-0.2c-4.5-3.4-9-6.6-13.4-9.7 c0,0-0.1,0-0.1,0c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.1-0.2-0.1-0.3-0.2c0,0,0,0,0,0c-0.2-0.2-0.4-0.4-0.7-0.6c-0.9-0.7-1.9-1.3-2.8-2 c-0.3-0.2-0.6-0.4-0.9-0.7c-0.3-0.2-0.7-0.4-0.9-0.5c-1.4-0.8-2.8-2.1-4.2-3c-0.2-0.1-0.5-0.2-0.7-0.4c-0.2-0.1-0.4-0.2-0.6-0.3 c-0.3,0-0.5-0.1-0.8-0.1c-14.8-9.1-28-14.9-37.1-14.7C140.6,2,131.1,6,120,12.6c-0.7,0.5-1.4,0.9-2.1,1.4c-0.7,0.4-1.3,0.9-1.9,1.1 c-6,3.7-12.3,8.1-18.8,13c0,0,0,0,0,0c-0.1,0.1-0.2,0.2-0.3,0.2c-0.1,0-0.1,0-0.2,0.1c-0.1,0.1-0.2,0.1-0.3,0.2c0,0-0.1,0-0.1,0.1 c0,0,0,0,0,0c0,0,0,0,0,0c0,0-0.1,0.1-0.1,0.1c0,0.1-0.1,0.2-0.1,0.2c-0.2,0.1-0.4,0.4-0.7,0.5C44.6,67.8-15.6,133,10.1,137.8 c0,0,10.4-0.7,27.2-1.8c-9.1,31.1-4.2,128.8,4.3,146.9c10.4,22,201.2,11.4,214.9,7.9c12.9-3.3,7.5-137.5,3.5-163.6 C295.7,126,286.5,122.7,287.8,112.4z">
                  </path>
                </svg>
              </figure>
              <div className="position-relative mt-5 ms-3">
                <Image
                  src={Girl}
                  alt="Girl logo"
                />
              </div>
            </div>
            <div className="col-xl-6 text-center ">
              <div className="home-text">
                <h6>
                  <i className="fas fa-school me-2">
                  </i>
                  < FontAwesomeIcon icon={faSchool} className={"fas fa-school me-2"} >
                  </FontAwesomeIcon>
                  Shastri Nagar , Ghaziabad
                </h6>
                <h1>The Best School You Can Get</h1>
                <p>
                  The best cost-efficient choice for parents looking for high-quality education, Dedicated Timetabled
                  Lessons
                  Offered with qualified Staff.
                </p>
              </div>
              <div className="row g-4 justify-content-center">
                <div className="col-sm-6 col-md-4 col-xl-6 col-xxl-4">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="home-text-logo-1">
                      <i className={"fas fa-user-graduate fa-fw"}></i>
                      < FontAwesomeIcon icon={faUserGraduate} className={"fas fa-user-graduate fa-fw"} ></FontAwesomeIcon>
                    </div>
                    <div className="ms-3">
                      <div className="d-flex home-text-1 ">
                        <h5>1k</h5>
                      </div>
                      <span className="home-text-1-para">Total Students</span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4 col-xl-6 col-xxl-4">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="home-text-logo-2">
                      <i className="fas fa-chalkboard-teacher fa-fw"></i>
                      < FontAwesomeIcon icon={faChalkboardTeacher} className={"fas fa-chalkboard-teacher fa-fw"} ></FontAwesomeIcon>
                    </div>
                    <div className="ms-3">
                      <div className="d-flex home-text-1 ">
                        <h5>105</h5>
                      </div>
                      <span className="home-text-1-para">Total Instructors</span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4 col-xl-6 col-xxl-4">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="home-text-logo-3">
                      <i className="fas fa-book-reader fa-fw"></i>
                      < FontAwesomeIcon icon={faBookReader} className={"fas fa-book-reader fa-fw"} ></FontAwesomeIcon>
                    </div>
                    <div className="ms-3">
                      <div className="d-flex home-text-1 ">
                        <h5>2k+</h5>
                      </div>
                      <span className="home-text-1-para">Total Activities</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-sm-flex justify-content-center align-items-center mt-5">


                <div className="d-flex justify-content-center align-items-center text-start ms-0 ms-sm-4">
                  <div className="colorstar">
                    <Star />
                    <p class="mb-0 small home-text-1-para">Students Love Us!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 position-relative text-center">
              <div className="position-absolute bottom-0 start-0 mb-n5 d-none d-md-block">
                <svg enableBackground="new 0 0 223 134" xmlSpace="preserve">
                  <path className="fill-purple"
                    d="m216.6 78.7c-1.8-0.3-4.1 0.1-5.9 0.3-2.4 0.2-4.8 0.7-7.1 0.9-1.6 0.1-3.1 0.2-4.6 0.3-1.8 0.1-3.7 0.1-5.6 0.1-1.3-0.1-2.6-0.1-3.9-0.1-2.5 0-4.9-0.3-7.3-0.4-2.3-0.1-4.5 0.5-6.8 0.5-4 0.1-8.6-0.3-12.2 1.6-0.2 0.1-0.2 0.5-0.1 0.6 0.6 1.1 2.6 1.6 3.7 2 0.3 0.1 0.7 0.3 1 0.3 0.9 0.6 1.8 1.2 2.8 1.8 0.7 0.5 1.5 0.8 2.2 1.2 0.1 0.1 0.3 0.2 0.4 0.3 0.3 0.2 1 0.4 1.2 0.7 0.3 0.5 0 1.6-0.1 2.1-0.3 1.3-0.6 2.5-0.8 3.8-0.3 2.1-1 4.1-1.5 6-0.1 0.1-0.3 0.3-0.4 0.5-0.3 0.4 0.1 0.8 0.5 0.7v0.2c0 0.2 0.4 0.1 0.5 0 0.2-0.1 0.3-0.3 0.5-0.4s0.3-0.2 0.5-0.3c2-0.8 4-1.5 5.8-2.6 0.7 1.4 1.4 2.9 2 4.3 0.5 1.1 1.4 3.1 2.9 3.2 1.8 0.1 3.8-2.6 5.1-3.7 2.1-1.6 4.4-3.1 6.5-4.7 3.9-2.8 7.7-5.7 11.4-8.8 0.9-0.8 1.4-1.8 2.3-2.6 1-1 2.2-1.6 3.3-2.4 0.9-0.7 1.5-1.5 2.2-2.3 0.7-0.7 1.6-1.5 2.1-2.5-0.2-0.3-0.3-0.6-0.6-0.6zm-46.5 7 0.6 0.3 0.9 0.6c-0.6-0.3-1.1-0.6-1.5-0.9zm2.4 0.6c-0.7-0.7-1.2-1-2.1-1.4-1.2-0.5-2.6-1-3.8-1.4h-0.1c-0.3-0.2-0.7-0.4-1-0.5-0.5-0.3-1.5-0.4-0.9-0.9 0.2-0.1 0.7-0.1 0.9-0.2 1.2-0.3 2.4-0.5 3.7-0.7 2.6-0.1 5.2 0.1 7.5-0.1 1.2-0.1 2.3-0.2 3.5-0.3h1.9 0.1c0.7 0 1.4 0.1 2.2 0.1 1.9 0.2 3.8 0.1 5.7 0.2 4.3 0.1 8.4 0.1 12.7-0.3 2.1-0.2 4.2-0.5 6.3-0.7 1.2-0.1 2.3-0.2 3.5-0.2-0.5 0.1-1 0.3-1.5 0.3-1.8 0.3-3.5 0.6-5.2 0.9-3.4 0.4-6.8 0.9-10.1 1.6-3.4 0.7-6.8 1.5-10.3 2.2-3.7 0.7-7 2.4-10.7 3.3-0.1-0.1-0.2-0.1-0.3-0.1-0.6-0.9-1.2-1.1-2-1.8zm1.5 9.8c0.1-0.5 0.3-0.9 0.4-1.3 0.3-1.1 0.4-2.3 0.6-3.5 0.1-0.8 0.4-1.6 0.4-2.5 0 0 0-0.1 0.1-0.1 0.3-0.2 1.8-0.3 2-0.3 1.4-0.4 2.9-1 4.3-1.5 1.2-0.5 2.5-0.9 3.8-1.2 3.3-0.7 6.5-1.3 9.8-2.2 3.5-0.9 7.1-1.2 10.7-1.7 1.6-0.2 3.3-0.5 4.9-0.8 1-0.2 2-0.5 3.1-0.7-0.6 0.3-1.2 0.7-1.9 1-1.2 0.5-2.4 0.8-3.6 1.2-2.5 1.1-4.8 2.5-7.1 3.8-1 0.4-2 0.8-3.1 1.2-2.2 0.9-4.3 1.8-6.4 2.7-1.5 0.6-3.1 1.1-4.6 1.8-1.1 0.5-2.2 1-3.3 1.5-0.2 0.1-0.5 0.2-0.7 0.3-0.5 0.2-1 0.4-1.4 0.5-1.1 0.3-2.4 0.6-3.3 1.1-0.1-0.1-0.3-0.1-0.4 0.1-1.3 0.9-2.6 2-3.8 2.9-0.3 0.3-0.7 0.5-1 0.8 0.1-0.8 0.3-1.9 0.5-3.1zm4.7 1.9c-1.4 0.8-3.1 1.4-4.6 2 0.1-0.2 0.3-0.3 0.3-0.4 0.3-0.2 0.5-0.3 0.7-0.5 1-0.9 2.1-1.8 3.2-2.6 0.2 0.5 0.4 0.9 0.6 1.4-0.1 0.1-0.2 0.1-0.2 0.1zm34.9-16.3c-0.5 0.4-0.9 0.9-1.3 1.2l-0.4 0.4c-0.2 0.1-0.3 0.3-0.5 0.4-1 0.7-2 1.4-2.9 2.2-0.5 0.5-0.9 1-1.2 1.5-1 0.9-1.9 1.8-2.9 2.6-0.8 0.6-1.6 1.2-2.3 1.8-1.6 1.4-3.4 2.7-5.2 4-3.3 2.4-6.7 4.6-9.8 7.3-0.7 0.5-1.2 1-1.9 1.6-0.7 0.4-1.3 0.5-2-0.1-0.2-0.3-0.3-0.7-0.4-0.9-0.5-1-1-2-1.4-3-0.7-1.6-1.2-3.3-2.3-4.6 1.4-0.8 3.4-1 4.8-1.6s2.8-1.5 4.3-2l9.6-3.6c2.9-1.2 5.4-2.7 8.2-4.1 0.1-0.1 0.3-0.1 0.4-0.1 1.7-0.7 3.3-1.6 5-2.3 0.7-0.3 1.4-0.5 2.1-0.8 0.1-0.1 0.3-0.2 0.5-0.3l-0.4 0.4z">
                  </path>
                  <path className="fill-purple"
                    d="m89.1 0c-0.5 0-1 0.1-1.4 0.3-0.3 0.1-0.5 0.3-0.8 0.3-0.3 0.1-0.6 0-0.9 0.1-0.1 0-0.3 0.2-0.3 0.3v0.2c-0.1 0.5 0.7 0.8 0.9 0.3 0.4-0.1 0.7 0 1.1-0.2 0.5-0.3 0.9-0.4 1.4-0.4 0.6 0 0.6-0.9 0-0.9z">
                  </path>
                  <path className="fill-purple"
                    d="m77.1 0.9c-0.7 0-1.4-0.1-2.2-0.1-0.6 0-1.4 0-1.8 0.5s0.3 1.1 0.7 0.7c0.3-0.3 1.2-0.2 1.6-0.2 0.5 0 1.1 0.1 1.6 0.1 0.7-0.1 0.7-1 0.1-1z">
                  </path>
                  <path className="fill-purple" d="m65.5 1.5h-2.9c-0.6 0-0.6 0.9 0 0.9h2.9c0.6 0 0.6-0.9 0-0.9z"></path>
                  <path className="fill-purple"
                    d="m55.7 2.1c-0.9-0.3-2.7-0.7-3.1 0.5-0.1 0.6 0.7 0.8 0.9 0.3 0.1-0.4 1.7 0 2 0.1 0.5 0.2 0.7-0.6 0.2-0.9z">
                  </path>
                  <path className="fill-purple"
                    d="m46.1 2.7c-0.7 0-1.3-0.1-2 0s-1.2 0.4-1.8 0.4-0.6 0.9 0 0.9 1.1-0.2 1.6-0.3c0.7-0.2 1.4-0.1 2.2-0.1 0.6 0.1 0.6-0.9 0-0.9z">
                  </path>
                  <path className="fill-purple"
                    d="m35 4.5c-1 0.4-2.3 0.6-3.1 1.4-0.5 0.4 0.2 1 0.7 0.7 0.7-0.7 1.8-0.9 2.7-1.2 0.5-0.3 0.3-1.1-0.3-0.9z">
                  </path>
                  <path className="fill-purple"
                    d="m24 9c-0.6 0.5-1.6 0.6-1.8 1.4-0.1 0.6 0.7 0.8 0.9 0.3 0.1-0.3 0.5-0.4 0.7-0.5 0.3-0.2 0.7-0.3 0.9-0.5 0.4-0.4-0.3-1.1-0.7-0.7z">
                  </path>
                  <path className="fill-purple"
                    d="m15.7 15c-0.3 0.5-0.5 0.9-0.7 1.4-0.2 0.6-0.5 1.1-0.7 1.7-0.1 0.6 0.8 0.9 0.9 0.3 0.1-0.5 0.4-1 0.6-1.5s0.3-0.9 0.7-1.4-0.4-1-0.8-0.5z">
                  </path>
                  <path className="fill-purple"
                    d="m10.6 23.6c-0.3-0.1-0.5 0.1-0.6 0.3-0.3 0.7-0.5 1.3-0.5 2 0 0.6 0.9 0.6 0.9 0 0-0.7 0.1-1.2 0.4-1.8 0.2-0.1 0-0.4-0.2-0.5z">
                  </path>
                  <path className="fill-purple" d="m6.4 36.1v2.6c0 0.6 0.9 0.6 0.9 0v-2.6c0-0.6-0.9-0.6-0.9 0z"></path>
                  <path className="fill-purple"
                    d="m7.1 45.8c-0.1-0.3 0-0.7 0-1 0-0.6-0.9-0.6-0.9 0 0 0.3-0.1 0.7 0 1 0.1 0.4 0.3 0.7 0.2 1-0.1 0.6 0.9 0.6 0.9 0 0.1-0.3-0.1-0.6-0.2-1z">
                  </path>
                  <path className="fill-purple"
                    d="m8.7 57.4c-0.4-0.7-0.6-1.6-1.1-2.2-0.4-0.5-1 0.2-0.7 0.7 0.5 0.6 0.7 1.4 1 2 0.2 0.5 1.1 0 0.8-0.5z">
                  </path>
                  <path className="fill-purple"
                    d="m13.3 63.9c-0.8-0.8-1.4-1.6-2.4-2.2-0.5-0.3-1 0.5-0.5 0.8 0.9 0.5 1.5 1.3 2.2 2 0.5 0.4 1.1-0.2 0.7-0.6z">
                  </path>
                  <path className="fill-purple"
                    d="m20.9 69.2c-0.5-0.1-1-0.4-1.5-0.7-0.5-0.2-0.9-0.5-1.2-0.9-0.4-0.4-1 0.3-0.7 0.7 0.4 0.4 0.9 0.8 1.4 1 0.6 0.3 1.1 0.7 1.8 0.7 0.5 0.2 0.7-0.7 0.2-0.8z">
                  </path>
                  <path className="fill-purple"
                    d="m31.1 72c-0.2 0-0.3-0.1-0.5-0.1-0.2-0.1-0.4 0-0.6-0.1-0.5-0.1-1-0.3-1.3-0.5-0.5-0.4-1.1 0.3-0.7 0.7 0.5 0.4 1 0.6 1.5 0.7 0.3 0.1 0.5 0 0.8 0.1s0.5 0.2 0.8 0.2c0.6-0.2 0.6-1.1 0-1z">
                  </path>
                  <path className="fill-purple"
                    d="m36.2 74.5c-0.1 0-0.3-0.2-0.3-0.3-0.1-0.1-0.3-0.3-0.4-0.5-0.4-0.4-1 0.2-0.7 0.7 0.4 0.4 0.7 0.9 1.4 1 0.3 0 0.5-0.2 0.5-0.5-0.1-0.2-0.3-0.4-0.5-0.4z">
                  </path>
                  <path className="fill-purple"
                    d="m46.7 80.6c-0.3 0-0.7-0.5-0.9-0.7-0.4-0.3-0.9-0.4-1.3-0.7-0.5-0.4-1.1 0.3-0.7 0.7 0.5 0.4 1.1 0.5 1.6 0.9 0.4 0.3 0.7 0.7 1.2 0.7 0.7 0.1 0.7-0.8 0.1-0.9z">
                  </path>
                  <path className="fill-purple"
                    d="m54.3 86.1c-0.4-0.4-0.7-0.8-1-1.2-0.3-0.5-1.2 0-0.8 0.5 0.3 0.4 0.5 0.8 0.9 1.1 0.2 0.2 0.7 0.5 0.7 0.7 0.1 0.6 1 0.6 0.9 0-0.1-0.5-0.3-0.8-0.7-1.1z">
                  </path>
                  <path className="fill-purple"
                    d="m60.3 93.1c0.1 0 0-0.1-0.1-0.1-0.1-0.1-0.1-0.1-0.1-0.2-0.1-0.2-0.3-0.3-0.5-0.5-0.3-0.3-0.7-0.7-0.7-1.2-0.1-0.6-1-0.3-0.9 0.3s0.5 1.1 0.9 1.5c0.2 0.2 0.4 0.4 0.5 0.7s0.3 0.4 0.6 0.5c0.6 0 0.9-0.8 0.3-1z">
                  </path>
                  <path className="fill-purple"
                    d="m64.9 100.9v-0.9c0-0.6-0.9-0.6-0.9 0 0 0.5-0.1 0.9 0.1 1.4 0.1 0.1 0.1 0.3 0.3 0.3h0.2c0.3 0.1 0.5-0.1 0.6-0.3 0-0.2-0.2-0.4-0.3-0.5z">
                  </path>
                  <path className="fill-purple"
                    d="m66.5 110.5c-0.5-0.4 0.1-1.7 0.1-2.2 0.1-0.6-0.9-0.6-0.9 0-0.1 0.9-0.7 2.2 0.1 2.9 0.5 0.3 1.1-0.3 0.7-0.7z">
                  </path>
                  <path className="fill-purple"
                    d="m64.2 116.7c-0.4 0.7-0.8 1.2-0.9 2-0.1 0.6 0.8 0.9 0.9 0.3 0.1-0.7 0.5-1.2 0.8-1.8 0.3-0.5-0.4-1-0.8-0.5z">
                  </path>
                  <path className="fill-purple"
                    d="m59.6 126.6c-0.1-0.3-0.4-0.3-0.7-0.2s-0.6 0.3-0.9 0.4-0.4 0.3-0.3 0.6 0.3 0.3 0.6 0.3c0.4-0.1 0.8-0.3 1.2-0.5 0.2 0 0.2-0.4 0.1-0.6z">
                  </path>
                  <path className="fill-purple"
                    d="m48.5 127.2c-0.8 0.1-1.6 0.2-2.3 0.2-0.6 0-0.6 0.9 0 0.9 0.8 0 1.6-0.1 2.3-0.2 0.6-0.1 0.6-1 0-0.9z">
                  </path>
                  <path className="fill-purple"
                    d="m40.9 126.6c-0.3-0.3-0.5-0.5-0.8-0.7-0.1-0.1-0.3-0.1-0.5-0.2s-0.3-0.1-0.4-0.1c-0.4-0.5-1 0.2-0.7 0.7 0.3 0.3 0.6 0.3 0.9 0.4s0.6 0.4 0.8 0.7c0.4 0.3 1.1-0.3 0.7-0.8z">
                  </path>
                  <path className="fill-purple"
                    d="m38.9 127.3c-0.3-0.5-0.7-0.9-1.1-1.4-0.4-0.4-1 0.2-0.7 0.7 0.4 0.4 0.7 0.7 1 1.2s1.1 0 0.8-0.5z">
                  </path>
                  <path className="fill-purple"
                    d="m33.7 119.8c-0.1-0.1-0.3-0.3-0.3-0.5 0-0.6-0.9-0.6-0.9 0 0 0.5 0.3 0.9 0.6 1.2 0.4 0.3 1.1-0.3 0.6-0.7z">
                  </path>
                  <path className="fill-purple"
                    d="m34.2 110c0 0.1-0.3 0.3-0.3 0.3-0.1 0.1-0.3 0.3-0.4 0.5-0.2 0.4-0.3 0.8-0.3 1.2-0.1 0.6 0.9 0.6 0.9 0 0.1-0.5 0.2-0.9 0.5-1.2s0.5-0.5 0.5-1c0.1-0.4-0.8-0.4-0.9 0.2z">
                  </path>
                  <path className="fill-purple"
                    d="m40.8 103.2c-0.5 0.1-0.9 0.5-1.3 0.7-0.5 0.3-0.8 0.7-1 1.2-0.3 0.5 0.5 1 0.8 0.5 0.2-0.4 0.5-0.7 0.8-0.9 0.4-0.3 0.8-0.6 1.2-0.7 0.1 0 0.3-0.2 0.3-0.3s0-0.1 0.1-0.2c0.1-0.5-0.7-0.8-0.9-0.3z">
                  </path>
                  <path className="fill-purple"
                    d="m49.4 100.3c-0.7-0.1-1.4 0.1-2 0.3-0.6 0.1-1 0.3-1.4 0.7-0.4 0.5 0.3 1.1 0.7 0.7s0.8-0.5 1.3-0.5c0.5-0.1 1-0.2 1.6-0.2 0.4-0.1 0.4-1-0.2-1z">
                  </path>
                  <path className="fill-purple"
                    d="m57 100.4c-0.8-0.6-1.7-0.7-2.6-0.8-0.6 0-0.6 0.9 0 0.9 0.7 0 1.4 0.1 2 0.5 0.4 0.4 1-0.3 0.6-0.6z">
                  </path>
                  <path className="fill-purple"
                    d="m66.5 103.9c-1.1-0.3-2.1-0.9-3.3-0.9-0.6 0.1-0.6 1 0 0.9 1.1-0.1 2 0.6 3 0.9 0.6 0 0.8-0.8 0.3-0.9z">
                  </path>
                  <path className="fill-purple"
                    d="m79.7 109.4c-0.6-0.7-1.1-1.4-1.8-2-0.8-0.6-1.6-0.9-2.5-1.3-0.5-0.3-1 0.5-0.5 0.8 0.8 0.4 1.6 0.7 2.3 1.1 0.7 0.5 1.2 1.3 1.8 2 0.5 0.5 1.1-0.1 0.7-0.6z">
                  </path>
                  <path className="fill-purple"
                    d="m87 114.4c-0.6-0.1-1.2-0.7-1.6-1.1s-1 0.2-0.7 0.7c0.6 0.6 1.3 1.3 2.2 1.4 0.7 0 0.7-1 0.1-1z"></path>
                  <path className="fill-purple"
                    d="m97.7 120.6c-0.8-0.8-1.6-1.4-2.6-1.8-0.9-0.4-1.6-0.9-2.6-0.9-0.6 0-0.6 0.9 0 0.9 1.6 0 3.5 1.4 4.5 2.4 0.5 0.5 1.1-0.1 0.7-0.6z">
                  </path>
                  <path className="fill-purple"
                    d="m108.9 123.7c-0.5 0-1-0.3-1.5-0.4-0.4-0.1-1 0.1-1.4-0.1-0.5-0.4-1 0.3-0.7 0.7 0.5 0.5 1 0.4 1.6 0.4 0.7 0 1.2 0.5 1.9 0.4 0.7-0.2 0.8-1.1 0.1-1z">
                  </path>
                  <path className="fill-purple"
                    d="m118.2 126c-0.5 0-1 0.1-1.5 0s-0.9-0.3-1.3-0.4c-0.5-0.2-0.8 0.7-0.3 0.9 1 0.4 2 0.5 3.1 0.5 0.6-0.1 0.6-1 0-1z">
                  </path>
                  <path className="fill-purple"
                    d="m125.5 124c-0.5 0.5-1 0.8-1.7 0.9-0.6 0.1-0.3 1 0.3 0.9 0.8-0.2 1.5-0.6 2.1-1.2 0.4-0.4-0.3-1-0.7-0.6z">
                  </path>
                  <path className="fill-purple"
                    d="m128.7 117c-0.5 0.5-0.4 1.2-0.4 1.8-0.1 0.8-0.6 1.4-0.6 2.3 0 0.6 0.9 0.6 0.9 0 0-0.7 0.4-1.2 0.5-1.8 0.1-0.5-0.1-1.3 0.2-1.6 0.4-0.4-0.2-1.1-0.6-0.7z">
                  </path>
                  <path className="fill-purple"
                    d="m130.1 112c-0.3-0.5-0.1-1.2-0.3-1.8-0.1-0.3-0.1-0.7-0.3-0.9-0.1-0.3-0.3-0.6-0.4-1-0.1-0.6-1-0.3-0.9 0.3 0.1 0.3 0.3 0.6 0.4 0.9 0.1 0.4 0.3 0.8 0.3 1.2 0.2 0.7 0.1 1.2 0.4 1.8 0.2 0.6 1 0.1 0.8-0.5z">
                  </path>
                  <path className="fill-purple"
                    d="m127.7 104.9c-0.2-0.5-0.4-1.1-0.3-1.6 0.1-0.6-0.9-0.6-0.9 0-0.1 0.7 0.2 1.5 0.5 2.2 0.2 0.4 1-0.1 0.7-0.6z">
                  </path>
                  <path className="fill-purple"
                    d="m131 96.8c-0.3 0.3-0.7 0.3-0.9 0.5-0.4 0.2-0.7 0.5-1 0.9-0.4 0.4 0.3 1 0.7 0.7 0.3-0.3 0.6-0.6 0.9-0.8 0.3-0.1 0.7-0.3 1-0.5 0.4-0.5-0.3-1.2-0.7-0.8z">
                  </path>
                  <path className="fill-purple"
                    d="m136.4 96c-0.6 0-0.6 0.9 0 0.9 0.5 0 0.9-0.1 1.4-0.1 0.3 0 0.6 0 0.9 0.1 0.1 0 0.2 0.1 0.3 0.1h0.1c0.1 0.5 0.9 0.5 0.9-0.1-0.1-1.4-2.9-0.9-3.6-0.9z">
                  </path>
                  <path className="fill-purple"
                    d="m144.9 99.2c-0.5-0.3-1 0.5-0.5 0.8 0.7 0.5 2.5 1.1 2.3 2.2-0.1 0.6 0.8 0.9 0.9 0.3 0.3-1.7-1.6-2.5-2.7-3.3z">
                  </path>
                  <path className="fill-purple"
                    d="m156.6 106c-1.5-0.1-2.9-0.5-4.3-1-0.5-0.2-0.8 0.7-0.3 0.9 1.4 0.5 2.9 1 4.6 1 0.6 0 0.6-0.9 0-0.9z">
                  </path>
                  <path className="fill-purple"
                    d="m163 104.9c-0.4 0-0.7-0.1-1.1 0-0.3 0.1-0.7 0.3-1 0.2-0.6-0.1-0.6 0.9 0 0.9 0.3 0 0.7-0.1 1-0.2 0.4-0.1 0.8 0 1.1 0 0.6 0 0.6-0.9 0-0.9z">
                  </path>
                  <path className="fill-purple"
                    d="m168.1 103.9c0.5-0.1 0.5-0.9-0.1-0.9-0.5 0-0.9 0.4-1.2 0.7-0.1 0.2-0.3 0.4-0.3 0.7s0.3 0.5 0.5 0.6c0.3 0.1 0.5-0.1 0.6-0.3 0-0.1 0-0.3-0.1-0.4l0.2-0.2c0.1-0.1 0.1-0.1 0.2-0.1 0.1-0.1 0.1-0.1 0.2-0.1z">
                  </path>
                </svg>
              </div>
              <figure className="position-absolute bottom-0 start-50 translate-middle-x mb-xl-5 pb-0 pb-xl-5">
                <svg width="290.2px" height="296.4px">
                  <path className="fill-success"
                    d="M287.8,112.4c0.7-5.5-17.6-26-41.7-47.9l0-0.1c-1.3-1.3-2.5-2.7-3.7-4.2c-0.7-0.9-2.3-1.9-4-3.2 c-1.8-1.4-3.6-3-5.4-4.5c-3.8-3.3-7.7-6.5-11.6-9.5c-3.8-2.9-8-5-11.6-8.5c-0.1-0.1-0.1-0.1-0.2-0.2c-4.5-3.4-9-6.6-13.4-9.7 c0,0-0.1,0-0.1,0c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.1-0.2-0.1-0.3-0.2c0,0,0,0,0,0c-0.2-0.2-0.4-0.4-0.7-0.6c-0.9-0.7-1.9-1.3-2.8-2 c-0.3-0.2-0.6-0.4-0.9-0.7c-0.3-0.2-0.7-0.4-0.9-0.5c-1.4-0.8-2.8-2.1-4.2-3c-0.2-0.1-0.5-0.2-0.7-0.4c-0.2-0.1-0.4-0.2-0.6-0.3 c-0.3,0-0.5-0.1-0.8-0.1c-14.8-9.1-28-14.9-37.1-14.7C140.6,2,131.1,6,120,12.6c-0.7,0.5-1.4,0.9-2.1,1.4c-0.7,0.4-1.3,0.9-1.9,1.1 c-6,3.7-12.3,8.1-18.8,13c0,0,0,0,0,0c-0.1,0.1-0.2,0.2-0.3,0.2c-0.1,0-0.1,0-0.2,0.1c-0.1,0.1-0.2,0.1-0.3,0.2c0,0-0.1,0-0.1,0.1 c0,0,0,0,0,0c0,0,0,0,0,0c0,0-0.1,0.1-0.1,0.1c0,0.1-0.1,0.2-0.1,0.2c-0.2,0.1-0.4,0.4-0.7,0.5C44.6,67.8-15.6,133,10.1,137.8 c0,0,10.4-0.7,27.2-1.8c-9.1,31.1-4.2,128.8,4.3,146.9c10.4,22,201.2,11.4,214.9,7.9c12.9-3.3,7.5-137.5,3.5-163.6 C295.7,126,286.5,122.7,287.8,112.4z">
                  </path>
                </svg>
              </figure>
              <div className="position-relative ms-5 mt-5">
                <figure className="position-absolute start-0 top-0">
                  <svg enableBackground="new 0 0 56.2 55.9">
                    <path className="fill-warning"
                      d="m38.3 38.7c0.5 1.3 1 2.4 1.4 3.5 0.3 0.9 0.2 1.3-0.7 1.7-0.4 0.2-0.9 0.4-1.4 0.5-2.4 0.6-4.9 1.2-7.3 1.9-0.7 0.2-1.4 0.3-1.9 0.6s-0.9 0.8-1.2 1.2c-0.3 0.6 0.1 1.2 0.7 1.3 0.5 0.1 1.1 0 1.6-0.2 2.8-1 5.6-2 8.4-3 0.6-0.2 1.1-0.6 1.6-0.9 0.6-0.4 0.7-0.7 0.8-1.5 0.6 0.4 0.6 0.9 0.2 1.3-0.3 0.4-0.7 0.7-1.2 1-2.2 1.3-4.6 2.1-7 2.9-1.2 0.4-2.5 0.7-3.8 1.1-0.3 0.1-0.4 0.5-0.6 0.7 0 0.1 0.1 0.2 0.1 0.3 0.4 0 0.8 0.1 1.2 0 2.5-0.6 5.1-1.3 7.6-2 0.5-0.1 0.9-0.4 1.3-0.6 1.2-0.6 1.4-0.9 1.8-2.3 0.1 0.3 0.2 0.5 0.2 0.6 0 0.7 0 1.3 0.2 2 0.3 0.8-0.3 1.6-0.9 2.1-0.4 0.3-0.5 0.6-0.5 1.1 0 2.2-1.4 3.7-3.6 3.9-0.5 0.1-1 0-1.6 0-1.7-0.1-2.6-0.8-3.1-2.4-2.7-0.3-3.7-1.3-3.2-3.2-1.4-1.2-1.5-1.5-0.6-3.2 0.2-0.4 0.2-0.7 0-1.1-0.6-1.3-1.3-2.6-1.9-3.9-0.2-0.5-0.4-0.8-1-0.9-3-0.4-5.4-1.9-7.1-4.4-2.9-4.4-3.9-9.1-1.8-14.1 2-4.7 5.7-7.6 10.9-8.4 4.2-0.7 8 0.2 11.4 2.7s5.1 6 5.3 10.2c0.2 3.5-0.8 6.7-3 9.5-0.2 0.8-0.7 1.4-1.3 2zm-4.8-10.3c0.3-0.2 0.4-0.3 0.6-0.4 1.1-0.7 1.8-0.5 2.5 0.6 0.6 1 0.5 1.9 0 2.8-0.7 1.1-1.5 2.1-2.4 3.1-0.7 0.8-1.1 1.7-0.9 2.8 0.1 0.7 0.2 1.3 0.3 2 0.4 1.7 0.8 3.4 1.2 5.2 1.5-0.4 3.1-0.5 4.5-1.6-0.4-1.1-0.8-2.2-1.3-3.2-0.4-0.8-0.2-1.5 0.3-2.1 0.4-0.5 0.9-0.9 1.2-1.5 2.6-3.4 3.3-7.3 2.3-11.3-1.5-6.3-6.7-9.7-12.7-10.1-4.3-0.2-7.9 1.3-10.8 4.4-2 2.1-3.3 4.6-3.5 7.6-0.2 2.5 0.2 4.9 1.2 7.1 1.1 2.6 2.8 4.8 5.4 5.9 1.2 0.5 2.5 0.8 3.8 1.2 0.8 1.7 1.7 3.5 2.6 5.4 1.2-0.4 2.3-0.7 3.4-1-0.8-2.1-1.6-4.2-2.4-6.2-0.8-1.9-2.1-3.5-3.9-4.6-0.7-0.4-1.3-0.9-1.9-1.4-1.3-1.2-1.1-2.5 0.4-3.4 1.3-0.8 2.8-0.9 4.2-1.3 0.6-0.2 1.3 0.1 2 0.1 1.6-1.5 2.2-1.5 3.9-0.1zm0.8 16.2c-0.5-2.2-0.9-4.1-1.4-6s-0.2-3.6 1.3-5c0.6-0.6 1.2-1.4 1.7-2.2 0.5-0.7 0.7-1.5 0.4-2.4-0.3-0.7-0.8-1-1.4-0.8-0.7 0.2-0.9 0.7-0.8 1.5 0 0.2 0.2 0.4 0.1 0.5-0.2 0.3-0.4 0.6-0.6 0.8-0.1 0.1-0.6-0.3-0.7-0.5s-0.1-0.6 0-0.9c0.2-0.6 0-0.9-0.4-1.2-0.8-0.6-1.6-0.3-2 0.8 0.3 0.3 0.7 0.6 0.8 1 0.1 0.3 0.1 0.8-0.1 1.1s-0.7 0.4-1 0.4c-0.3-0.1-0.6-0.5-0.7-0.8-0.1-0.4-0.1-0.9-0.1-1.4-0.8-0.4-1.5-0.6-2.3-0.1 0.1 0.2 0.2 0.3 0.3 0.4 0.2 0.4 0.6 0.7 0.7 1.1 0.2 0.6 0 1.2-0.5 1.6s-1.2 0.6-1.7 0.3-0.6-0.8-0.6-1.3 0.1-1.1 0.1-1.7c-0.8 0-1.4 0.4-2 0.8-0.8 0.7-0.9 1.4-0.1 2.1 0.6 0.5 1.2 1 1.9 1.4 1.7 1.1 3.1 2.5 3.9 4.4 0.7 1.5 1.2 3 1.8 4.5 0.3 0.7 0.5 1.5 0.8 2.3 1.1-0.2 1.8-0.4 2.6-0.7zm-5.7 7.3c0.5 0.9 1.3 0.9 2.1 0.8 2.4-0.3 4.9-0.7 7.2-1.6 0.6-0.3 1.2-0.7 1.8-1.2 0.5-0.4 0.6-1 0.4-1.8-3.5 2.4-7.5 2.9-11.5 3.8zm3 1.6c0.1 0.9 0.6 1.3 1.2 1.6 1.5 0.7 3.9 0.3 5.1-0.9 0.7-0.7 1.1-1.5 0.9-2.4-2.5 0.5-4.8 1.1-7.2 1.7zm-5.2-23.6c-0.5 0.7-0.5 1.4-0.3 2.2 0.7 0.2 1.2 0 1.4-0.6s-0.2-1.2-1.1-1.6zm3.7 0c0 0.4-0.1 0.5-0.1 0.7 0.1 0.2 0.2 0.4 0.4 0.5 0 0 0.3-0.1 0.3-0.1 0-0.2 0-0.4-0.1-0.6 0-0.2-0.2-0.3-0.5-0.5z">
                    </path>
                    <path className="fill-warning"
                      d="m55.4 15c-1.7 1-3.2 1.8-4.6 2.7-1.5 0.9-2.6 2.3-4.3 3.2 1.5-2.5 6.9-6.1 8.9-5.9z"></path>
                    <path className="fill-warning"
                      d="m23.9 0.7c0.5 3 1 5.9 1.4 8.7-0.6-0.5-0.7-1.2-0.9-1.9-0.4-1.7-0.7-3.4-1-5.2 0-0.5-0.1-1.1 0.5-1.6z">
                    </path>
                    <path className="fill-warning"
                      d="m46.9 30.5c1.3-0.1 6.6 1.2 7.4 1.8-0.5 0.3-0.5 0.3-2.4-0.3-0.8-0.2-1.7-0.5-2.5-0.7-0.9 0-1.8-0.2-2.5-0.8z">
                    </path>
                    <path className="fill-warning"
                      d="m7.2 24.7c-2.2-0.4-4.5-0.7-6.7-1.1 0-0.6 0.5-0.5 0.8-0.5 1.1 0.1 2.2 0.3 3.3 0.5 0.5 0.1 1 0.2 1.5 0.4 0.4 0.1 0.8 0.3 1.1 0.5v0.2z">
                    </path>
                    <path className="fill-warning"
                      d="m38.6 10.2c0.7-2.3 2.6-4.3 4.3-4.9 0 0.2 0 0.5-0.1 0.5-1.4 0.8-2.3 2-3.3 3.3-0.2 0.4-0.6 0.7-0.9 1.1z">
                    </path>
                    <path className="fill-warning" d="M11.1,36c-1.1,1.9-3.5,4.4-4.3,4.6C7,39.8,9.5,37,11.1,36z"></path>
                    <path className="fill-warning" d="m8.9 10c1.5 0 4.4 2 5.1 3.6-1.6-1.1-3.3-2.3-5.1-3.6z"></path>
                  </svg>
                </figure>
                <Image
                  src={Boy}
                  alt="Boy logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

