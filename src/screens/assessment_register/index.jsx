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

const Assessment_register = () => {
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

  const [location, setLocation] = useState("");
  const [personalStatus, setPersonalStatus] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [residencePermit, setResidencePermit] = useState("");
  const [personnummer, setPersonnummer] = useState("");
  const [coordinationNumber, setCoordinationNumber] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [separateAssets, setSeparateAssets] = useState("");
  const [depents, setDepents] = useState("");

  const handleDepentsChange = (e) => setDepents(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handlePersonalStatusChange = (e) => setPersonalStatus(e.target.value);
  const handleMaritalStatusChange = (e) => setMaritalStatus(e.target.value);
  const handleResidencePermitChange = (e) => setResidencePermit(e.target.value);
  const handlePersonnummerChange = (e) => setPersonnummer(e.target.value);
  const handleCoordinationNumberChange = (e) =>
    setCoordinationNumber(e.target.value);
  const handleInvestmentAmountChange = (e) =>
    setInvestmentAmount(e.target.value);
  const handleSeparateAssetsChange = (e) => setSeparateAssets(e.target.value);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setFocused(false);
    }
  };

  return (
    <>
      <Navbar />
      <Banner_Page title={`BUSINESS VISA ASSESSMENT`} />
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
                        EDUCATIONAL & BUSINESS BACKGROUND
                      </p>
                    </div>

                    <form>
                      <div className="row ">
                        <div className="col-md-6 tw-pt-4">
                          <select
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg"
                            value={location}
                            onChange={handleLocationChange}
                          >
                            <option value="">Choose an Option</option>
                            <option value="sweden">I am in Sweden</option>
                            <option value="outside">
                              I am outside of Sweden
                            </option>
                          </select>
                        </div>
                        {location === "sweden" && (
                          <>
                            <div className="col-md-6">
                              <select
                                className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg mt-3"
                                value={personalStatus}
                                onChange={handlePersonalStatusChange}
                              >
                                <option value="">Select Personal Status</option>
                                <option value="student">Student</option>
                                <option value="employed">Other</option>
                              </select>
                            </div>

                            {personalStatus === "student" && (
                              <div className="col-md-6">
                                <select
                                  className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg mt-3"
                                  value={maritalStatus}
                                  onChange={handleMaritalStatusChange}
                                >
                                  <option value="">
                                    Select Marital Status
                                  </option>
                                  <option value="single">Single</option>
                                  <option value="married">Married</option>
                                </select>
                              </div>
                            )}

                            {personalStatus === "employed" && (
                              <>
                                <div className="col-md-12">
                                  <select
                                    className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg mt-3"
                                    value={residencePermit}
                                    onChange={handleResidencePermitChange}
                                  >
                                    <option value="">
                                      Do you have any valid residence permit in
                                      Sweden?
                                    </option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                  </select>
                                </div>

                                <div className="col-md-6">
                                  <select
                                    className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg mt-3"
                                    value={personnummer}
                                    onChange={handlePersonnummerChange}
                                  >
                                    <option value="">
                                      Do you have valid Personnummer?
                                    </option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                  </select>
                                </div>

                                {personnummer === "no" && (
                                  <div className="col-md-6">
                                    <select
                                      className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg mt-3"
                                      value={coordinationNumber}
                                      onChange={handleCoordinationNumberChange}
                                    >
                                      <option value="">
                                        Do you have valid Coordination number?
                                      </option>
                                      <option value="yes">Yes</option>
                                      <option value="no">No</option>
                                    </select>
                                  </div>
                                )}

                                <div className="col-md-6">
                                  <select
                                    className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg mt-3"
                                    value={investmentAmount}
                                    onChange={handleInvestmentAmountChange}
                                  >
                                    <option value="">
                                      How much are you planning to invest?
                                    </option>
                                    <option value="less_than_50k">
                                      Less than 50,000 SEK
                                    </option>
                                    <option value="50k_100k">
                                      50,000 - 100,000 SEK
                                    </option>
                                    <option value="more_than_100k">
                                      More than 100,000 SEK
                                    </option>
                                  </select>
                                </div>

                                <div className="col-md-12">
                                  <select
                                    className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg mt-3"
                                    value={separateAssets}
                                    onChange={handleSeparateAssetsChange}
                                  >
                                    <option value="">
                                      Do you have separate assets other than the
                                      investment to support yourself with the
                                      application?
                                    </option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                  </select>
                                </div>
                              </>
                            )}

                            {maritalStatus === "single" && (
                              <>
                                <div className="col-md-6"></div>
                                <div className="col-md-6">
                                  <div className="tw-relative tw-mb-5">
                                    <select className=" tw-block  tw-bg-lightGray tw-border tw-border-gray  tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg mt-3">
                                      <option value="">
                                        * Did you complete your degree in
                                        sweden?
                                      </option>
                                      <option value="yes">Yes</option>
                                      <option value="no">No</option>
                                    </select>
                                    <label
                                      htmlFor={
                                        "Did you complete your degree in sweden?"
                                      }
                                      className={`tw-absolute   tw-text-gray-500 tw-origin-0 tw-bg-white tw-px-1.5 tw-transition-all tw-duration-300 ${
                                        focused
                                          ? "-tw-top-2  tw-text-xs tw-font-medium tw-translate-y-0 tw-left-3 tw-text-blue-600"
                                          : "tw-top-1/2 tw-left-3 tw-text-sm  tw-text-gray tw-translate-y-[-50%]"
                                      }`}
                                    >
                                      Did you complete your degree in sweden?
                                    </label>
                                  </div>
                                </div>

                                <div className="col-md-12">
                                  <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg mt-3">
                                    <option value="">
                                      * Do you have separate assets other than
                                      the investment to support yourself with
                                      the application?
                                    </option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                  </select>
                                </div>
                              </>
                            )}

                            {maritalStatus === "married" && (
                              <>
                                <div className="col-md-6">
                                  <select
                                    className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg mt-3"
                                    value={depents}
                                    onChange={handleDepentsChange}
                                  >
                                    <option value="">
                                      * Dependent / Main Applicant
                                    </option>
                                    <option value="dependent">Dependent</option>
                                    <option value="applicant">
                                      Main Applicant
                                    </option>
                                  </select>
                                </div>
                              </>
                            )}

                            {maritalStatus === "applicant" && (
                              <>
                                <div className="col-md-6">
                                  <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg mt-3">
                                    <option value="">
                                      * Did you complete your degree in sweden?
                                    </option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                  </select>
                                </div>

                                <div className="col-md-12">
                                  <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg mt-3">
                                    <option value="">
                                      * Do you have separate assets other than
                                      the investment to support the family with
                                      the application?
                                    </option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                  </select>
                                </div>
                              </>
                            )}
                          </>
                        )}
                      </div>
                      {location === "outside" && (
                        <>
                          <div className="row">
                            <div className="col-md-6 tw-pt-6">
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg">
                                <option value="">* Education Level</option>
                                <option value="sweden">
                                  Matriculation/Secondary
                                </option>
                                <option value="outside">
                                  Higher Secondary/Intermediate
                                </option>
                                <option value="outside">
                                  Bachelor's / Under Graduate
                                </option>
                                <option value="outside">Masters/M.Phil</option>
                                <option value="outside">Ph.d</option>
                                <option value="outside">Other</option>
                              </select>
                            </div>

                            <div className="col-md-6 tw-pt-6">
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg">
                                <option value="">
                                  * Educational Certificate available
                                </option>
                                <option value="sweden">Yes</option>
                                <option value="outside">No</option>
                              </select>
                            </div>
                            <div className="col-md-12 tw-pt-6">
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg">
                                <option value="">
                                  * Did you have any relevant job or business
                                  experience in any other country?
                                </option>
                                <option value="sweden">Yes</option>
                                <option value="outside">No</option>
                              </select>
                            </div>
                            <div className="col-md-12 tw-pt-6">
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg">
                                <option value="">
                                  * Did you currently owned business in any
                                  other country?
                                </option>
                                <option value="sweden">Yes</option>
                                <option value="outside">No</option>
                              </select>
                            </div>

                            <div className="col-md-6 tw-pt-6">
                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-px-3.5 tw-text-gray-dark tw-w-full border tw-rounded-lg">
                                <option value="">
                                  * Did you owned business in Sweden?
                                </option>
                                <option value="sweden">Yes</option>
                                <option value="outside">No</option>
                              </select>
                            </div>
                          </div>
                        </>
                      )}
                    </form>
                  </div>

                  {/* user info */}
                  <div className=" tw-pt-8">
                    <div className="  tw-bg-primary p-3 tw-rounded-md tw-flex tw-items-center tw-text-white">
                      <i class="fa tw-text-white fa-building tw-pt-1"></i>
                      <p className=" m-0 tw-text-white tw-font-semibold">
                        LANGUAGE SKILLS
                      </p>
                    </div>

                    <form>
                      <div className="row ">
                        <div className="col-md-6 tw-pt-4">
                          {/* <label
                            htmlFor="first_name"
                            className=" tw-block  tw-text-md  tw-pb-2.5 tw-text-gray"
                          >
                            <a className=" tw-text-red-600 tw-font-semibold">
                              *
                            </a>{" "}
                            Do you have English language certificate?
                          </label> */}
                          <select className="tw-outline-none tw-bg-lightGray  tw-py-3.5 tw-px-3   tw-text-gray-dark tw-w-full border tw-rounded-lg">
                            <option>Choose an Option</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                        <div className="col-md-8 tw-pt-4">
                          {/* <label
                            htmlFor="first_name"
                            className=" tw-block  tw-text-md  tw-pb-2.5 tw-text-gray"
                          >
                            <a className=" tw-text-red-600 tw-font-semibold">
                              *
                            </a>{" "}
                            Do you have Swedish Language Certificate?
                          </label> */}
                          <select className="tw-outline-none tw-bg-lightGray  tw-py-3.5 tw-px-3   tw-text-gray-dark tw-w-full border tw-rounded-lg">
                            <option>Choose an Option</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </div>
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

export default Assessment_register;
