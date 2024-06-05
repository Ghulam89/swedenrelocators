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
      Link:""
    },
    {
      id: 2,
      title: "Visit Visa Assessment",
      image: assess2,
      Icon: <i class="fa fa-street-view tw-mt-1" aria-hidden="true"></i>,
      Link:""
    },
    {
      id: 3,
      title: "Study in Sweden Assesmment",
      image: assess3,
      Icon: <i class="fa fa-male tw-mt-1" aria-hidden="true"></i>,
      Link:""
    },
    {
      id: 4,
      title: "Work Permit Assesmment",
      image: assess4,
      Icon: <i class="fa fa-briefcase tw-mt-1" aria-hidden="true"></i>,
      Link:""
    },
    {
      id: 5,
      title: "Family Reunification Assessment",
      image: assess5,
      Icon: <i class="fa fa-users tw-mt-1" aria-hidden="true"></i>,
      Link:""
    },
    {
      id: 6,
      title: "Long Term EU Status Assessment",
      image: assess6,
      Icon: <i class="fa fa-home tw-mt-1" aria-hidden="true"></i>,
      Link:""
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
      Link:'/asylum'
    },
    {
      id: 2,
      title: "Family Reunification",
      description:
        "Family reunification is a recognized reason for the immigration of family members to a country.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-family"></i>
      ),
      Link:'/family-reunification'
    },
    {
      id: 3,
      title: "Personnummer Sweden",
      description:
        "The personal identification is a number that the Swedish Tax Agency assigns to person registered in Sweden.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-14"></i>
      ),

      Link:'/personnumer-sweden'
      
    },
    {
      id: 4,
      title: "CPR Number Denmark",
      description:
        "CPR stands for Det Centrale Personregister, which translates to the Civil Registration System ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-12"></i>
      ),
      Link:'/cpr-number-denmark'
      
    },
    {
      id: 5,
      title: "Work Permit",
      description:
        "Permit To Work refers to management systems used to ensure that work is done safely and efficiently.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-11"></i>
      ),
      Link:'/work-permit'
    },
    {
      id: 5,
      title: "Business Permit",
      description:
        "Swedish business culture is open and innovative, and starting a business there is relatively simple        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-briefcase"></i>
      ),

      Link:'/business-permit'
    
    },
    {
      id: 6,
      title: "Business Visit",
      description:
        "Foreign people who want to invest in Sweden and stay temporarily for that purpose can apply for business visa.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 themifyicon ti-map-alt"></i>
      ),
      
      Link:'/business-visit'
    },
    {
      id: 7,
      title: "Citizenship",
      description:
        "When you have lived in Sweden for a specified period and meet requirements, you can apply for Swedish citizenship.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport"></i>
      ),
      Link:'/citizenship'
      
    
    },
    {
      id: 8,
      title: "Study in EU",
      description:
        "If you are thinking about studying abroad, then visit Sweden. Sweden is well known for its world-class academic opportunities.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-graduation-hat-1"></i>
      ),
      Link:'/study-in-eu'
      
    },
    {
      id: 9,
      title: "Global Visit Visas",
      description:
        "For visiting Sweden for a short period you will need a visit visa. Sweden follows the same visa rules as others.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-travel"></i>
      ),
      Link:'/global-visit-visas'
    },
    {
      id: 10,
      title: "EEA Permits",
      description:
        "Any EU citizen getting residence in the UK according to the EU rules, can bring their family with them.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-contract"></i>
      ),
      Link:'/eea-permits'
    },
    {
      id: 11,
      title: "Parents EU Permit",
      description:
        "Parents of a child under 18 years who is in Sweden can move to sweden if they will live with the child.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-family-1"></i>
      ),
      Link:'/parents-eu-permit'
    },
    {
      id: 12,
      title: "Marriage & Divorce      ",
      description:
        "Getting married is beautiful. But to make sure that it will be a good experience, it is important to have legal control.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-insurance"></i>
      ),
      Link:'/marriage-divorce'
    },
    {
      id: 13,
      title: "Company Registration      ",
      description:
        "If you are planning to register your company inside Sweden, you can reach us anytime if you have some queries about it.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>
      ),
      Link:'/company-registration'
    },
    {
      id: 14,
      title: "House & Offices",
      description:
        "we offer you an easy and painless solution where you can get a place to live without any worries.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>
      ),
      Link:'/house-offices'
    },
    {
      id: 15,
      title: "Appeal Cases",
      description:
        "Have you been denied? let’s take a look at your case so that the decision can hopefully be overturned.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-reading"></i>
      ),
      Link:'/appeal-cases'
    },
    {
      id: 16,
      title: "EU Citizens Relocation",
      description:
        "Family reunification means that a family that has been split up can apply to be allowed to live together.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-passport-3"></i>
      ),
      Link:'/eu-family-reunification'
    },
    {
      id: 17,
      title: "Investment",
      description:
        "There are various opportunities for business ventures, Look for the best opportunity, grab it and do your best.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  fa fa-sitemap"></i>
      ),
      Link:'/investment'
    },
    {
      id: 18,
      title: "Direct Citizenship by Investments      ",
      description:
        "citizenship-by-investment programs provide ultra-wealthy families with the privilege of a second or third passport.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass"></i>
      ),
      Link:'/direct-citizenship-by-investments'
    },
    {
      id: 19,
      title: "Permanent Residence",
      description:
        "If you lived in Sweden for more than 5 years with the EU right of residence you can get the permanent residence permit.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-policy"></i>
      ),
      Link:'/permanent-residence'
    },
    {
      id: 20,
      title: "Golden Visa (Greece - Portugal)      ",
      description:
        "As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>
      ),
      Link:'/golden-visa-greece-portugal'
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
              <div className=" tw-bg-white  md:tw-pl-32 tw-pl-5 md:tw-pr-18 tw-pr-5 tw-pt-14">
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
Check Your Eligibility Before Proceeding with Our Services
                  </p>

                  <p className=" tw-text-gray tw-pt-3">
                  Welcome to our assessment tool designed to determine your eligibility to confirm the basic criteria for relocating to Sweden. We've developed this tool to ensure that you can ascertain your eligibility for your desired Visa or Residence Permit for your relocation. Upon completing the assessment process, you'll receive your result. If the assessment indicates eligibility, you can also download our app and assess your eligibility there as well.

                  </p>
                  <p className=" tw-text-gray tw-pt-2">
                  If the assessment indicates eligibility, simply sign up and book an appointment to discuss further. Even in cases where the result is negative or uncertain, you can still contact us, and we can explore possibilities together.

                  </p>
                  <p className=" tw-text-gray tw-pt-2">
                  Please note that the risk of changes in law pertains to the possibility of legal alterations that may impact the assessment results.

                  </p>
                  <p className=" tw-text-gray tw-pt-2">
                  It's important to mention that any type of visa or residence permit for any country can be obtained at a lower cost when applying directly through their official website. However, if you choose to utilize our services, you'll benefit from our comprehensive visa and immigration relocation services. Our team of Migration/Relocation consultants possesses the expertise to advise you on relocation and immigration strategy, ensure the right documentation is provided, and ultimately, increase the likelihood of a successful application. Please be aware that we charge for our services. You can find all the information on our portal and on the app. Simply write in the message section if you have any further questions or concerns.
                  </p>
                </div>

                <div className="row  g-4 tw-py-12">
                  {data?.map((item, index) => {
                    return (
                      <>
                        <div className="col-md-6">
                          <Link to={`/assessment_register/${item?.title}`}   >
                           <div className="row">

                            <div className="col-md-10 tw-mx-auto">
                            <div className=" tw-h-56">
                            <img
                              src={item?.image}
                              alt=""
                              className="  tw-mx-auto tw-h-full"
                            />
                            </div>

                            </div>

                           </div>
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
              <div className="  md:tw-pr-32  tw-pr-4">
                <ul className=" tw-pl-4 tw-flex tw-flex-col tw-gap-2.5">
                {data2?.map((item, index) => {
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

export default Assessment;
