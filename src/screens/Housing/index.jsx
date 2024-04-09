import React from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { PiMapPin } from "react-icons/pi";
import work from "../../assets/images/how-it-works.png";
import camera from "../../assets/images/no-picture-taking.png";
import payments from "../../assets/images/failed.png";
import agreement from "../../assets/images/view-document.png";
import rent from "../../assets/images/find-home.png";
import house from "../../assets/images/looking-for-housing.png";

import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Teams from "../teams";
import New_Listings from "../../components/New_listings";
import { FaCamera } from "react-icons/fa6";
import Popular from "../../components/Popular";
const Housing = () => {
  return (
    <>
      <Navbar />
      <Banner_Page title={"HOUSING SOLUTIONS"} />

      <div className=" ">
        <div className="  md:tw-mt-44 tw-mt-44">
          <div className="container-fluid">
            <section className="">
              <div className="container  tw-my-7 tw-rounded-md tw-shadow-lg tw-bg-white ">
                <div className="   tw-gap-12  tw-grid md:tw-grid-cols-4 tw-grid-cols-2 p-2 tw-w-full">
                  <div className=" tw-w-full   tw-items-end tw-flex tw-justify-between ">
                    <div>
                      <p className=" text-sm  tw-text-gray">
                        I’m looking to...
                      </p>
                      <h6>Buy Apartments</h6>
                    </div>

                    <div>
                    <MdKeyboardArrowDown size={20} />
                    </div>
                  </div>

                  <div className=" tw-w-full tw-flex tw-items-end  tw-justify-between ">
                    <div>
                      <p className=" text-sm  tw-text-gray">Location</p>
                      <h6>Berlin, Germany</h6>
                    </div>

                    <div className=" tw-pb-2">
                      <PiMapPin />
                    </div>
                  </div>

                  <div className=" tw-w-full tw-items-end tw-flex tw-justify-between ">
                    <div>
                      <p className=" text-sm  tw-text-gray">Price Range</p>
                      <h6>$10,000 - $200,000</h6>
                    </div>

                    <div>
                    <MdKeyboardArrowDown size={20} />
                    </div>
                  </div>

                  <div className=" tw-w-full ">
                    <Button
                      label={"SEARCH"}
                      className={
                        " tw-bg-blue tw-text-white tw-py-3.5  tw-w-full tw-rounded-md"
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="container tw-py-5">
                <h3 className=" tw-pb-4 tw-flex tw-items-center tw-gap-3">
                  {" "}
                  <img src={work} alt="" /> How It Works
                </h3>
                <p className=" tw-text-gray"></p>
                <div className=" row  tw-pt-5">
                  <div className="col-md-3">
                    <div className=" tw-text-center">
                      <img
                        src={camera}
                        alt=""
                        className=" tw-mx-auto tw-w-20"
                      />
                      <h5 className=" tw-pt-4">Photos</h5>
                      <p className=" tw-text-gray">
                        We took pictures of the residence before teants moves
                        in.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className=" tw-text-center">
                      <img src={rent} alt="" className=" tw-mx-auto tw-w-20" />
                      <h5 className=" tw-pt-5">Rental Agreements</h5>
                      <p className=" tw-text-gray">
                        We write a Rental agreements and make sure payments
                        process will be smooth and secure.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className=" tw-text-center">
                      <img
                        src={payments}
                        alt=""
                        className=" tw-mx-auto tw-w-20"
                      />
                      <h5 className=" tw-pt-4">Security Deposit</h5>
                      <p className=" tw-text-gray">
                        We will make sure that your deposit will be return on
                        the date of moving out without any damage of property.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div>
                      <img
                        src={agreement}
                        alt=""
                        className=" tw-mx-auto tw-w-20"
                      />
                      <h5 className=" tw-pt-4">Service Charges (Tenants)</h5>
                      <p className=" tw-text-gray">
                        We charge one time service charges from tenants for
                        minimum rental period of One year.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="row g-4">
              <div className=" tw-py-12 tw-text-center">
                {/* <span>EXPopular</span> */}
                <h2>
                 <h1>Explore Popular Location</h1>

                </h2>
                <p className=" tw-text-gray">Explore the latest listings & projects in diverse areas




</p>

                <Popular />
              </div>
            </div>
            <New_Listings />
            <div className="row g-4">
              <div className=" tw-py-12 tw-text-center">
                <span>EXPERT TEAM</span>
                <h2>
                  Meet With Our <h1>Dedicated Team Members</h1>
                </h2>

                <Teams />
              </div>
            </div>
          </div>
        </div>

        <section className=" tw-flex  tw-items-center tw-bg-Journey tw-bg-fixed tw-bg-center tw-bg-cover  tw-h-[60vh]">
          <div className=" container">
            <div className=" row">
              <div className=" col-md-6">
                <div>
                  <h2 className=" text-white h2">
                    Start your Journey As a Retailer.
                  </h2>
                </div>
              </div>
              <div className=" col-md-6">
                <div className=" tw-w-full tw-relative">
                  <input
                    placeholder="Email address"
                    className=" tw-bg-white  tw-h-20 tw-outline-none  tw-pl-4 tw-rounded-xl tw-w-full"
                  />
                  <Button
                    label={"Get Started"}
                    className={
                      " tw-bg-blue tw-py-4 tw-rounded-xl tw-text-white tw-absolute tw-top-3 tw-right-3"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Housing;
