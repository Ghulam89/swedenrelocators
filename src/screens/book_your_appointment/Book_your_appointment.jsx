import React from "react";
import Navbar from "../../components/Header/Navbar";
import Banner_Page from "../../components/Common/Banner_Page";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
const Book_your_appointment = () => {
  return (
    <>
      <Navbar />
      <Banner_Page title={"BOOK YOUR APPOINTMENT"} />
      <section className=" tw-pt-40">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className=" tw-bg-white tw-pt-8">
                <div className=" tw-bg-blue tw-rounded-md tw-py-4  px-3">
                  <h6 className=" tw-text-white tw-m-0">
                    {" "}
                    <i class="fa fa-calendar"></i> YOU CAN BOOK AN APPOINTMENT
                    HERE OR FROM YOUR ONLINE CLIENT PORTAL
                  </h6>
                </div>

                <form>
                  <div className="row g-3 tw-pt-6 ">
                    <div className="col-md-6">
                      <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Select Appointment Type
                      </label>
                      <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md">
                        <option>Choose Option</option>
                        <option>At office</option>
                        <option>Telephone</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Select Category
                      </label>
                      <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md">
                        <option>Choose Option</option>
                        <option>At office</option>
                        <option>Telephone</option>
                      </select>
                    </div>
                    <div className="col-md-12">
                      <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Select Country
                      </label>
                      <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md">
                        <option>Choose Option</option>
                        <option>At office</option>
                        <option>Telephone</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                          <Input
                           
                            star={"*"}
                            className={" tw-w-full border"}
                            label={"Select Appointment Date"}
                          />
                        </div>
                        <div className="col-md-6">
                      <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Select Appointment Time (Select date first)
                      </label>
                      <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md">
                        <option>Choose Option</option>
                        <option>At office</option>
                        <option>Telephone</option>
                      </select>
                    </div>
                    <div className="col-md-12">
                      <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        What you are looking for? Please describe.
                      </label>
                     <textarea  rows={6} className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md"></textarea>
                    </div>
                    <div className="col-md-12">
                    <Button
                            label={"BOOK YOUR APPOINTMENT"}
                            className={
                              " tw-uppercase tw-mx-auto  tw-text-sm   tw-bg-blue tw-py-1.5  tw-w-60 tw-rounded-sm tw-text-white "
                            }
                          />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4 tw-pt-9 tw-bg-[#F5F8FB]">
              <ul>
                <li className="  tw-w-full">
                  <Link to={'#'} className="tw-text-black tw-text-base  tw-bg-white tw-shadow-lg tw-w-full">APPEAL</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Book_your_appointment;
