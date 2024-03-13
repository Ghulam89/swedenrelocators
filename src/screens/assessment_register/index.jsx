import React from "react";
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
const Assessment_register = () => {
  return (
    <>
      <Navbar />
      <Banner_Page title={"BUSINESS VISA ASSESSMENT"} />
      <section className=" tw-mt-36">
        <div className="container-fluid ">
          <div className="row g-5">
            <div className="col-md-8    tw-py-10 tw-bg-white">
              <div className="row tw-pt-6  tw-px-10">
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
                  <i   class="fa tw-text-white fa-building tw-pt-1"></i>
                    <p className=" m-0 tw-text-white tw-font-semibold">
                    EDUCATIONAL & BUSINESS BACKGROUND
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


                  <Button label={'Submit'} className={' tw-text-xl tw-bg-blue tw-py-2.5 tw-text-white tw-rounded-md  tw-float-end'} />
                </div>
              </div>
            </div>

            <div className="col-md-4  tw-pt-16  tw-bg-[#F5FAFF]">
              <div className="  tw-pr-10">
              <ul className=" tw-pl-4">
                  <li className="hover-effect  tw-bg-white tw-p-4 tw-shadow-lg tw-flex tw-justify-between tw-items-center ">
                    <a href="#" className=" m-0">
                      <p className=" m-0 tw-text-gray-dark tw-font-semibold">
                        APPEAL CASES
                      </p>
                    </a>
                    <GoTriangleRight className=" tw-text-gray" />
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
