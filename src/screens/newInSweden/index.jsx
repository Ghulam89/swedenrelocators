import React from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
const New_In_sweden = () => {
  return (
    <>
      <Navbar />
      <Banner_Page title={"NEW IN SWEDEN"} />

      <div className=" ">
        <section className=" ">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-md-8 tw-py-20 tw-bg-white">
                <div className="  tw-pl-20">
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
                </div>
              </div>
              <div className="col-md-4 tw-pt-20 tw-bg-[#F5FAFF]">
                <ul className=" tw-pr-20 tw-pl-4">
                  <li className=" tw-bg-white tw-p-4 tw-shadow-lg tw-flex tw-justify-between tw-items-center ">
                    <a href="#" className=" m-0">
                      <p className=" m-0 tw-text-gray-dark tw-font-semibold">
                        APPEAL CASES
                      </p>
                    </a>
                    <GoTriangleRight className=" tw-text-gray" />
                  </li>
                </ul>
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
