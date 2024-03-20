import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/SwedenRelocators.png";
import TopBar from "./TopBar";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
     
      setIsSticky(window.scrollY > 260);
    };

    
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <div className="">
        <TopBar />
        <nav className={`navbar md:tw-absolute tw-relative md:-tw-top-10 -tw-top-8 tw-h-24 navbar-expand-lg navbar-light  tw-transition-all tw-duration-700 ${isSticky ? 'fixed-top tw-smooth-transition' : ''}`}>
      <div className={`container${isSticky ? '-fluid  ' : '-lg'}  tw-transition-all tw-duration-700 container-navbar tw-py-1.5 tw-bg-white sm:px-5 px-3 md:tw-rounded-md tw-rounded-none`}>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand   tw-w-56" to="#">
              <img src={logo} alt="" />
            </Link>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 tw-gap-7">
                <li className="nav-item">
                  <Link
                    className=" tw-font-bold    tw-text-gray-dark tw-text-sm tw-uppercase"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="  tw-font-bold tw-text-gray-dark tw-text-sm tw-uppercase"
                    to="/new_in_sweden"
                  >
                    New in sweden
                  </Link>
                </li>
                <li className="nav-item dropdown hover-dropdown md:tw-block tw-hidden">
                  <Link
                    className="tw-font-bold flex  tw-justify-between tw-items-center tw-text-gray-dark tw-text-sm tw-uppercase dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                    <i class="fas fa-chevron-down  ps-2"></i>
                  </Link>
                  <ul
                    className="dropdown-menu border-0  md:tw-w-60 tw-w-full tw-shadow-xl "
                    aria-labelledby="navbarDropdown"
                  >
                    <li className=" tw-py-1">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to="/service_details"
                      >
                        ASYLUM
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" tw-py-1">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to="/service_details"
                      >
                        BUSINESS VISIT
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" tw-py-1">
                      <Link
                        className="dropdown-item tw-text-sm   tw-font-medium"
                        to="/service_details"
                      >
                        CPR NUMBER DENMARK
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" tw-py-1">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium"
                        to="/service_details"
                      >
                        LOOKING FOR HOUSING
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" tw-py-1">
                      <Link
                        className="dropdown-item tw-uppercase tw-text-sm tw-font-medium"
                        to="/service_details"
                      >
                        Family Reunification
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" tw-py-1">
                      <Link
                        className="dropdown-item tw-uppercase tw-text-sm tw-font-medium"
                        to="/service_details"
                      >
                        Personnummer Sweden
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" tw-py-1">
                      <Link
                        className="dropdown-item tw-uppercase tw-text-sm tw-font-medium"
                        to="/service_details"
                      >
                        Global Visit Visas
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" tw-py-1">
                      <Link
                        className="dropdown-item tw-uppercase tw-text-sm tw-font-medium"
                        to="/service_details"
                      >
                        EEA Permits
                      </Link>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown md:tw-hidden tw-block ">
                  <a
                    class="tw-font-bold flex  tw-justify-between tw-items-center tw-text-gray-dark tw-text-sm tw-uppercase dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                    <i class="fas ms-2 fa-chevron-down  tw-float-right"></i>
                  </a>

                  <ul
                    className="dropdown-menu border-0  md:tw-w-60 tw-w-full tw-shadow-xl "
                    aria-labelledby="navbarDropdown"
                  >
                    <li className=" tw-py-2">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to="/service_details"
                      >
                        HOW ITS WORKS
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" tw-py-2">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to="/service_details"
                      >
                        AVAILABLE HOUSING
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" tw-py-2">
                      <Link
                        className="dropdown-item tw-text-sm   tw-font-medium"
                        to="/service_details"
                      >
                        RENT OUT YOUR HOUSE
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" tw-py-2">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium"
                        to="/service_details"
                      >
                        LOOKING FOR HOUSING
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    className=" tw-font-bold tw-text-gray-dark tw-text-sm tw-uppercase"
                    to="/about_us"
                  >
                    About us
                  </Link>
                </li>
                <li className="nav-item dropdown hover-dropdown md:tw-block tw-hidden">
                  <Link
                    className="tw-font-bold flex  tw-justify-between tw-items-center tw-text-gray-dark tw-text-sm tw-uppercase dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Housing
                    <i class="fas fa-chevron-down   ps-2"></i>
                  </Link>
                  <ul
                    className="dropdown-menu border-0  md:tw-w-60 tw-w-full tw-shadow-xl "
                    aria-labelledby="navbarDropdown"
                  >
                    <li className=" tw-py-2">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to="#"
                      >
                        HOW ITS WORKS
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" tw-py-2">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to="#"
                      >
                        AVAILABLE HOUSING
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" tw-py-2">
                      <Link
                        className="dropdown-item tw-text-sm   tw-font-medium"
                        to="/rent_out_your_housing"
                      >
                        RENT OUT YOUR HOUSE
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" tw-py-2">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium"
                        to="/looking_for_housing"
                      >
                        LOOKING FOR HOUSING
                      </Link>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown md:tw-hidden tw-block ">
                  <a
                    class="tw-font-bold flex  tw-justify-between tw-items-center tw-text-gray-dark tw-text-sm tw-uppercase dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Housing
                    <i class="fas ms-2 fa-chevron-down  tw-float-right"></i>
                  </a>

                  <ul
                    className="dropdown-menu border-0  md:tw-w-60 tw-w-full tw-shadow-xl "
                    aria-labelledby="navbarDropdown"
                  >
                    <li className=" tw-py-2">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to="#"
                      >
                        HOW ITS WORKS
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" tw-py-2">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to="#"
                      >
                        AVAILABLE HOUSING
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" tw-py-2">
                      <Link
                        className="dropdown-item tw-text-sm   tw-font-medium"
                        to="/rent_out_your_housing"
                      >
                        RENT OUT YOUR HOUSE
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" tw-py-2">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium"
                        to="/looking_for_housing"
                      >
                        LOOKING FOR HOUSING
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown hover-dropdown md:tw-block tw-hidden">
                  <Link
                    className="tw-font-bold flex  tw-justify-between tw-items-center tw-text-gray-dark tw-text-sm tw-uppercase dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Assessments
                    <i class="fas ms-2 fa-chevron-down "></i>
                  </Link>
                  <ul
                    className="dropdown-menu border-0  md:tw-w-60 tw-w-full tw-shadow-xl "
                    aria-labelledby="navbarDropdown"
                  >
                    <li className=" tw-py-2">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to="/assessment_register"
                      >
                        BUSINESS VISA
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className="tw-py-2">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to="/assessment_register"
                      >
                        LONG TEAM EU STATUS
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" tw-py-2">
                      <Link
                        className="dropdown-item tw-text-sm   tw-font-medium"
                        to="/assessment_register"
                      >
                        FAMILY REUNIFICATION
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" tw-py-2">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium"
                        to="/assessment_register"
                      >
                        STUDY IN SWEDEN
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" tw-py-2">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium"
                        to="/assessment_register"
                      >
                        VISIT VISA
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" tw-py-2">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium"
                        to="/assessment_register"
                      >
                        WORK PEPMIT
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" tw-py-2">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium"
                        to="/assessment"
                      >
                        ALL ASSESSMENTS
                      </Link>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown md:tw-hidden tw-block ">
                  <a
                    class="tw-font-bold flex  tw-justify-between tw-items-center tw-text-gray-dark tw-text-sm tw-uppercase dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Assessments
                    <i class="fas ms-2 fa-chevron-down  tw-float-right"></i>
                  </a>

                  <ul
                    className="dropdown-menu border-0  md:tw-w-60 tw-w-full tw-shadow-xl "
                    aria-labelledby="navbarDropdown"
                  >
                    <li className=" tw-py-2">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to="/assessment_register"
                      >
                        BUSINESS VISA
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className="tw-py-2">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to="/assessment_register"
                      >
                        LONG TEAM EU STATUS
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" tw-py-2">
                      <Link
                        className="dropdown-item tw-text-sm   tw-font-medium"
                        to="/assessment_register"
                      >
                        FAMILY REUNIFICATION
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" tw-py-2">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium"
                        to="/assessment_register"
                      >
                        STUDY IN SWEDEN
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" tw-py-2">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium"
                        to="/assessment_register"
                      >
                        VISIT VISA
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" tw-py-2">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium"
                        to="/assessment_register"
                      >
                        WORK PEPMIT
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" tw-py-2">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium"
                        to="#"
                      >
                        ALL ASSESSMENTS
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    className=" tw-font-bold tw-text-gray-dark tw-text-sm  tw-uppercase"
                    to="/contact_us"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
