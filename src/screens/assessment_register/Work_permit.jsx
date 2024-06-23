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
import { Link, useParams } from "react-router-dom";
import Assessment_modal from "./Assessment_modal";

const Work_permit = () => {
  const { id } = useParams();

  const data = [
    {
      id: 1,
      title: "Asylum",
      description:
        "You have to be in Sweden or on the Swedish border in order to apply for asylum.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-home"></i>
      ),
      Link: "/asylum",
    },
    {
      id: 2,
      title: "Family Reunification",
      description:
        "Family reunification is a recognized reason for the immigration of family members to a country.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-family"></i>
      ),
      Link: "/family-reunification",
    },
    {
      id: 3,
      title: "Personnummer Sweden",
      description:
        "The personal identification is a number that the Swedish Tax Agency assigns to person registered in Sweden.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-14"></i>
      ),

      Link: "/personnumer-sweden",
    },
    {
      id: 4,
      title: "CPR Number Denmark",
      description:
        "CPR stands for Det Centrale Personregister, which translates to the Civil Registration System ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-12"></i>
      ),
      Link: "/cpr-number-denmark",
    },
    {
      id: 5,
      title: "Work Permit",
      description:
        "Permit To Work refers to management systems used to ensure that work is done safely and efficiently.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-11"></i>
      ),
      Link: "/work-permit",
    },
    {
      id: 5,
      title: "Business Permit",
      description:
        "Swedish business culture is open and innovative, and starting a business there is relatively simple        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-briefcase"></i>
      ),

      Link: "/business-permit",
    },
    {
      id: 6,
      title: "Business Visit",
      description:
        "Foreign people who want to invest in Sweden and stay temporarily for that purpose can apply for business visa.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 themifyicon ti-map-alt"></i>
      ),

      Link: "/business-visit",
    },
    {
      id: 7,
      title: "Citizenship",
      description:
        "When you have lived in Sweden for a specified period and meet requirements, you can apply for Swedish citizenship.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport"></i>
      ),
      Link: "/citizenship",
    },
    {
      id: 8,
      title: "Study in EU",
      description:
        "If you are thinking about studying abroad, then visit Sweden. Sweden is well known for its world-class academic opportunities.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-graduation-hat-1"></i>
      ),
      Link: "/study-in-eu",
    },
    {
      id: 9,
      title: "Global Visit Visas",
      description:
        "For visiting Sweden for a short period you will need a visit visa. Sweden follows the same visa rules as others.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-travel"></i>
      ),
      Link: "/global-visit-visas",
    },
    {
      id: 10,
      title: "EEA Permits",
      description:
        "Any EU citizen getting residence in the UK according to the EU rules, can bring their family with them.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-contract"></i>
      ),
      Link: "/eea-permits",
    },
    {
      id: 11,
      title: "Parents EU Permit",
      description:
        "Parents of a child under 18 years who is in Sweden can move to sweden if they will live with the child.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-family-1"></i>
      ),
      Link: "/parents-eu-permit",
    },
    {
      id: 12,
      title: "Marriage & Divorce      ",
      description:
        "Getting married is beautiful. But to make sure that it will be a good experience, it is important to have legal control.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-insurance"></i>
      ),
      Link: "/marriage-divorce",
    },
    {
      id: 13,
      title: "Company Registration      ",
      description:
        "If you are planning to register your company inside Sweden, you can reach us anytime if you have some queries about it.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>
      ),
      Link: "/company-registration",
    },
    {
      id: 14,
      title: "House & Offices",
      description:
        "we offer you an easy and painless solution where you can get a place to live without any worries.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>
      ),
      Link: "/house-offices",
    },
    {
      id: 15,
      title: "Appeal Cases",
      description:
        "Have you been denied? let’s take a look at your case so that the decision can hopefully be overturned.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-reading"></i>
      ),
      Link: "/appeal-cases",
    },
    {
      id: 16,
      title: "EU Citizens Relocation",
      description:
        "Family reunification means that a family that has been split up can apply to be allowed to live together.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-passport-3"></i>
      ),
      Link: "/eu-family-reunification",
    },
    {
      id: 17,
      title: "Investment",
      description:
        "There are various opportunities for business ventures, Look for the best opportunity, grab it and do your best.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  fa fa-sitemap"></i>
      ),
      Link: "/investment",
    },
    {
      id: 18,
      title: "Direct Citizenship by Investments      ",
      description:
        "citizenship-by-investment programs provide ultra-wealthy families with the privilege of a second or third passport.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass"></i>
      ),
      Link: "/direct-citizenship-by-investments",
    },
    {
      id: 19,
      title: "Permanent Residence",
      description:
        "If you lived in Sweden for more than 5 years with the EU right of residence you can get the permanent residence permit.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-policy"></i>
      ),
      Link: "/permanent-residence",
    },
    {
      id: 20,
      title: "Golden Visa (Greece - Portugal)      ",
      description:
        "As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>
      ),
      Link: "/golden-visa-greece-portugal",
    },
  ];

  const [workCategory, setWorkCategory] = useState("");

  const handleWorkCategoryChange = (e) => setWorkCategory(e.target.value);
 

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [isSingle, setIsSingle] = useState(true);

  const handleCheckboxChange = () => {
    setIsSingle(!isSingle);
  };

  return (
    <>
      <Navbar />
      <Banner_Page title={`WORK PERMIT ASSESSMENT`} />
      <section className=" md:tw-mt-36 tw-mt-48">
        <div className="container-fluid ">
          <div className="row g-5">
            <div className="col-md-8    tw-py-10 tw-bg-white">
              <div className="row tw-pt-6  md:tw-pl-32 tw-pl-3">
                <div className="col-lg-12">
                  {/* user info */}
                  <div>
                    <div className="  tw-bg-primary p-3 tw-rounded-md tw-flex tw-items-center tw-text-white">
                      <i class="fa fa-user"></i>
                      <p className=" m-0 tw-text-white tw-font-semibold">
                        PERSONAL DETAILS
                      </p>
                    </div>

                    <Assessment_modal
                      isModalOpen={isModalOpen}
                      setIsModalOpen={setIsModalOpen}
                      // setUsers={setUsers}
                    />

                    <form>
                      <div className="row ">
                        <div className="col-md-6 tw-pt-4">
                          <Input
                            placeholder={"You Full Name"}
                            star={"*"}
                            className={
                              " tw-w-full border tw-rounded-lg  tw-py-3.5 tw-px-3"
                            }
                            label={"Full Name"}
                          />
                        </div>
                        <div className="col-md-6 tw-pt-4">
                          <Input
                            placeholder={"Contact No with Country"}
                            star={"*"}
                            className={
                              " tw-w-full border tw-py-3.5 tw-px-3 tw-rounded-lg"
                            }
                            label={"Contact No"}
                          />
                        </div>
                        <div className="col-md-6 tw-pt-4">
                          <Input
                            placeholder={"your Address"}
                            star={"*"}
                            className={
                              " tw-w-full border tw-py-3.5  tw-px-3 tw-rounded-lg"
                            }
                            label={"Your Email"}
                          />
                        </div>
                      </div>
                    </form>
                  </div>

                  {/* user info */}
                  <div className=" tw-pt-8">
                    <div className="  tw-bg-primary p-3 tw-rounded-md tw-flex tw-items-center tw-text-white">
                      <i class="fa tw-text-white fa-building tw-pt-1"></i>
                      <p className=" m-0 tw-text-white tw-font-semibold">
                      WORK PERMIT CATEGORIES
                      </p>
                    </div>

                    <form>
                      <div className="row ">
                        <div className="col-md-6 tw-pt-4">
                          <select
                           value={workCategory}
                           onChange={handleWorkCategoryChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg"
                                                      >
                            <option value="">Select Category</option>
                            <option value="WORK PERMIT OUTSIDE OF SWEDEN">WORK PERMIT OUTSIDE OF SWEDEN</option>
                            <option value="AU PAIR">AU PAIR</option>
                            <option value="WORKING HOLIDAYS">WORKING HOLIDAYS</option>
                            <option value="ASYLUM - WORK PERMIT">ASYLUM - WORK PERMIT</option>
                            <option value="STUDENT - WORK PERMIT">STUDENT - WORK PERMIT</option>
                            <option value="EU LONG TERM RESIDENCE/PERMANENT RESIDENCE">EU LONG TERM RESIDENCE/PERMANENT RESIDENCE</option>
                          </select>
                        </div>

                      </div>

                      {workCategory==="WORK PERMIT OUTSIDE OF SWEDEN" && (
                        <div className=" row">
                            <div className="col-md-12">
                            <div className="  tw-mt-4  tw-bg-primary p-3 tw-rounded-md tw-flex tw-items-center tw-text-white">
                      <i class="fa tw-text-white fa-building tw-pt-1"></i>
                      <p className=" m-0 tw-text-white tw-font-semibold">
                      EDUCATIONAL BACKGROUND
                      </p>
                    </div>
                            </div>
                              <div className="col-md-6 tw-pt-4">
                          <select
                           
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg"
                                                      >
                            <option value="">Education Level</option>
                            <option value="Matriculation/Secondary">Matriculation/Secondary</option>
                            <option value="Higher Secondary/Intermediate">Higher Secondary/Intermediate</option>
                            <option value="Bachelor's / Under Graduate">Bachelor's / Under Graduate</option>
                            <option value="Masters/M.Phil">Masters/M.Phil</option>
                            <option value="Ph.d">Ph.d</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <div className="col-md-6 tw-pt-4">
                          <select
                           
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg"
                                                      >
                            <option value="">Educational Certificate available</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            
                          </select>
                        </div>
                        <div className="col-md-12">
                            <div className="  tw-mt-4  tw-bg-primary p-3 tw-rounded-md tw-flex tw-items-center tw-text-white">
                      <i class="fa tw-text-white fa-building tw-pt-1"></i>
                      <p className=" m-0 tw-text-white tw-font-semibold">
                      WORK EXPERIENCE IN YOUR FIELD
                      </p>
                    </div>
                            </div>
                              <div className="col-md-6 tw-pt-4">
                          <select
                           
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg"
                                                      >
                            <option value="">Did you have a job experience?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                           
                          </select>
                        </div>

                        <div className=" col-md-6"></div>

                        <div className="col-md-6 tw-pt-4">
                          <select
                           
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg"
                                                      >
                            <option value="">Experience Certificate available</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            
                          </select>
                        </div>



                        <div className="col-md-12">
                            <div className="  tw-mt-4  tw-bg-primary p-3 tw-rounded-md tw-flex tw-items-center tw-text-white">
                      <i class="fa tw-text-white fa-building tw-pt-1"></i>
                      <p className=" m-0 tw-text-white tw-font-semibold">
                      ARE YOU APPLYING FOR YOUR FAMILY?
                      </p>
                    </div>
                            </div>
                              <div className="col-md-12 tw-pt-4">
                          <select
                           
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg"
                                                      >
                            <option value="">Do you have savings or assets in case if your salary is lower than requirements?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                           
                          </select>
                        </div>

                        <div className="col-md-12 tw-pt-4">
                          <select
                           
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg"
                                                      >
                            <option value="">Have you applied any sort of Schengen visa or residence permit in past 2 years and got rejected?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            
                          </select>
                        </div>
                        </div>
                      )}


                      {workCategory==="AU PAIR" && (
                        <div className="row">
                            <div className="col-md-12">
                            <div className="  tw-mt-4  tw-bg-primary p-3 tw-rounded-md tw-flex tw-items-center tw-text-white">
                      <i class="fa tw-text-white fa-building tw-pt-1"></i>
                      <p className=" m-0 tw-text-white tw-font-semibold">
                      AU PAIR
                      </p>
                    </div>
                            </div>
                              <div className="col-md-6 tw-pt-4">
                          <select
                           
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg"
                                                      >
                            <option value="">Are you single?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                           
                          </select>
                        </div>

                        <div className="col-md-6 tw-pt-4">
                          <select
                           
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg"
                                                      >
                            <option value="">Are you between 18 and 30 years?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            
                          </select>
                        </div>
                        <div className="col-md-12 tw-pt-4">
                          <select
                           
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg"
                                                      >
                            <option value="">Do you have a Proof that you have signed or applied for a health insurance policy?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            
                          </select>
                        </div>
                        <div className="col-md-12 tw-pt-4">
                          <select
                           
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg"
                                                      >
                            <option value="">Are you able to show that you have a distinct interest in or use for Swedish language studies?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            
                          </select>
                        </div>
                        <div className="col-md-12 tw-pt-4">
                          <select
                           
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg"
                                                      >
                            <option value="">Do you have a certificate of admission/Offer Letter to the course of study concerned?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            
                          </select>
                        </div>
                        <div className="col-md-12 tw-pt-4">
                          <select
                           
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg"
                                                      >
                            <option value="">Do you have a written invitation from your host family in Sweden stating the terms and Terms and Conditions</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            
                          </select>
                        </div>
                        <div className="col-md-12 tw-pt-4">
                          <select
                           
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg"
                                                      >
                            <option value="">Will you Study for 15 hours a week or the time for housework and studies will not exceed 40 hours per week?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            
                          </select>
                        </div>
                        </div>
                      )}


{workCategory==="WORKING HOLIDAYS" && (
                        <div className="row">
                            <div className="col-md-12">
                            <div className="  tw-mt-4  tw-bg-primary p-3 tw-rounded-md tw-flex tw-items-center tw-text-white">
                      <i class="fa tw-text-white fa-building tw-pt-1"></i>
                      <p className=" m-0 tw-text-white tw-font-semibold">
                      WORKING HOLIDAYS
                      </p>
                    </div>
                            </div>
                              <div className="col-md-6 tw-pt-4">
                          <select
                           
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg"
                                                      >
                            <option value="">Are you single?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                           
                          </select>
                        </div>

                        <div className="col-md-12 tw-pt-4">
                          <select
                           
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg"
                                                      >
                            <option value="">Are you citizens of Argentina, Australia, Chile, Hong Kong, Canada, New Zealand, South Korea or Uruguay?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            
                          </select>
                        </div>
                        <div className="col-md-12 tw-pt-4">
                          <select
                           
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg"
                                                      >
                            <option value="">Do you have money so that you can support yourself during the first year in Sweden (atleaet 15000 SEK) ?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            
                          </select>
                        </div>
                        <div className="col-md-12 tw-pt-4">
                          <select
                           
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg"
                                                      >
                            <option value="">Do you Have a return ticket or enough money to buy one?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            
                          </select>
                        </div>
                        <div className="col-md-12 tw-pt-4">
                          <select
                           
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg"
                                                      >
                            <option value="">Do you have a comprehensive health insurance that applies to care in Sweden?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            
                          </select>
                        </div>
                        
                        </div>
                      )}



{workCategory==="ASYLUM - WORK PERMIT" && (
                        <div className="row">
                            <div className="col-md-12">
                            <div className="  tw-mt-4  tw-bg-primary p-3 tw-rounded-md tw-flex tw-items-center tw-text-white">
                      <i class="fa tw-text-white fa-building tw-pt-1"></i>
                      <p className=" m-0 tw-text-white tw-font-semibold">
                      ASYLUM WORK PERMIT
                      </p>
                    </div>
                            </div>
                              <div className="col-md-6 tw-pt-4">
                          <select
                           
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg"
                                                      >
                            <option value="">Did you already worked in Sweden before applying the asylum?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                           
                          </select>
                        </div>

                        
                        
                        </div>
                      )}


{workCategory==="STUDENT - WORK PERMIT" && (
                        <div className="row">
                            <div className="col-md-12">
                            <div className="  tw-mt-4  tw-bg-primary p-3 tw-rounded-md tw-flex tw-items-center tw-text-white">
                      <i class="fa tw-text-white fa-building tw-pt-1"></i>
                      <p className=" m-0 tw-text-white tw-font-semibold">
                      STUDENT & WORK PERMIT
                      </p>
                    </div>
                            </div>
                              <div className="col-md-8 tw-pt-4">
                          <select
                           
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg"
                                                      >
                            <option value="">Are you studying in Sweden and have gotten a job offer?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                           
                          </select>
                        </div>

                        <div className="col-md-5 tw-pt-4">
                     
                        <select
                           
                           className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg"
                                                     >
                           <option value="">   Are you currently working in Sweden?</option>
                           <option value="yes">Yes</option>
                           <option value="no">No</option>
                          
                         </select>
                        </div>
                        <div className="col-md-5 tw-pt-4">
                     
                        <select
                           
                           className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg"
                                                     >
                           <option value="">   Is this your first work permit in Sweden?</option>
                           <option value="yes">Yes</option>
                           <option value="no">No</option>
                          
                         </select>
                        </div>

                        
                        
                        </div>
                      )}
                    </form>
                  </div>


                  <Button
                    onClick={openModal}
                    label={"Submit"}
                    className={
                      "  tw-w-full tw-bg-blue tw-py-3 tw-text-white tw-rounded-xl  tw-mt-10"
                    }
                  />
                </div>
              </div>
            </div>

            <div className="col-md-4  tw-pt-16  tw-bg-[#F5FAFF]">
              <div className="  md:tw-pr-28 tw-pr-4">
                <ul className=" tw-pl-4 tw-flex tw-flex-col tw-gap-2.5">
                  {data?.map((item, index) => {
                    return (
                      <Link
                        to={`${item?.Link}`}
                        className="hover-effect tw-rounded-md hover:tw-bg-blue tw-bg-white tw-p-4 tw-shadow-lg tw-flex tw-justify-between tw-items-center hover:tw-text-white"
                      >
                        <p className="m-0 tw-text-gray-dark tw-font-semibold hover:tw-text-white">
                          {item?.title}
                        </p>
                        <GoTriangleRight className="tw-text-gray" />
                      </Link>
                    );
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

export default Work_permit;
