import React from "react";
import Navbar from "../../components/Header/Navbar";
import Banner_Page from "../../components/Common/Banner_Page";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";
const Rent_out_your_housing = () => {


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
      title: "Direct Citizenship ",
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
      title: "Golden Visa    ",
      description:
        "As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>
      ),
    },
  ];

  
  return (
    <>
      <Navbar />
      <Banner_Page title={"RENT OUT YOUR HOUSING"} />
      <section className=" md:tw-pt-40 tw-pt-48">
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
                      <select className="tw-outline-none tw-bg-lightGray   tw-text-gray-dark  border   tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl">
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
                      <select className="tw-outline-none tw-bg-lightGray   tw-text-gray-dark  border   tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl">
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
                      <select className="tw-outline-none tw-bg-lightGray   tw-text-gray-dark  border   tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl">
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
                      <select className="tw-outline-none tw-bg-lightGray   tw-text-gray-dark  border   tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl">
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
                        className={" tw-w-full border  tw-py-3 tw-rounded-xl tw-px-2"}
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
                      <select className="tw-outline-none tw-bg-lightGray   tw-text-gray-dark  border   tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl">
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
                      <select className="tw-outline-none tw-bg-lightGray   tw-text-gray-dark  border   tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl">
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
                      <select className="tw-outline-none tw-bg-lightGray   tw-text-gray-dark  border   tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl">
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
                      <select className="tw-outline-none tw-bg-lightGray   tw-text-gray-dark  border   tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl">
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
                      <select className="tw-outline-none tw-bg-lightGray   tw-text-gray-dark  border   tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl">
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
                      <select className="tw-outline-none tw-bg-lightGray   tw-text-gray-dark  border   tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl">
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
                      <select className="tw-outline-none tw-bg-lightGray   tw-text-gray-dark  border   tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl">
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
                      <select className="tw-outline-none tw-bg-lightGray   tw-text-gray-dark  border   tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl">
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
                      <select className="tw-outline-none tw-bg-lightGray   tw-text-gray-dark  border   tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl">
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
                      <select className="tw-outline-none tw-bg-lightGray   tw-text-gray-dark  border   tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl">
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
                      <select className="tw-outline-none tw-bg-lightGray   tw-text-gray-dark  border   tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl">
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
                      <select className="tw-outline-none tw-bg-lightGray   tw-text-gray-dark  border   tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl">
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
                      <select className="tw-outline-none tw-bg-lightGray   tw-text-gray-dark  border   tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl">
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
                      <select className="tw-outline-none tw-bg-lightGray   tw-text-gray-dark  border   tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl">
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
                      <select className="tw-outline-none tw-bg-lightGray   tw-text-gray-dark  border   tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl">
                        <option>Choose Option</option>
                        <option>Rental Property</option>
                        <option>Shared Property</option>
                        <option>Own Property</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <Input
                        star={"*"}
                        type={"text"}
                        className={" tw-w-full border tw-py-2.5 tw-px-3 "}
                        label={"Your Property Address"}
                        placeholder={"Complete Address"}
                      />
                    </div>

                    <div className="col-md-6">
                      <Input
                        star={"*"}
                        type={"file"}
                        className={" tw-w-full border tw-py-2.5 tw-px-3 "}
                        label={"Upload Property Pictures"}
                        placeholder={"Total area in square meters"}
                      />
                    </div>

                    <div className=" tw-bg-blue  tw-rounded-md tw-py-2  px-3">
                      <h6 className=" tw-text-white tw-m-0">BANK DETAILS</h6>
                    </div>

                    <div className="col-md-6">
                      <label
                        htmlFor="first_name"
                        className=" tw-block  tw-text-md  tw-pb-2 tw-text-gray"
                      >
                        <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                        Select Bank Country
                      </label>
                      <select className="tw-outline-none tw-bg-lightGray  tw-p-3   tw-text-gray-dark tw-w-full border tw-rounded-xl">
                        <option>Choose Option</option>
                        <option>Rental Property</option>
                        <option>Shared Property</option>
                        <option>Own Property</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <Input
                        star={"*"}
                        type={"text"}
                        className={" tw-w-full border tw-py-2.5 tw-px-3 "}
                        label={"Bank Name"}
                        placeholder={""}
                      />
                    </div>

                    <div className="col-md-5">
                      <Input
                        star={"*"}
                        type={""}
                        className={" tw-w-full border tw-py-2.5 tw-px-3 "}
                        label={"Branch Code"}
                        placeholder={""}
                      />
                    </div>

                    <div className="col-md-7">
                      <Input
                        star={"*"}
                        type={""}
                        className={" tw-w-full border tw-py-2.5 tw-px-3 "}
                        label={"Account No"}
                        placeholder={""}
                      />
                    </div>

                    <div className="col-md-12">
                      <Button
                        label={"SEND REQUEST"}
                        className={
                          " tw-uppercase tw-mx-auto  tw-text-sm   tw-bg-blue tw-py-3   tw-w-full tw-rounded-xl  tw-text-white "
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
                {data?.map((item,index)=>{
                      return (

                        <li className="hover-effect tw-rounded-md hover:tw-bg-blue tw-bg-white tw-p-4 tw-shadow-lg tw-flex tw-justify-between tw-items-center hover:tw-text-white">
                        <Link to={`${`/service_details/${item?.title}`}`} className="m-0 hover:tw-text-white">
                          <p className="m-0 tw-text-gray-dark tw-font-semibold hover:tw-text-white">
                           {item?.title}
                          </p>
                        </Link>
                        <GoTriangleRight className="tw-text-gray" />
                      </li>

                      )
                    })}
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
