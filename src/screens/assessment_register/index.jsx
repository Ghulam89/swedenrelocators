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
import { Link } from "react-router-dom";

const Assessment_register = () => {


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
                            className={" tw-w-full border tw-rounded-xl  tw-py-3 tw-px-3"}
                            label={"Full Name"}
                          />
                        </div>
                        <div className="col-md-6 tw-pt-4">
                          <Input
                            placeholder={"Contact No with Country"}
                            star={"*"}
                            className={" tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl"}
                            label={"Contact No"}
                          />
                        </div>
                        <div className="col-md-6 tw-pt-4">
                          <Input
                            placeholder={"your Address"}
                            star={"*"}
                            className={" tw-w-full border tw-py-3  tw-px-3 tw-rounded-xl"}
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
                          <select className="tw-outline-none tw-bg-lightGray  tw-py-3  tw-px-3 tw-text-gray-dark tw-w-full border tw-rounded-xl">
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
                          <select className="tw-outline-none tw-bg-lightGray  tw-py-3 tw-px-3   tw-text-gray-dark tw-w-full border tw-rounded-xl">
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
                          <select className="tw-outline-none tw-bg-lightGray  tw-py-3 tw-px-3   tw-text-gray-dark tw-w-full border tw-rounded-xl">
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
                      "  tw-w-full tw-bg-blue tw-py-3 tw-text-white tw-rounded-xl  tw-mt-10"
                    }
                  />
                </div>
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

export default Assessment_register;
