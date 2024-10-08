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

const Visit_visa = () => {
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
  const [refusal, setRefusal] = useState("");
  const [depents, setDepents] = useState("");

  const handleSelectChange = (e) => {
    const value = e.target.value;

    if (e.target.name === "personalStatus") {
      setResidencePermit("");
    }

    if (e.target.name === "refusal") {
      setRefusal("");
    }

    switch (e.target.name) {
      case "depents":
        setDepents(value);
        break;
      case "location":
        setLocation(value);
        break;
      case "personalStatus":
        setPersonalStatus(value);
        break;
      case "maritalStatus":
        setMaritalStatus(value);
        break;
      case "refusal":
        setRefusal(value);

        break;
      case "residencePermit":
        setResidencePermit(value);
        break;
      case "personnummer":
        setPersonnummer(value);
        break;
      case "coordinationNumber":
        setCoordinationNumber(value);
        break;
      case "investmentAmount":
        setInvestmentAmount(value);
        break;
      case "separateAssets":
        setSeparateAssets(value);
        break;
      default:
        break;
    }
  };

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
      <Banner_Page title={`VISIT VISA ASSESSMENT`} />
      <section className=" md:tw-mt-36 tw-mt-48">
        <div className="container-fluid ">
          <div className="row   g-5">
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
                        APPLICANT ASSESSMENT
                      </p>
                    </div>

                    <form>
                      <div className="row ">
                        <div className="col-md-6 tw-pt-4">
                          <label className=" tw-text-sm  tw-text-gray ">
                            {" "}
                            Do you have National Passport?
                          </label>
                          <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                            <option>Choose an option </option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>

                        <div className="col-md-6 tw-pt-4">
                          <label className=" tw-text-sm  tw-text-gray ">
                            {" "}
                            Did you visit Schengen Countries before?
                          </label>

                          <select
                            name="personalStatus"
                            value={personalStatus}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                          >
                            <option>Choose an option</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>

                        {personalStatus === "yes" ? (
                          <>
                            <div className="col-md-6 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">
                                How many time you visited the Schengen States?
                              </label>

                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option>Choose an option</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5 or more</option>
                              </select>
                            </div>

                            <div className="col-md-6 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">
                                Purpose of Visit
                              </label>

                              <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                <option value="">Choose an option</option>
                                <option value="Visiting Family Friend">
                                  Visiting Family Friend
                                </option>
                                <option value="Official Trip">
                                  Official Trip
                                </option>
                                <option value="Tourism">Tourism</option>
                                <option value="Business Conference">
                                  Business Conference
                                </option>
                                <option value="Medical Treatment">
                                  Medical Treatment
                                </option>
                                <option value="Other">Other</option>
                              </select>
                            </div>
                          </>
                        ) : null}
                        <div className="col-md-6 tw-pt-4">
                          <label className=" tw-text-sm  tw-text-gray ">
                            {" "}
                            Have you got any refusal for Schengen Countries?
                          </label>

                          <select
                            name="refusal"
                            value={refusal}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                          >
                            <option>Choose an option</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>

                        {refusal === "yes" ? (
                          <>
                            <div className="col-md-6 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">
                                Refusal Month-Year
                              </label>

                              <input
                                type="date"
                                className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                              />
                            </div>

                            <div className="col-md-12 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">
                                Reason of Refusal
                              </label>
                              <textarea className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"></textarea>
                            </div>
                          </>
                        ) : null}

                        <div className="col-md-6 tw-pt-4">
                          <label className=" tw-text-sm  tw-text-gray ">
                            {" "}
                            Is any of your close relative living in Schengen
                            Countries and you want to visit him/her?
                          </label>

                          <select
                            name="residencePermit"
                            value={residencePermit}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                          >
                            <option value="">Choose an option</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>

                        {residencePermit === "yes" ? (
                          <div className="col-md-6 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                              Relation with the EU person( Like Parents,
                              Siblings, Family friend)
                            </label>

                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option value="">Choose an option</option>
                              <option value="Parents">Parents</option>
                              <option value="Husband">Husband</option>
                              <option value="Wife">Wife</option>
                              <option value="Sibling">Sibling</option>
                              <option value="Cousin">Cousin</option>
                              <option value="Family Friend">
                                Family Friend
                              </option>
                            </select>
                          </div>
                        ) : null}

                        <div className="col-md-6 tw-pt-4">
                          <label className=" tw-text-sm  tw-text-gray ">
                            Are you dependent on the person who is living in
                            Schengen Countries?
                          </label>
                          <select
                            name="depents"
                            value={depents}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                          >
                            <option>Choose an option</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>

                        {depents === "yes" ? (
                          <>
                            <div className="col-md-6 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">
                                Describe How?
                              </label>
                              <textarea className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"></textarea>
                            </div>
                          </>
                        ) : null}
                        <div className="col-md-12 tw-pt-4">
                          <label className=" tw-text-sm  tw-text-gray ">
                            Do you have an invitation from any Individual
                            Business Group, Company, Organisation?
                          </label>
                          <select
                            name="separateAssets"
                            value={separateAssets}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                          >
                            <option value="">Choose an option</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>

                        {separateAssets === "yes" ? (
                          <>
                            <div className="col-md-12 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">
                                Details of the Company, Organisation or
                                Association
                              </label>
                              <textarea className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"></textarea>
                            </div>
                          </>
                        ) : null}
                        <div className="col-md-6 tw-pt-4">
                          <label className=" tw-text-sm  tw-text-gray ">
                            Can you support yourself for this trip?
                          </label>
                          <select
                            name="investmentAmount"
                            value={investmentAmount}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                          >
                            <option value="">Choose an option</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                        {investmentAmount === "no" ? (
                          <div className="col-md-3 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                              Funded by Organizer?
                            </label>
                            <select
                              name="coordinationNumber"
                              value={coordinationNumber}
                              onChange={handleSelectChange}
                              className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                            >
                              <option value="">Choose an option</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                        ) : null}

                        {coordinationNumber === "yes" ? (
                          <>
                            <div className="col-md-3 tw-pt-4">
                              <label className=" tw-text-sm  tw-text-gray ">
                                Details of Organizer
                              </label>
                              <textarea className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"></textarea>
                            </div>
                          </>
                        ) : null}

                        <div className="col-md-6 tw-pt-4">
                          <label className=" tw-text-sm  tw-text-gray ">
                            Choose Employee Type?
                          </label>
                          <select
                            name="personnummer"
                            value={personnummer}
                            onChange={handleSelectChange}
                            className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"
                          >
                            <option>Choose an option</option>
                            <option value="Employee">Employee</option>
                            <option value="Self-Employee">Self-Employee</option>
                            <option value="Student">Student</option>
                            <option value="NGO / Media /Sports / Association">
                              NGO / Media /Sports / Association
                            </option>
                          </select>
                        </div>


                        {personnummer==="Student"?
                        <>
                        <div className="row">
                          <div className="col-md-3 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                            Proof of enrolment
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option value="">Choose an option</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div className="col-md-3 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                            Invitation for visit
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                            <option value="">Choose an option</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>

                          <div className="col-md-6 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                            No objection letter from School/College/University
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option value="">Choose an option</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          
                        </div>
                      </>
                      :null}

{personnummer==="Self-Employee"?
                        <>
                        <div className="row">
                          <div className="col-md-4 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                            Registration Certificate
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option value="">Choose an option</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          <div className="col-md-4 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                            Available Assets
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                            <option value="">Choose an option</option>
                              <option value="1 Million $ to 3 Million $">1 Million $ to 3 Million $</option>
                              <option value="3 Million $ to 5 Million $">3 Million $ to 5 Million $</option>
                              <option value="5 Million $ to 10 Million $">5 Million $ to 10 Million $</option>
                              <option value="3 Million $ to 5 Million $">10 Million $ to 20 Million $</option>
                            </select>
                          </div>

                          <div className="col-md-4 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                             Tax Returns of 2 to 3 Years
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option value="">Choose an option</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                          
                        </div>
                      </>
                      :null}

                        {personnummer ===
                        "NGO / Media /Sports / Association" ? (
                          <div className="col-md-12 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                              Please describe NGO / Media /Sports / Association:
                            </label>
                            <textarea className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2"></textarea>
                          </div>
                        ) : null}

                        {personnummer === "Employee" ? (
                          <>
                            <div className="row">
                              <div className="col-md-3 tw-pt-4">
                                <label className=" tw-text-sm  tw-text-gray ">
                                  Nature of Job
                                </label>
                                <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                  <option value="">Choose an option</option>
                                  <option value="Permanent">Permanent</option>
                                  <option value="Temporary">Temporary</option>
                                </select>
                              </div>
                              <div className="col-md-3 tw-pt-4">
                                <label className=" tw-text-sm  tw-text-gray ">
                                  Monthly Salary
                                </label>
                                <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                  <option value="">Choose an option</option>
                                  <option value="Permanent">
                                    0 - 50.000 $
                                  </option>
                                  <option value="50.000 $-75000 $">
                                    50.000 $-75000 $
                                  </option>
                                  <option value="75.000 $- 100.000 $">
                                    75.000 $- 100.000 $
                                  </option>
                                </select>
                              </div>

                              <div className="col-md-3 tw-pt-4">
                                <label className=" tw-text-sm  tw-text-gray ">
                                  Job Contract
                                </label>
                                <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                  <option value="">Choose an option</option>
                                  <option value="yes">Yes</option>
                                  <option value="no">No</option>
                                </select>
                              </div>
                              <div className="col-md-3 tw-pt-4">
                                <label className=" tw-text-sm  tw-text-gray ">
                                  Vacations Letter
                                </label>
                                <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                                  <option value="">Choose an option</option>
                                  <option value="yes">Yes</option>
                                  <option value="no">No</option>
                                </select>
                              </div>
                            </div>
                          </>
                        ) : null}
                      </div>
                    </form>
                  </div>

                  {/* user info */}
                  <div className=" tw-pt-8">
                    <div className="  tw-bg-primary p-3 tw-rounded-md tw-flex tw-items-center tw-text-white">
                      <i class="fa tw-text-white fa-building tw-pt-1"></i>
                      <p className=" m-0 tw-text-white tw-font-semibold">
                        FAMILY DOCUMENTS ASSESSMENT
                      </p>
                    </div>

                    <div className="tw-flex tw-items-center tw-gap-2 tw-pt-3">
                      <input
                        type="checkbox"
                        className="tw-mt-1"
                        checked={isSingle}
                        onChange={handleCheckboxChange}
                      />
                      <p className="tw-text-gray-dark  tw-m-0">
                        I am Visiting Alone
                      </p>
                    </div>

                    {!isSingle && (
                      <form>
                        <div className="row">
                          <div className="col-md-6 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                              Did your Spouse have valid National Passport?
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>Choose an option</option>
                              <option value={"yes"}>Yes</option>
                              <option value={"no"}>No</option>
                            </select>
                          </div>
                          <div className="col-md-6 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                              Did your spouse have Marriage certificate and did
                              your marriage is registered in your home country?
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>Choose an option</option>
                              <option value={"yes"}>Yes</option>
                              <option value={"no"}>No</option>
                            </select>
                          </div>
                          <div className="col-md-8 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                              Do you have Family Registration Certificate?
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option value={"yes"}>Yes</option>
                              <option value={"no"}>No</option>
                            </select>
                          </div>
                          <div className="col-md-12 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                              Do you as main applicant support your family as
                              trip?
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>Choose an option</option>
                              <option value={"yes"}>Yes</option>
                              <option value={"no"}>No</option>
                            </select>
                          </div>
                          <div className="col-md-6 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                              Do you have children?
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>Choose an option</option>
                              <option value={"yes"}>Yes</option>
                              <option value={"no"}>No</option>
                            </select>
                          </div>
                          <div className="col-md-12 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                              If you are not EU citizen, do you have birth
                              certificate of your childrens?
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>Choose an option</option>
                              <option value={"yes"}>Yes</option>
                              <option value={"no"}>No</option>
                            </select>
                          </div>
                          <div className="col-md-12 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                              Does your spouse have any income, Savings?
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>Choose an option</option>
                              <option value={"yes"}>Yes</option>
                              <option value={"no"}>No</option>
                            </select>
                          </div>
                          <div className="col-md-12 tw-pt-4">
                            <label className=" tw-text-sm  tw-text-gray ">
                              Someone else will support you for this trip
                            </label>
                            <select className="tw-outline-none tw-bg-lightGray tw-py-3 tw-text-sm tw-px-3.5 tw-text-gray tw-w-full border tw-rounded-lg mt-2">
                              <option>Choose an option</option>
                              <option value={"yes"}>Yes</option>
                              <option value={"no"}>No</option>
                            </select>
                          </div>
                        </div>
                      </form>
                    )}
                  </div>

                  <Button
                    onClick={openModal}
                    label={"Submit"}
                    className={
                      "  tw-w-full  tw-bg-primary tw-py-3 tw-text-white tw-rounded-xl  tw-mt-10"
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

export default Visit_visa;
