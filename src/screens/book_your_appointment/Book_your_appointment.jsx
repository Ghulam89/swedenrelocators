import React from "react";
import Navbar from "../../components/Header/Navbar";
import Banner_Page from "../../components/Common/Banner_Page";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";
const Book_your_appointment = () => {
  return (
    <>
      <Navbar />
      <Banner_Page title={"BOOK YOUR APPOINTMENT"} />
      <section className=" md:tw-pt-32 tw-pt-48">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-8">
              <div className=" tw-bg-white tw-pt-8  md:tw-p-14 tw-p-5">
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
                      <textarea
                        rows={6}
                        className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md"
                      ></textarea>
                    </div> 
                     <div className=" tw-flex tw-gap-2 ">
                      <Input  type={'checkbox'}  className={''} />
                      <p className=" tw-text-gray tw-pt-2">I agree to the <Link className=" text-sm">APPOINTMENT TERMS & CONDITIONS</Link></p>
                     </div>
                    <div className="col-md-12">
                     <div className="row tw-items-center">
                      <div className="col-md-6">
                      <Input placeholder={'Do you have a Promo Code?'} className={' tw-border-gray tw-w-full tw-border'} />
                      </div>
                      <div className="col-md-3">
                        <Button label={'APPLY '}  className={' tw-bg-blue tw-mt-1.5 tw-py-1.5 tw-rounded-md text-md tw-w-18 tw-text-white'} />
                      </div>
                     </div>
                    </div>
                    
                    <div className="col-md-12">
                      <Button
                        label={"BOOK YOUR APPOINTMENT"}
                        className={
                          " tw-uppercase tw-mx-auto  tw-text-sm tw-mt-5   tw-bg-blue tw-py-1.5  tw-w-60 tw-rounded-sm tw-text-white "
                        }
                      />
                    </div>
                  </div>
                </form>
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

export default Book_your_appointment;
