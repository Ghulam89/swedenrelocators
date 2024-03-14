import React from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
const ServiceDetails = () => {
  return (
    <>
      <Navbar />
      <Banner_Page title={"ASYLUM"} />

      <div className=" ">
        <section className="  md:tw-mt-36 tw-mt-44">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-md-8 tw-py-20 tw-bg-white">
                <div className="  md:tw-px-20 tw-px-2">
                  <span>ASYLUM IN SWEDEN</span>
                  <h2>
                    <strong>What We Offer</strong>
                  </h2>

                  <p className=" tw-text-gray">
                    If you are an asylum seeker and need an expert to take care
                    of your asylum process at the Swedish Migration Agency, we
                    are here for you
                  </p>
                  <p className=" tw-text-gray">WHY AN EXPERT?</p>
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
                    <span>ELIGIBILITY</span>
                    <h2>
                      <strong>CAN APPLY FOR ASYLUM? </strong>
                    </h2>

                    <p className=" tw-text-gray">
                      You have to be in Sweden or on the Sweden’s border in
                      order to apply for asylum. It’s not possible to apply for
                      asylum before you arrive in Sweden or at a Swedish embassy
                      in another country.
                    </p>
                    <p className=" tw-text-gray tw-py-3">
                      Asylum seeker’s application is examined individually and
                      will be granted a residence permit only if one fulfills
                      criteria of being a refugee.
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
                </div>
              </div>

              <div className="col-md-4  tw-pt-16  tw-bg-[#F5FAFF]">
                <div className="  tw-pr-10">
                  <ul className=" tw-pl-4 tw-flex tw-flex-col tw-gap-2.5">
                    <li className="hover-effect tw-rounded-md hover:tw-bg-blue tw-bg-white tw-p-4 tw-shadow-lg tw-flex tw-justify-between tw-items-center hover:tw-text-white">
                      <a href="#" className="m-0 hover:tw-text-white">
                        <p className="m-0 tw-text-gray-dark tw-font-semibold hover:tw-text-white">
                          APPEAL CASES
                        </p>
                      </a>
                      <GoTriangleRight className="tw-text-gray" />
                    </li>

                    <li className="hover-effect tw-rounded-md hover:tw-bg-blue tw-bg-white tw-p-4 tw-shadow-lg tw-flex tw-justify-between tw-items-center hover:tw-text-white">
                      <a href="#" className="m-0 hover:tw-text-white">
                        <p className="m-0 tw-text-gray-dark tw-font-semibold hover:tw-text-white">
                          ASYLUM
                        </p>
                      </a>
                      <GoTriangleRight className="tw-text-gray" />
                    </li>

                    <li className="hover-effect tw-rounded-md hover:tw-bg-blue tw-bg-white tw-p-4 tw-shadow-lg tw-flex tw-justify-between tw-items-center hover:tw-text-white">
                      <a href="#" className="m-0 hover:tw-text-white">
                        <p className="m-0 tw-text-gray-dark tw-font-semibold hover:tw-text-white">
                          BUSINESS PERMIT
                        </p>
                      </a>
                      <GoTriangleRight className="tw-text-gray" />
                    </li>

                    <li className="hover-effect tw-rounded-md hover:tw-bg-blue tw-bg-white tw-p-4 tw-shadow-lg tw-flex tw-justify-between tw-items-center hover:tw-text-white">
                      <a href="#" className="m-0 hover:tw-text-white">
                        <p className="m-0 tw-text-gray-dark tw-font-semibold hover:tw-text-white">
                          BUSINESS VISIT
                        </p>
                      </a>
                      <GoTriangleRight className="tw-text-gray" />
                    </li>

                    <li className="hover-effect tw-rounded-md hover:tw-bg-blue tw-bg-white tw-p-4 tw-shadow-lg tw-flex tw-justify-between tw-items-center hover:tw-text-white">
                      <a href="#" className="m-0 hover:tw-text-white">
                        <p className="m-0 tw-text-gray-dark tw-font-semibold hover:tw-text-white">
                          CITIZENSHIP
                        </p>
                      </a>
                      <GoTriangleRight className="tw-text-gray" />
                    </li>

                    <li className="hover-effect tw-rounded-md hover:tw-bg-blue tw-bg-white tw-p-4 tw-shadow-lg tw-flex tw-justify-between tw-items-center hover:tw-text-white">
                      <a href="#" className="m-0 hover:tw-text-white">
                        <p className="m-0 tw-text-gray-dark tw-font-semibold hover:tw-text-white">
                          COMPANY REGISTRATION
                        </p>
                      </a>
                      <GoTriangleRight className="tw-text-gray" />
                    </li>

                    <li className="hover-effect tw-rounded-md hover:tw-bg-blue tw-bg-white tw-p-4 tw-shadow-lg tw-flex tw-justify-between tw-items-center hover:tw-text-white">
                      <a href="#" className="m-0 hover:tw-text-white">
                        <p className="m-0 tw-text-gray-dark tw-font-semibold hover:tw-text-white">
                          CPR NUMBER DENMARK
                        </p>
                      </a>
                      <GoTriangleRight className="tw-text-gray" />
                    </li>
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

export default ServiceDetails;
