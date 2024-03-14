import React from "react";
import Navbar from "../../components/Header/Navbar";
import Banner_Page from "../../components/Common/Banner_Page";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";
const Rent_out_your_housing = () => {
  return (
    <>
      <Navbar />
      <Banner_Page title={"RENT OUT YOUR HOUSING"} />
      <section className=" md:tw-pt-36 tw-pt-48">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-8">
              <div className=" tw-bg-white tw-pt-8  md:tw-p-14 tw-p-5">
                <div className=" tw-bg-blue tw-text-center tw-rounded-md tw-py-4  px-3">
                  <h6 className=" tw-text-white tw-m-0">
                    {" "}
                    <i class="fa fa-building"></i> FILL UP THE DETAILS OF YOUR
                    HOUSE
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
                        Select Country
                      </label>
                      <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md">
                        <option>Choose Option</option>
                        <option>Sweden - Skane</option>
                        <option>Denmark - Copenhagen</option>
                      </select>
                    </div>
                    <div className=" col-md-6"> </div>
                    <div className="col-md-4">
                      <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Select your type of house
                      </label>
                      <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md">
                        <option>Choose Option</option>
                        <option>Apartment</option>
                        <option>Villa</option>
                        <option>Radhus</option>
                        <option>Shared Rooms</option>
                        <option>Shared Beds</option>
                      </select>
                    </div>

                    <div className="col-md-4">
                      <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Select Floor
                      </label>
                      <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md">
                        <option>Choose Option</option>
                        <option>Basement</option>
                        <option>Ground Floor</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>

                    <div className="col-md-4">
                      <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Total rooms are in the property?
                      </label>
                      <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md">
                        <option>Choose Option</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <Input
                        star={"*"}
                        className={" tw-w-full border"}
                        label={"Housing Area (square meters)?"}
                        placeholder={"Total area in square meters"}
                      />
                    </div>

                    <div className=" tw-bg-blue  tw-rounded-md tw-py-2  px-3">
                      <h6 className=" tw-text-white tw-m-0">
                        BASIC NECESSITIES
                      </h6>
                    </div>

                    <div className="col-md-6">
                      <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Furnished?
                      </label>
                      <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md">
                        <option>Choose Option</option>
                        <option>Yes</option>
                        <option>Partly</option>
                        <option>Flexible</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Is car parking included?
                      </label>
                      <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md">
                        <option>Choose Option</option>
                        <option>Included</option>
                        <option>Not Included</option>
                        <option>N/A</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Are pets allowed?
                      </label>
                      <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md">
                        <option>Choose Option</option>
                        <option>Allowed</option>
                        <option>Not Allowed</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Is smoking allowed?
                      </label>
                      <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md">
                        <option>Choose Option</option>
                        <option>Allowed</option>
                        <option>Not Allowed</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Is electricity included?
                      </label>
                      <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md">
                        <option>Choose Option</option>
                        <option>Included</option>
                        <option>Not Included</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Is lift available?
                      </label>
                      <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md">
                        <option>Choose Option</option>
                        <option>Allowed</option>
                        <option>Not Allowed</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Is internet included?
                      </label>
                      <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md">
                        <option>Choose Option</option>
                        <option>Included</option>
                        <option>Not Included</option>
                      </select>
                    </div>

                    <div className="col-md-6"></div>

                    <div className="col-md-6">
                      <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Is washing machine available?
                      </label>
                      <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md">
                        <option>Choose Option</option>
                        <option>Available</option>
                        <option>Not Available</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Is dishwasher available?
                      </label>
                      <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md">
                        <option>Choose Option</option>
                        <option>Available</option>
                        <option>Not Available</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Is heat & water includes in rent?
                      </label>
                      <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md">
                        <option>Choose Option</option>
                        <option>Available</option>
                        <option>Not Available</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Is balcony/terrace available?
                      </label>
                      <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md">
                        <option>Choose Option</option>
                        <option>Included</option>
                        <option>Not Included</option>
                      </select>
                    </div>




                    <div className=" tw-bg-blue  tw-rounded-md tw-py-2  px-3">
                      <h6 className=" tw-text-white tw-m-0">
                      CONTRACT DETAILS
                      </h6>
                    </div>

                    <div className="col-md-6">
                      <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Select Contract Type?
                      </label>
                      <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md">
                        <option>Choose Option</option>
                        <option>First Hand</option>
                        <option>Second Hand</option>
                        <option>Other</option>
                        <option>N/A</option>
                      </select>
                    </div>
                    

                    <div className="col-md-6">
                      <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Are you looking for deposit?
                      </label>
                      <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md">
                        <option>Choose Option</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Maximum people can stay in this residence?
                      </label>
                      <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md">
                        <option>Choose Option</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        What is the duration of rent out?
                      </label>
                      <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md">
                        <option>Choose Option</option>
                        <option>1 month</option>
                        <option>2 month</option>
                      </select>
                    </div>





                    <div className=" tw-bg-blue  tw-rounded-md tw-py-2  px-3">
                      <h6 className=" tw-text-white tw-m-0">
                      PROPERTY DETAILS & PICTURES
                      </h6>
                    </div>

                    <div className="col-md-6">
                      <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Your Property Type
                      </label>
                      <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md">
                        <option>Choose Option</option>
                        <option>Rental Property</option>
                        <option>Shared Property</option>
                        <option>Own Property</option>
                        
                      </select>
                    </div>
                    

                    <div className="col-md-6">
                    <Input
                        star={"*"}
                         type={'text'}
                        className={" tw-w-full border"}
                        label={"Your Property Address"}
                        placeholder={"Complete Address"}
                      />
                    </div>

                    <div className="col-md-6">
                    <Input
                        star={"*"}
                         type={'file'}
                        className={" tw-w-full border"}
                        label={"Upload Property Pictures"}
                        placeholder={"Total area in square meters"}
                      />
                    </div>



                    <div className=" tw-bg-blue  tw-rounded-md tw-py-2  px-3">
                      <h6 className=" tw-text-white tw-m-0">
                      BANK DETAILS
                      </h6>
                    </div>

                    <div className="col-md-6">
                      <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Select Bank Country
                      </label>
                      <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark tw-w-full border tw-rounded-md">
                        <option>Choose Option</option>
                        <option>Rental Property</option>
                        <option>Shared Property</option>
                        <option>Own Property</option>
                        
                      </select>
                    </div>
                    

                    <div className="col-md-6">
                    <Input
                        star={"*"}
                         type={'text'}
                        className={" tw-w-full border"}
                        label={"Bank Name"}
                        placeholder={""}
                      />
                    </div>

                    <div className="col-md-5">
                    <Input
                        star={"*"}
                         type={''}
                        className={" tw-w-full border"}
                        label={"Branch Code"}
                        placeholder={""}
                      />
                    </div>


                    <div className="col-md-7">
                    <Input
                        star={"*"}
                         type={''}
                        className={" tw-w-full border"}
                        label={"Account No"}
                        placeholder={""}
                      />
                    </div>


                  

                    <div className="col-md-12">
                      <Button
                        label={"SEND REQUEST"}
                        className={
                          " tw-uppercase tw-mx-auto  tw-text-sm   tw-bg-blue tw-py-1.5  tw-w-60 tw-rounded-sm tw-text-white "
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

export default Rent_out_your_housing;
