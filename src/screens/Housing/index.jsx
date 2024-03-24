import React from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import work from "../../assets/images/how-it-works.png";
import camera from "../../assets/images/camera.png";
import payments from "../../assets/images/security_deposit.png";
import agreement from "../../assets/images/agreement.png";
import rent from "../../assets/images/rent-out-housing.png";
import house from "../../assets/images/looking-for-housing.png";

import { Link } from "react-router-dom";
import Button from "../../components/Button";
const Housing = () => {



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
      <Navbar />
      <Banner_Page title={"HOUSING SOLUTIONS"} />

      <div className=" ">
        <div className="  md:tw-mt-36 tw-mt-44">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-md-8 tw-py-24 tw-bg-white">
                <div className="  md:tw-px-20 tw-px-2">
                  <h4 className=" tw-flex tw-items-center tw-gap-2">
                    <img src={work} alt="" />
                    How It Works
                  </h4>

                  <div className="  housing tw-relative  g-5 row tw-justify-center tw-items-center">
                    <div className=" col-md-5">
                      <div className="row mx-auto">
                        <div className="col-md-11">
                          <div>
                            <h6>Photos</h6>
                            <p className=" tw-text-gray">
                              We took pictures of the residence before teants
                              moves in.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" col-md-5">
                      <div className=" tw-rounded-3xl tw-flex  tw-overflow-hidden tw-h-32">
                        <div className=" tw-bg-[#247FE1]  tw-flex  tw-justify-center tw-items-center tw-h-full tw-w-14">
                          <p className="  fs-4 tw-font-extrabold tw-text-white">
                            {" "}
                            01
                          </p>
                        </div>

                        <div className="  tw-rounded-br-3xl  tw-flex tw-justify-center tw-items-center   tw-rounded-tr-3xl tw-w-44  tw-h-full tw-bg-[#DDDDDD]">
                          <img src={camera} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="   tw-pt-20  housing2 tw-relative  g-5 row tw-justify-center tw-items-center">
                    <div className=" col-md-5">
                      <div className=" tw-rounded-3xl tw-flex  tw-overflow-hidden tw-h-32">
                        <div className=" tw-bg-[#7FB1FF]  tw-flex  tw-justify-center tw-items-center tw-h-full tw-w-14">
                          <p className="  fs-4 tw-font-extrabold tw-text-white">
                            {" "}
                            02
                          </p>
                        </div>

                        <div className="  tw-rounded-br-3xl  tw-flex tw-justify-center tw-items-center   tw-rounded-tr-3xl tw-w-44  tw-h-full tw-bg-[#DDDDDD]">
                          <img src={agreement} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className=" col-md-5">
                      <div className="row mx-auto">
                        <div className="col-md-11">
                          <div>
                            <h6>Rental Agreements</h6>
                            <p className=" tw-text-gray">
                              We write a Rental agreements and make sure
                              payments process will be smooth and secure.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="  tw-pt-20  housing3 tw-relative  g-5 row tw-justify-center tw-items-center">
                    <div className=" col-md-5">
                      <div className="row mx-auto">
                        <div className="col-md-11">
                          <div>
                            <h6>Security Deposit</h6>
                            <p className=" tw-text-gray">
                              We will make sure that your deposit will be return
                              on the date of moving out without any damage of
                              property.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" col-md-5">
                      <div className=" tw-rounded-3xl tw-flex  tw-overflow-hidden tw-h-32">
                        <div className=" tw-bg-[#247FE1]  tw-flex  tw-justify-center tw-items-center tw-h-full tw-w-14">
                          <p className="  fs-4 tw-font-extrabold tw-text-white">
                            {" "}
                            03
                          </p>
                        </div>

                        <div className="  tw-rounded-br-3xl  tw-flex tw-justify-center tw-items-center   tw-rounded-tr-3xl tw-w-44  tw-h-full tw-bg-[#DDDDDD]">
                          <img src={payments} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="   tw-pt-24  housin4 tw-relative  g-5 row tw-justify-center tw-items-center">
                    <div className=" col-md-5">
                      <div className=" tw-rounded-3xl tw-flex  tw-overflow-hidden tw-h-32">
                        <div className=" tw-bg-[#7FB1FF]  tw-flex  tw-justify-center tw-items-center tw-h-full tw-w-14">
                          <p className="  fs-4 tw-font-extrabold tw-text-white">
                            {" "}
                            04
                          </p>
                        </div>

                        <div className="  tw-rounded-br-3xl  tw-flex tw-justify-center tw-items-center   tw-rounded-tr-3xl tw-w-44  tw-h-full tw-bg-[#DDDDDD]">
                          <img src={agreement} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className=" col-md-5">
                      <div className="row mx-auto">
                        <div className="col-md-11">
                          <div>
                            <h6>Service Charges (Tenants)</h6>
                            <p className=" tw-text-gray tw-m-0">
                              We charge one time service charges from tenants
                              for minimum rental period of One year.
                            </p>

                            <p className=" tw-text-gray tw-m-0">
                              1- One Room Apartment 10.000 Kr
                            </p>
                            <p className=" tw-text-gray tw-m-0">
                              2- Two Rooms Apartment 15.000 Kr
                            </p>
                            <p className=" tw-text-gray tw-m-0">
                              3- Three Rooms Apartment 18.000 Kr
                            </p>
                            <p className=" tw-text-gray tw-m-0">
                              4- Four Rooms Apartment 20.000 Kr
                            </p>
                            <p className=" tw-text-gray tw-m-0">
                              5- Five Rooms Apartment 25.000 Kr
                            </p>
                            <p className=" tw-text-gray tw-m-0">
                              (All prices are excluding VAT)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                   
                      <div className="col-md-6 tw-relative">
                        <Link to={`/assessment_register`}>
                          <img src={rent} alt="" className=" tw-mx-auto" />
                          <p className=" tw-text-gray tw-text-center">
                            Here you can advertise your house and we will find
                            right teants for you. You have to pay nothing and
                            you can even get the commission if rental period is
                            more than one Year!
                          </p>
                          <Button
                          Icons={<i class="fa fa-building tw-mt-1" aria-hidden="true"></i>}
                            className={
                              " hover:tw-bg-blue  hover:tw-text-white tw-text-blue tw-font-semibold tw-w-full tw-py-3"
                            }
                            label={` Rent out Your House`}
                          />
                        </Link>
                      </div>
                   
                      <div className="col-md-6">
                        <Link to={`/assessment_register`}>
                          <img src={house} alt="" className=" tw-mx-auto" />
                          <p className=" tw-text-gray tw-text-center">
                          Here you can find all the available housing options & if you find the right one, contact us via My Page. You can send us query through and we will assist you in finding the right place in Skåne & Copenhagen. This service is paid.


                          </p>
                          <Button
                          Icons={<i class="fa fa-home tw-mt-1" aria-hidden="true"></i>}
                            className={
                              " hover:tw-bg-blue hover:tw-text-white tw-text-blue tw-font-semibold tw-w-full tw-py-3"
                            }
                            label={` Available Housing`}
                          />
                        </Link>
                      </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4  tw-pt-16  tw-bg-[#F5FAFF]">
                <div className="  tw-pr-10">
                  <ul className=" tw-pl-4 tw-flex tw-flex-col tw-gap-2.5">

                    {data?.map((item,index)=>{
                      return (

                        <li className="hover-effect tw-rounded-md hover:tw-bg-blue tw-bg-white tw-p-4 tw-shadow-lg tw-flex tw-justify-between tw-items-center hover:tw-text-white">
                        <Link   to={`${`/service_details/${item?.title}`}`} className="m-0 hover:tw-text-white">
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
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Housing;
