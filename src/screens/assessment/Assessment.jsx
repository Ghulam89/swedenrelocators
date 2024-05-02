import React from "react";
import Navbar from "../../components/Header/Navbar";
import Banner_Page from "../../components/Common/Banner_Page";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button";
import { GoTriangleRight } from "react-icons/go";
import assess1 from "../../assets/images/BusinessAssessment.png";
import assess2 from "../../assets/images/VisitVisaAssessment.png";
import assess3 from "../../assets/images/StudyAssesmment.png";
import assess4 from "../../assets/images/WorkPermit.png";
import assess5 from "../../assets/images/ass5.png";
import assess6 from "../../assets/images/ass6.png";
import { Link } from "react-router-dom";
const Assessment = () => {
  const data = [
    {
      id: 1,
      title: "Business Visa Assessment",
      image: assess1,
      Icon: <i class="fa fa-building tw-mt-1" aria-hidden="true"></i>,
    },
    {
      id: 2,
      title: "Visit Visa Assessment",
      image: assess2,
      Icon: <i class="fa fa-street-view tw-mt-1" aria-hidden="true"></i>,
    },
    {
      id: 3,
      title: "Study in Sweden Assesmment",
      image: assess3,
      Icon: <i class="fa fa-male tw-mt-1" aria-hidden="true"></i>,
    },
    {
      id: 4,
      title: "Work Permit Assesmment",
      image: assess4,
      Icon: <i class="fa fa-briefcase tw-mt-1" aria-hidden="true"></i>,
    },
    {
      id: 5,
      title: "Family Reunification Assessment",
      image: assess5,
      Icon: <i class="fa fa-users tw-mt-1" aria-hidden="true"></i>,
    },
    {
      id: 6,
      title: "Long Term EU Status Assessment",
      image: assess6,
      Icon: <i class="fa fa-home tw-mt-1" aria-hidden="true"></i>,
    },
  ];





  const data2 = [
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
      <Banner_Page title={" Assessment"} />
      <section className=" md:tw-pt-40 tw-pt-48">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-8 ">
              <div className=" tw-bg-white  md:tw-pl-20 tw-pl-5 md:tw-pr-18 tw-pr-5 tw-pt-14">
                <div className="">
                  <p className=" tw-font-bold tw-text-2xl md:tw-flex tw-block tw-gap-2  tw-text-gray-dark tw-m-0">
                    {" "}
                    <img
                      src={
                        "https://swedenrelocators.se/pages/assets/web/images/background/results.png"
                      }
                      className=" tw-w-10"
                      alt=""
                    />{" "}
                    Check below your Visa or Residence Permit Eligibility
                  </p>

                  <p className=" tw-text-gray tw-pt-3">
                    This tool will help you to find out if you are eligible to
                    apply for Visa or Residence Permit. We made this assessment
                    tool to make sure, If you are eligible for your desired Visa
                    or Residence Permit. In the end of your assesment process
                    you would receive your result. The risk of changes in law
                    refers to the risk of changes that may affect the assessment
                    results.
                  </p>
                  <p className=" tw-text-gray tw-pt-2">
                    Any sort of visa and residence permit for any country are
                    available at lower cost when you apply directly on their
                    official website. Our comprehensive visa and
                    Immigration-Relocation services are provided by Migration
                    Agents who have experience to advise on visa strategy, right
                    documentation and they ensure your application is successful
                    and we charge for our services.
                  </p>
                </div>

                <div className="row tw-py-12">
                  {data?.map((item, index) => {
                    return (
                      <>
                        <div className="col-md-6">
                          <Link to={`/assessment_register/${item?.title}`}   >
                            <img
                              src={item?.image}
                              alt=""
                              className="  tw-mx-auto"
                            />

                            <Button
                              Icons={item?.Icon}
                              className={
                                " hover:tw-bg-blue tw-text-black tw-font-semibold tw-w-full tw-py-3"
                              }
                              label={`${item?.title}`}
                            />
                          </Link>
                        </div>
                      </>
                    );
                  })}
                </div>

                <h6 className=" tw-text-gray tw-mb-3 text-xl">Notes:</h6>

                <div className=" tw-bg-white tw-shadow-lg tw-rounded-md tw-py-4  tw-mb-4  px-3">
                  <p className="  tw-text-gray text-sm tw-m-0">
                    Once you book the appointment you will be able to upload the
                    documents on online portal, If you are in Sweden or Denmark
                    you can visit us in our office.
                  </p>
                </div>

                <div className=" tw-bg-blue tw-rounded-md tw-py-4 tw-mb-12  px-3">
                  <h6 className=" tw-text-white tw-m-0">
                    {" "}
                    <i class="fa fa-calendar"></i>You can be anywhere in the
                    world to apply visa online through our one window visa
                    application system.
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-md-4  tw-pt-16  tw-bg-[#F5FAFF]">
              <div className="  tw-pr-10">
                <ul className=" tw-pl-4 tw-flex tw-flex-col tw-gap-2.5">
                {data2?.map((item, index) => {
                      return (

                        <Link
                          to={`${`/service_details/${item?.title}`}`}
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

export default Assessment;
