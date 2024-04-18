import React, { useEffect, useState } from "react";
import Navbar from "../../components/Header/Navbar";
import Banner_Page from "../../components/Common/Banner_Page";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import san from "../../assets/images/san.webp";
import { GoArrowUpRight } from "react-icons/go";
const Property_Details = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);
  const [modal, setModal] = useState(false);
  const sliders = [san, san, san, san];

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides?.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides?.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  const goToSlide = (index) => {
    setCurr(index);
  };

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
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className=" p-4 tw-bg-white tw-rounded-2xl">
                <div className=" tw-w-full">
                  <div className="tw-overflow-hidden  tw-rounded-2xl tw-relative">
                    <div
                      className="tw-flex tw-transition-transform tw-ease-out tw-duration-500 tw-h-screen	 tw-w-full"
                      style={{ transform: `translateX(-${curr * 100}%)` }}
                    >
                      {/* {sliders?.map((s) => (
    <> */}
                      <div className=" tw-flex-none  tw-w-full tw-h-full tw-relative">
                        <img
                          src={san}
                          alt=""
                          className=" tw-w-full tw-h-full  tw-object-cover"
                        />
                      </div>
                      <div className=" tw-flex-none  tw-w-full tw-h-full tw-relative">
                        <img
                          src={san}
                          alt=""
                          className=" tw-w-full tw-h-full  tw-object-cover"
                        />
                      </div>
                      <div className=" tw-flex-none  tw-w-full tw-h-full tw-relative">
                        <img
                          src={san}
                          alt=""
                          className=" tw-w-full tw-h-full  tw-object-cover"
                        />
                      </div>

                      <div className=" tw-flex-none  tw-w-full tw-h-full tw-relative">
                        <img
                          src={san}
                          alt=""
                          className=" tw-w-full tw-h-full  tw-object-cover"
                        />
                      </div>

                      {/* </>
  ))} */}
                    </div>
                    <div className=" tw-absolute tw-top-6 tw-left-5 tw-gap-4  tw-flex  ">
                      <button
                        onClick={prev}
                        className="tw-p-1.5 tw-rounded-full tw-shadow tw-bg-white/80 tw-text-gray-800 tw-hover:bg-white"
                      >
                        <LiaAngleLeftSolid
                          size={30}
                          className=" tw-text-blue"
                        />
                      </button>
                      <button
                        onClick={next}
                        className="tw-p-1.5 tw-rounded-full tw-shadow tw-bg-white/80 tw-text-gray-800 tw-hover:bg-white"
                      >
                        <LiaAngleRightSolid
                          size={30}
                          className=" tw-text-blue"
                        />
                      </button>
                    </div>

                  </div>
                </div>
              
              </div>
            </div>

            <div className=" col-md-3"></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Property_Details;
