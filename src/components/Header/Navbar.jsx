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



  const data = [
    {
      id: 1,
      title: "Asylum",
      description:
        "You have to be in Sweden or on the Swedish border in order to apply for asylum.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-home"></i>
      ),
    },
    {
      id: 2,
      title: "Family Reunification",
      description:
        "Family reunification is a recognized reason for the immigration of family members to a country.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-family"></i>
      ),
    },
    {
      id: 3,
      title: "Personnummer Sweden",
      description:
        "The personal identification is a number that the Swedish Tax Agency assigns to person registered in Sweden.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-14"></i>
      ),
    },
    {
      id: 4,
      title: "CPR Number Denmark",
      description:
        "CPR stands for Det Centrale Personregister, which translates to the Civil Registration System ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-12"></i>
      ),
    },
    {
      id: 5,
      title: "CPR Number Denmark",
      description:
        "CPR stands for Det Centrale Personregister, which translates to the Civil Registration System ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-11"></i>
      ),
    },
    {
      id: 5,
      title: "Business Permit",
      description:
        "Swedish business culture is open and innovative, and starting a business there is relatively simple        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-briefcase"></i>
      ),
    },
    {
      id: 6,
      title: "Business Visit",
      description:
        "Foreign people who want to invest in Sweden and stay temporarily for that purpose can apply for business visa.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 themifyicon ti-map-alt"></i>
      ),
    },
    {
      id: 7,
      title: "Citizenship",
      description:
        "When you have lived in Sweden for a specified period and meet requirements, you can apply for Swedish citizenship.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport"></i>
      ),
    },
    {
      id: 8,
      title: "Study in EU",
      description:
        "If you are thinking about studying abroad, then visit Sweden. Sweden is well known for its world-class academic opportunities.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-graduation-hat-1"></i>
      ),
    },
    {
      id: 9,
      title: "Global Visit Visas",
      description:
        "For visiting Sweden for a short period you will need a visit visa. Sweden follows the same visa rules as others.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-travel"></i>
      ),
    },
    {
      id: 10,
      title: "EEA Permits",
      description:
        "Any EU citizen getting residence in the UK according to the EU rules, can bring their family with them.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-contract"></i>
      ),
    },
    {
      id: 11,
      title: "Parents EU Permit",
      description:
        "Parents of a child under 18 years who is in Sweden can move to sweden if they will live with the child.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-family-1"></i>
      ),
    },
    {
      id: 12,
      title: "Marriage & Divorce      ",
      description:
        "Getting married is beautiful. But to make sure that it will be a good experience, it is important to have legal control.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-insurance"></i>
      ),
    },
    {
      id: 13,
      title: "Company Registration      ",
      description:
        "If you are planning to register your company inside Sweden, you can reach us anytime if you have some queries about it.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>
      ),
    },
    {
      id: 14,
      title: "House & Offices",
      description:
        "we offer you an easy and painless solution where you can get a place to live without any worries.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>
      ),
    },
    {
      id: 15,
      title: "Appeal Cases",
      description:
        "Have you been denied? let’s take a look at your case so that the decision can hopefully be overturned.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-reading"></i>
      ),
    },
    {
      id: 16,
      title: "EU Citizens Relocation",
      description:
        "Family reunification means that a family that has been split up can apply to be allowed to live together.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-passport-3"></i>
      ),
    },
    {
      id: 17,
      title: "Investment",
      description:
        "There are various opportunities for business ventures, Look for the best opportunity, grab it and do your best.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  fa fa-sitemap"></i>
      ),
    },
    {
      id: 18,
      title: "Direct Citizenship by Investments      ",
      description:
        "citizenship-by-investment programs provide ultra-wealthy families with the privilege of a second or third passport.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass"></i>
      ),
    },
    {
      id: 19,
      title: "Permanent Residence",
      description:
        "If you lived in Sweden for more than 5 years with the EU right of residence you can get the permanent residence permit.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-policy"></i>
      ),
    },
    {
      id: 20,
      title: "Golden Visa (Greece - Portugal)      ",
      description:
        "As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>
      ),
    },
  ];


  return (
    <>
      <div className="">
        <TopBar />
        <nav className={`navbar md:tw-absolute tw-relative md:-tw-top-10 -tw-top-8 tw-h-24 navbar-expand-lg navbar-light  tw-transition-all tw-duration-700 ${isSticky ? 'fixed-top p-0 tw-smooth-transition' : ''}`}>
      <div className={`container${isSticky ? '-fluid  px-lg-5 px-sm-0 tw-rounded-none' : '-lg px-lg-5 px-sm-3  md:tw-rounded-md  tw-rounded-none'}  tw-transition-all tw-duration-700 container-navbar tw-py-1.5 tw-bg-white `}>
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
            <Link className="navbar-brand   tw-w-56" to="/">
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
                <li className="nav-item dropdown hover-dropdown2 relative md:tw-block tw-hidden">
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
                  <div className="dropdown-men2  tw-pt-2  border-0   tw-absolute tw-z-40  tw-hidden">
                  <ul
                  style={{gridTemplateColumns: "180px 180px 180px",display:'grid'}}
                    className=" tw-p-0 tw-bg-white tw-shadow-xl"
                  
                  >

                    {data?.map((item,index)=>{
                      return (
                        <li  className=" " key={index}>
                        <Link
                          style={{whiteSpace:'pre-wrap'}}
                          className="dropdown-item    tw-uppercase tw-text-sm  tw-font-medium   "
                          to={`${`/service_details/${item?.title}`}`} 
                        >
                          {item?.title}
                        </Link>
                      </li>
                      )
                    })}
                   
                   
                   
                  </ul>
                  </div>
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
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to="/housing"
                      >
                        HOW ITS WORKS
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to="/available_housing"
                      >
                        AVAILABLE HOUSING
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm   tw-font-medium"
                        to="/service_details"
                      >
                        RENT OUT YOUR HOUSE
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" ">
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
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to="/housing"
                      >
                        HOW ITS WORKS
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to="/available_housing"
                      >
                        AVAILABLE HOUSING
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm   tw-font-medium"
                        to="/rent_out_your_housing"
                      >
                        RENT OUT YOUR HOUSE
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className="">
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
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to="/housing"
                      >
                        HOW ITS WORKS
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to="/available_housing"
                      >
                        AVAILABLE HOUSING
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm   tw-font-medium"
                        to="/rent_out_your_housing"
                      >
                        RENT OUT YOUR HOUSE
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" ">
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
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to="/assessment_register"
                      >
                        BUSINESS VISA
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className="">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to="/assessment_register"
                      >
                        LONG TEAM EU STATUS
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm   tw-font-medium"
                        to="/assessment_register"
                      >
                        FAMILY REUNIFICATION
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium"
                        to="/assessment_register"
                      >
                        STUDY IN SWEDEN
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium"
                        to="/assessment_register"
                      >
                        VISIT VISA
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className="">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium"
                        to="/assessment_register"
                      >
                        WORK PEPMIT
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className="">
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
                    <li className="">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to="/assessment_register"
                      >
                        BUSINESS VISA
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className="">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium "
                        to="/assessment_register"
                      >
                        LONG TEAM EU STATUS
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm   tw-font-medium"
                        to="/assessment_register"
                      >
                        FAMILY REUNIFICATION
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium"
                        to="/assessment_register"
                      >
                        STUDY IN SWEDEN
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium"
                        to="/assessment_register"
                      >
                        VISIT VISA
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" ">
                      <Link
                        className="dropdown-item tw-text-sm tw-font-medium"
                        to="/assessment_register"
                      >
                        WORK PEPMIT
                      </Link>
                    </li>
                    <hr className=" tw-border-gray m-0" />
                    <li className=" ">
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
