import React, { useEffect, useState } from "react";
import blog1 from "../../assets/images/single-img-04.png";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import Banner_Page from "../../components/Common/Banner_Page";
import { LiaAngleRightSolid } from "react-icons/lia";
import profile from "../../assets/images/profile.png";
import { FaFacebookF } from "react-icons/fa";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { GoTriangleRight } from "react-icons/go";
import { TfiAngleLeft } from "react-icons/tfi";

const Assessment_register = () => {





  return (
    <>
      <Navbar />
      <Banner_Page title={"BUSINESS VISA ASSESSMENT"} />
      <section className=" md:tw-mt-36 tw-mt-48">
        <div className="container-fluid ">
          <div className="row g-5">
            <div className="col-md-8    tw-py-10 tw-bg-white">
              <div className="row tw-pt-6  md:tw-px-10 tw-px-5">
                <div className="col-lg-12">
                  {/* user info */}
                  <div>
                    <div className=" tw-bg-blue p-3 tw-rounded-md tw-flex tw-items-center tw-text-white">
                      <i class="fa fa-user"></i>
                      <p className=" m-0 tw-text-white tw-font-semibold">
                        PERSONAL DETAILS
                      </p>
                    </div>

                    <form>
                      <div className="row ">
                        <div className="col-md-6 tw-pt-4">
                          <Input
                            placeholder={"You Full Name"}
                            star={"*"}
                            className={" tw-w-full border "}
                            label={"Full Name"}
                          />
                        </div>
                        <div className="col-md-6 tw-pt-4">
                          <Input
                            placeholder={"Contact No with Country"}
                            star={"*"}
                            className={" tw-w-full border"}
                            label={"Contact No"}
                          />
                        </div>
                        <div className="col-md-6 tw-pt-4">
                          <Input
                            placeholder={"your Address"}
                            star={"*"}
                            className={" tw-w-full border"}
                            label={"Your Email"}
                          />
                        </div>
                      </div>
                    </form>
                  </div>

                  {/* user info */}
                  <div className=" tw-pt-8">
                    <div className=" tw-bg-blue p-3 tw-rounded-md tw-flex tw-items-center tw-text-white">
                      <i class="fa tw-text-white fa-building tw-pt-1"></i>
                      <p className=" m-0 tw-text-white tw-font-semibold">
                        EDUCATIONAL & BUSINESS BACKGROUND
                      </p>
                    </div>

                    <form>
                      <div className="row ">
                        <div className="col-md-6 tw-pt-4">
                          <label
                            htmlFor="first_name"
                            className=" tw-block  tw-text-md  tw-pb-2.5 tw-text-gray"
                          >
                            <a className=" tw-text-red-600 tw-font-semibold">
                              *
                            </a>{" "}
                            Choose Option
                          </label>
                          <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md">
                            <option>Choose an Option</option>
                            <option>I am in Sweden</option>
                            <option>I am outside of Sweden</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>

                  {/* user info */}
                  <div className=" tw-pt-8">
                    <div className=" tw-bg-blue p-3 tw-rounded-md tw-flex tw-items-center tw-text-white">
                      <i class="fa tw-text-white fa-building tw-pt-1"></i>
                      <p className=" m-0 tw-text-white tw-font-semibold">
                        LANGUAGE SKILLS
                      </p>
                    </div>

                    <form>
                      <div className="row ">
                        <div className="col-md-6 tw-pt-4">
                          <label
                            htmlFor="first_name"
                            className=" tw-block  tw-text-md  tw-pb-2.5 tw-text-gray"
                          >
                            <a className=" tw-text-red-600 tw-font-semibold">
                              *
                            </a>{" "}
                            Do you have English language certificate?
                          </label>
                          <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md">
                            <option>Choose an Option</option>
                            <option>yes</option>
                            <option>no</option>
                          </select>
                        </div>
                        <div className="col-md-8 tw-pt-4">
                          <label
                            htmlFor="first_name"
                            className=" tw-block  tw-text-md  tw-pb-2.5 tw-text-gray"
                          >
                            <a className=" tw-text-red-600 tw-font-semibold">
                              *
                            </a>{" "}
                            Do you have Swedish Language Certificate?
                          </label>
                          <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md">
                            <option>Choose an Option</option>
                            <option>yes</option>
                            <option>no</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>

                  <Button
                    label={"Submit"}
                    className={
                      " tw-text-xl tw-bg-blue tw-py-2.5 tw-text-white tw-rounded-md  tw-float-end"
                    }
                  />
                </div>
              </div>
            </div>

            <div className="col-md-4  tw-pt-16  tw-bg-[#F5FAFF]">
              <div className="  tw-pr-10">
                <ul className=" tw-pl-4 tw-flex tw-flex-col tw-gap-2.5">
                  <li className="hover-effect tw-rounded-md hover:tw-bg-blue tw-bg-white tw-p-4 tw-shadow-lg tw-flex tw-justify-between tw-items-center hover:tw-text-white">
                    <a href="#" className="m-0 hover:tw-text-white">
                      <p className="m-0 tw-text-gray-dark tw-font-semibold hover:tw-text-white">
                        APPEAL CASES
                      </p>
                    </a>
                    <GoTriangleRight className="tw-text-gray" />
                  </li>

                  <li className="hover-effect tw-rounded-md hover:tw-bg-blue tw-bg-white tw-p-4 tw-shadow-lg tw-flex tw-justify-between tw-items-center hover:tw-text-white">
                    <a href="#" className="m-0 hover:tw-text-white">
                      <p className="m-0 tw-text-gray-dark tw-font-semibold hover:tw-text-white">
                        ASYLUM
                      </p>
                    </a>
                    <GoTriangleRight className="tw-text-gray" />
                  </li>


                  <li className="hover-effect tw-rounded-md hover:tw-bg-blue tw-bg-white tw-p-4 tw-shadow-lg tw-flex tw-justify-between tw-items-center hover:tw-text-white">
                    <a href="#" className="m-0 hover:tw-text-white">
                      <p className="m-0 tw-text-gray-dark tw-font-semibold hover:tw-text-white">
                        BUSINESS PERMIT
                      </p>
                    </a>
                    <GoTriangleRight className="tw-text-gray" />
                  </li>



                  <li className="hover-effect tw-rounded-md hover:tw-bg-blue tw-bg-white tw-p-4 tw-shadow-lg tw-flex tw-justify-between tw-items-center hover:tw-text-white">
                    <a href="#" className="m-0 hover:tw-text-white">
                      <p className="m-0 tw-text-gray-dark tw-font-semibold hover:tw-text-white">
                        BUSINESS VISIT
                      </p>
                    </a>
                    <GoTriangleRight className="tw-text-gray" />
                  </li>



                  <li className="hover-effect tw-rounded-md hover:tw-bg-blue tw-bg-white tw-p-4 tw-shadow-lg tw-flex tw-justify-between tw-items-center hover:tw-text-white">
                    <a href="#" className="m-0 hover:tw-text-white">
                      <p className="m-0 tw-text-gray-dark tw-font-semibold hover:tw-text-white">
                        CITIZENSHIP
                      </p>
                    </a>
                    <GoTriangleRight className="tw-text-gray" />
                  </li>




                  <li className="hover-effect tw-rounded-md hover:tw-bg-blue tw-bg-white tw-p-4 tw-shadow-lg tw-flex tw-justify-between tw-items-center hover:tw-text-white">
                    <a href="#" className="m-0 hover:tw-text-white">
                      <p className="m-0 tw-text-gray-dark tw-font-semibold hover:tw-text-white">
                        COMPANY REGISTRATION
                      </p>
                    </a>
                    <GoTriangleRight className="tw-text-gray" />
                  </li>



                  <li className="hover-effect tw-rounded-md hover:tw-bg-blue tw-bg-white tw-p-4 tw-shadow-lg tw-flex tw-justify-between tw-items-center hover:tw-text-white">
                    <a href="#" className="m-0 hover:tw-text-white">
                      <p className="m-0 tw-text-gray-dark tw-font-semibold hover:tw-text-white">
                        CPR NUMBER DENMARK
                      </p>
                    </a>
                    <GoTriangleRight className="tw-text-gray" />
                  </li>



                </ul>
              </div>
            </div>
          </div>
        </div>





          
      </section>
      <Footer />
    </>
  );
};

export default Assessment_register;
