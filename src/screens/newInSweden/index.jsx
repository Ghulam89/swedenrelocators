import React from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import mobile from "../../assets/images/business-person-opening-bank-account.png";
import mobile2 from "../../assets/images/family-doctor-consultation.png";
import mobile3 from "../../assets/images/girl-purchased-car-insurance.png";
import { GoTriangleRight } from "react-icons/go";
import { Link } from "react-router-dom";
const New_In_sweden = () => {
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
      <Banner_Page title={"NEW IN SWEDEN"} />

      <div className=" ">
        <section className="  md:tw-mt-36 tw-mt-44">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-md-8 tw-py-20 tw-bg-white">
                <div className="  md:tw-px-20 tw-px-2">
                  <span>SOCIAL SECURITY NUMBER</span>
                  <h2>
                    <strong>Personnummer</strong>
                  </h2>

                  <p className=" tw-text-gray">
                    If you are new in Sweden then the first thing you must to do
                    is to register yourself with swedish tax authority
                    ‘Skatteverket’ to get your social security number also
                    called as personal identity number or personnummer. As an
                    EU/EEA-citizen you are entitled to live, work and study in
                    Sweden with or without a personnummer.
                  </p>
                  <p className=" tw-text-gray">
                    It is a 12-digit number issued by Skatteverket to the
                    persons registered in Sweden when they are convinced that
                    you can support yourself and your family during the first
                    year of your stay.
                  </p>
                  <p className=" tw-text-gray">
                    Personnummer is not only required to be a part of the social
                    security and health care systems in Sweden, which is
                    otherwise quite expensive to arrange through private
                    insurance companies, but is often used as identification
                    proof at all government offices, banks, insurances,
                    subscriptions, collection of postal items at the post office
                    etc.
                  </p>

                  <div>
                    <span>TAKE</span>
                    <h2>
                      <strong>All These Into Consideration</strong>
                    </h2>

                    <ul className=" tw-p-0 tw-pt-4">
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          Employment contract(s),
                        </p>
                      </li>
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          Proof of savings ex. Bank statement.
                        </p>
                      </li>
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          Number of members in the family
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          Place of residence(must be in Sweden). You can NOT
                          apply for a personnummer while still living abroad.
                          Neither is a holiday address enough. You must have a
                          residential address in Sweden.
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          You need to go in person (all the persons in the
                          family) to an office of Skatteverket to apply for a
                          personnummer.
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          A legal ID-certificate, preferably a passport for
                          every person applying.
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <span>IDENTIFICATION CARD</span>
                    <h2>
                      <strong>Swedish ID Card</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      Once you have received your Social Security number, you
                      need to book an appointment with Swedish tax
                      authority-Skatteverket to apply for a Swedish ID card.
                    </p>
                    <p className=" tw-text-gray">
                      Anyone who is at least 13 years old and registered for
                      population purposes in Sweden may apply to the Swedish Tax
                      Agency for Swedish ID card. You must be able to identify
                      yourself, in other words prove who you are, with approved
                      ID documentation or via an attester.
                    </p>
                  </div>

                  <div>
                    <span>OPENING OF A</span>
                    <h2>
                      <strong>Bank Account</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      <strong>General requirements:</strong>
                    </p>

                    <p className=" tw-text-gray">
                      In order to open a bank account, you must always be able
                      to identify yourself.
                    </p>

                    <ul className=" tw-p-0 tw-pt-4">
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          You can identify yourself with a valid Swedish
                          identification document, such as a passport, a
                          national identity card or a BankID. You can also
                          identify yourself with a Swedish driving license.
                        </p>
                      </li>
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          If you do not have Swedish identification documents,
                          you can identify yourself with a valid foreign
                          passport or other photo identification document that
                          clearly shows your citizenship and is issued by an
                          authority or some other authorised issuer. Note that
                          the bank may request that you also present other
                          documents.
                        </p>
                      </li>
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          If you do not have any valid identity documents, you
                          must be able to prove who you are and your citizenship
                          by means of other documents issued by a competent
                          authority.
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <span>OPENING OF A</span>
                    <h2>
                      <strong>Bank Account</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      <strong>Specific requirements:</strong>
                    </p>

                    <p className=" tw-text-gray">
                      If you are a foreign student and willing to open a bank
                      account, you must also be able to identify yourself like
                      all others. In addition, you need
                    </p>

                    <div className="row">
                      <div className=" col-md-6">
                        <img src={mobile} className="" alt="" />
                      </div>
                      <div className=" col-md-6">
                        <ul className=" tw-p-0 tw-pt-4">
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">
                              A residence permit or a visa (does not apply to EU
                              citizens).
                            </p>
                          </li>
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">
                              An admission decision confirmation from your
                              university, showing the duration of your studies.
                            </p>
                          </li>
                        </ul>
                      </div>

                      <div className="col-md-12">
                        <ul className=" tw-p-0 tw-pt-4">
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">
                              The bank is not satisfied with the identity
                              document submitted.
                            </p>
                          </li>
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">
                              The bank determines that the reason given by you
                              to open an account is inadequate.
                            </p>
                          </li>
                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">
                              The bank, by opening an account, would be in
                              breach of a legal regulation or directive.
                            </p>
                          </li>

                          <li className=" tw-flex tw-items-center tw-gap-3">
                            <GoTriangleRight className=" tw-text-blue" />
                            <p className=" m-0 tw-text-gray">
                              You have previously acted dishonestly towards the
                              bank.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span>BEFORE</span>
                    <h2>
                      <strong>Visiting A Bank …</strong>
                    </h2>

                    <ul className=" tw-p-0 tw-pt-4">
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          You must be able to understand the bank’s questions as
                          well as answer them.
                        </p>
                      </li>
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          You must also be able to understand the information
                          that the bank gives you.
                        </p>
                      </li>
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          In case you need someone to translate for you then you
                          should bring such a person with you while visiting the
                          bank.
                        </p>
                      </li>

                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          The bank will ask you about the source of income.
                        </p>
                      </li>

                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          Your account and other bank services must not be used
                          by anyone else unless an agreement for this is held
                          with the bank.
                        </p>
                      </li>

                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          The bank may ask you additional questions or stipulate
                          other requirements.
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className=" tw-pt-6">
                    <span>HOW TO GET A</span>
                    <h2>
                      <strong> Driving License</strong>
                    </h2>

                    <div className="row">
                      <div className=" col-md-6">
                        <img src={mobile3} className="" alt="" />
                      </div>
                      <div className=" col-md-6">
                        <p className=" m-0 tw-text-gray">
                          In case you have a driving license issued by any EU
                          country then it is valid throughout your stay in
                          Sweden. You can even exchange your driving license
                          with a Swedish license if you have permanent
                          residence(PR).
                        </p>

                        <p className=" m-0 tw-text-gray">
                          A driving license which is issued by any non-EEA
                          country (excluding Switzerland and Japan) is valid for
                          maximum one year in Sweden. It cannot be exchanged
                          with a Swedish license. So if you want to continue
                          driving in Sweden you must avail a swedish driving
                          licence. For which you will have to complete the risk
                          education, theoritical and practical driving exam.
                        </p>
                      </div>
                    </div>
                    <p className=" tw-text-gray tw-pt-6">
                      <strong>For more details, please visit:</strong>{" "}
                      <Link
                        to={
                          "https://www.transportstyrelsen.se/en/road/Driving-licences/"
                        }
                      >
                        https://www.transportstyrelsen.se/en/road/Driving-licences/
                      </Link>
                    </p>
                  </div>

                  <div className=" tw-pt-6">
                    {/* <span>BEFORE</span> */}
                    <h2>
                      <strong>Steps To Get A License</strong>
                    </h2>

                    <ul className=" tw-p-0 tw-pt-4">
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          Apply for a learning permit
                        </p>
                      </li>
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          Start your driving practice
                        </p>
                      </li>
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          Study the theory of driving
                        </p>
                      </li>

                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          Take the risk training – riskutbildning
                        </p>
                      </li>

                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          Book a time for a driving test.
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className=" tw-pt-6">
                    <span>LOOKING</span>
                    <h2>
                      <strong>For Work In Sweden</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      {" "}
                      <Link to={""}>
                        The Swedish Public Employment Service
                      </Link>{" "}
                      (Arbetsförmedlingen) offers support to people looking for
                      work. You can register either online using your Bank-ID or
                      by personally visiting the nearest Arbetsförmedlingen
                      office. Apart from arbetrsförmedlingen, there are many
                      other privately run job websites like LinkedIn, Indeed,
                      etc. commonly used to find a job in Sweden. These websites
                      usually include job listings and functions where you can
                      upload your CV.
                    </p>
                  </div>

                  <div>
                    <span>SWEDISH EDUCATION SYSTEM</span>
                    <h2>
                      <strong>School Admissions</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      Swedish preschools emphasises the importance of play in
                      child’s developement. There is a great focus on basic
                      values and individual needs such as playing together,
                      tolerance and being considerate for others. Preschool is
                      provided for children aged 1 to 5 years.
                    </p>

                    <p className=" tw-text-gray">
                      The year your child turns 6, he or she can participate in
                      a non-compulsory preschool class (sexårsverksamhet)
                      designed to help children meet future classmates and
                      prepare for primary school without the stress of heavy
                      studies or homework. Swedish compulsory schooling is
                      divided ino four stages: förskoleklass (‘preschool year’
                      or year 0), lågstadiet (years 1–3), mellanstadiet (years
                      4–6) and högstadiet (years 7–9).
                    </p>

                    <p className=" tw-text-gray">
                      From the ages of 7 to 16, all children in Sweden are
                      required to attend the compulsory school (grundskola),
                      where they are taught a core group of basic subjects.
                      Families of children between ages six and thirteen are
                      also offered out-of-school care before and after school
                      hours called fritids.
                    </p>

                    <p className=" tw-text-gray">
                      Although preschools and after-school care are paid
                      services, but from the age of 6 years all schooling in
                      Sweden is free of charge and one hot meal during the day
                      is also included. However if you want your child to study
                      in private schools then private and international schools
                      do exist in sweden and there is usually a fee for such
                      schools.
                    </p>
                  </div>

                  <div>
                    <span>PARENTAL</span>
                    <h2>
                      <strong>Allowance</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      Parental benefit/allowance is the money you receive to be
                      able to be at home with your child instead of working,
                      seeking work, or studying after childbirth. Both the
                      parents are granted 480 days of leave per child in
                      total(240 days each). 390 of these days are income-based
                      and 90 days are at the minimum level. If you were working
                      in Sweden during the pregnancy or at the time of
                      childbirth, then you might get up to 80% of your salary as
                      parental allowance otherwise a fixed minimum amount
                      decided by the government will be paid. It is not your
                      employer who bears the cost of your parent benefit but it
                      is the Swedish Social Insurance Agency (Försäkringskassan)
                      who pays it.
                    </p>
                  </div>

                  <div>
                    <span>MOTHER AND CHILD CARE</span>
                    <h2>
                      <strong>Maternity Clinics</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      The maternity clinic (barnmorskemottagningen) is primary
                      health care facility for pregnant women which are
                      responsible for women’s health care throughout the
                      pregnancy and for child’s health care before, during and
                      after birth. Visits to the government maternity clinics
                      are free, but not in case of private care.
                    </p>
                  </div>

                  <div>
                    <span>CHILD</span>
                    <h2>
                      <strong>Health Care Centre</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      At the child health centre or barnavårdscentralen (BVC),
                      you can get tips about your child’s development,
                      breastfeeding, food and illnesses. When you come home
                      after childbirth, you can contact the child health centre
                      to make an appointment for a first meeting. The first
                      meeting is often held at home. At the meeting, the nurse
                      tells you about the child health centre and looks to see
                      how your baby is doing.
                    </p>
                  </div>

                  <div>
                    <span>CHILD</span>
                    <h2>
                      <strong>Care Allowance (Barnbidrag)</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      Children who are born in Sweden or started living in
                      Sweden before their first birthday are entitled to receive
                      child allowance starting from one month after their birth.
                      The allowance is paid to both parents until the child
                      turns 16.
                    </p>
                  </div>

                  <div>
                    <span>REGISTER</span>
                    <h2>
                      <strong>With Försäkringskassan</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      You need to register with Försäkringskassan (the Swedish
                      Social Insurance Agency) to qualify for various benefits
                      for eg. child care allowance, unemployment benefit,
                      parental benefit, etc. Read more at
                      www.forsakringskassan.se
                    </p>
                  </div>

                  <div>
                    <span>HEALTH CARE</span>
                    <h2>
                      <strong>Health Centre</strong>
                    </h2>

                    <div className="row tw-items-center">
                      <div className="col-md-6">
                        <img src={mobile2} alt="" />
                      </div>
                      <div className="col-md-6">
                        <p className=" tw-text-gray">
                          You can visit your local health centre – vårdcentral.
                          These centres provide a starting point for most
                          medical treatments in Sweden.The staff can help you
                          with health related matters and write referrals –
                          remisser, which you need in order to see a specialist.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className=" tw-pt-6">
                    <span>COSTS</span>
                    <h2>
                      <strong>And Fees</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      The costs and fees for visiting a vårdcentral vary from
                      county to county. But the costs of a visit is usually
                      between 100 – 300 SEK and normally free for everyone under
                      20. Don’t forget to cancel an appointment if you don’t
                      need it, as you will otherwise have to pay the full costs
                      of the defaulted visit.
                    </p>
                  </div>

                  <div className=" tw-pt-6">
                    <span>COSTS</span>
                    <h2>
                      <strong>Is Covered?</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      Anyone, registered as resident in Sweden, is entitled to
                      free dental care up to and including the 31 of December of
                      the year you turn 23. Adults on the other hand, pay a
                      large part of their dental care costs themselves, starting
                      on the 1 January of the year they turn 23.
                    </p>

                    <p className=" tw-text-gray">
                      For asylum seekers and undocumented immigrants: you have
                      the right to receive dental care free of charge until your
                      18th birthday.
                    </p>
                    <p className=" tw-text-gray">
                      You are, as an adult, entitled to a dental care grant of
                      300 or 600 SEK a year. You can save the grant for two
                      years and use it on one occasion, but you can’t save more
                      than two grants at the time.
                    </p>
                  </div>

                  <div className=" tw-pt-6">
                    <span>WHERE DO</span>
                    <h2>
                      <strong>I Find A Dentist?</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      You will get a list with all the dentists affiliated with
                      the public dental service – Folktandvården.
                    </p>
                  </div>

                  <div className=" tw-pt-6">
                    <span>UNEMPLOYMENT</span>
                    <h2>
                      <strong>Insurance</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      Payouts of unemployment insurance take two forms, a basic
                      benefit or an income-related benefit. Registered yourself
                      for A-Kassa as soon you start your work.
                    </p>

                    <p className=" tw-text-gray">
                      Unemployment insurance is not a part of the social
                      insurance system in Sweden. Unemployment insurance is
                      connected closely to the trade unions but is legally
                      independent. When you start working in Sweden, investigate
                      which unemployment insurance fund (widely known as
                      A-Kassa) is available.
                    </p>

                    <p className=" tw-text-gray">
                      In order to receive an income-based benefit, you must have
                      been a member of a voluntary unemployment insurance fund
                      (A-kassa) for 12 months and have worked (been employed)
                      for at least six months. In addition, some trade unions
                      offer additional insurance against loss of income.
                    </p>
                  </div>

                  <div className=" tw-pt-6">
                    <span>RECOGNITION OF</span>
                    <h2>
                      <strong>Higher Education Qualifications</strong>
                    </h2>

                    <p className=" tw-text-gray">
                      The European Commission has devised a system known as ECTS
                      (European Credit Transfer System) . It allows for the
                      transfer of higher education credits between European
                      countries. The Swedish Council for Higher Education (UHR)
                      evaluates foreign qualifications in order to provide
                      support for people looking for work in Sweden, people who
                      wish to continue studying, or for employers who wish to
                      employ someone with foreign qualifications.
                    </p>

                    <p className=" tw-text-gray tw-font-medium">
                      Figuring out the responsibilities of the different
                      authorities isn’t all that easy. Who is responsible for
                      what? Whom should you turn to with your questions,
                      applications and concerns?
                    </p>

                    <p className=" tw-text-gray">
                      This guide gives you a brief overview of the different
                      authorities and their main responsibilities.
                    </p>

                    <ul className=" tw-p-0 tw-pt-4">
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          Migrationsverket (Migration Agency)
                        </p>
                      </li>
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          Skatteverket (Tax Agency)
                        </p>
                      </li>
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          Arbetsförmedlingen (Public Employment Service)
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          Försäkringskassan (Social Insurance Agency)
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          Skolverket (National Agency for Education)
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          Jordbruksverket (Swedish Board of Agriculture)•
                          Jordbruksverket (Swedish Board of Agriculture)
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          Tullverket (Swedish Customs)
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          Transportstyrelsen (Transport Agency) & Trafikverket
                          (Transport Administration)
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          Transportstyrelsen (Transport Agency) & Trafikverket
                          (Transport Administration)
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          Länsstyrelserna (the County administrative boards)
                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                          Landstingen (County councils)
                        </p>
                      </li>
                    </ul>

                    <div className=" tw-pt-6">
                      <span>MIGRATIONSVERKET</span>
                      <h2>
                        <strong>(Migration Agency)</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        Migrationsverket (Migration Agency) is the authority to
                        turn to if you want to visit, live in or seek asylum in
                        Sweden, or if you want to become a Swedish citizen.
                        Migrationsverket is also responsible for the settlement
                        of certain new arrivals and decides on compensation to
                        municipalities and counties.
                      </p>
                    </div>

                    <div className=" tw-pt-6">
                      <span>SKATTEVERKET</span>
                      <h2>
                        <strong>(Tax Agency)</strong>
                      </h2>

                      <p className=" tw-text-gray">
                        Skatteverket (The Tax Agency) is in charge of tax
                        matters but is also responsible for Sweden’s population
                        register. Skatteverket does your folkbokföring
                        (registration), You can als apply for a Swedish ID card
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4  tw-pt-16  tw-bg-[#F5FAFF]">
                <div className="  tw-pr-10">
                  <ul className=" tw-pl-4 tw-flex tw-flex-col tw-gap-2.5">
                    {data?.map((item, index) => {
                      return (
                        <li className="hover-effect tw-rounded-md hover:tw-bg-blue tw-bg-white tw-p-4 tw-shadow-lg tw-flex tw-justify-between tw-items-center hover:tw-text-white">
                          <Link
                            to={`${`/service_details/${item?.title}`}`}
                            className="m-0 hover:tw-text-white"
                          >
                            <p className="m-0 tw-text-gray-dark tw-font-semibold hover:tw-text-white">
                              {item?.title}
                            </p>
                          </Link>
                          <GoTriangleRight className="tw-text-gray" />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default New_In_sweden;
