import React from "react";
import Navbar from "../../components/Header/Navbar";
import Banner_Page from "../../components/Common/Banner_Page";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button";
import { GoTriangleRight } from "react-icons/go";
import assess1 from '../../assets/images/BusinessAssessment.png'
import assess2 from '../../assets/images/VisitVisaAssessment.png'
import assess3 from '../../assets/images/StudyAssesmment.png'
import assess4 from '../../assets/images/WorkPermit.png'
const Assessment = () => {
  return (
    <>
      <Navbar />
      <Banner_Page title={" Assessment"} />
      <section className=" md:tw-pt-36 tw-pt-48">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-8 ">
              <div className=" tw-bg-white  md:tw-px-20 tw-px-5 tw-pt-14">
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
                  <div className="col-md-6">
                     <div>
                      <img src={assess1} alt=""  className="  tw-mx-auto"/>

                      <Button Icons={<i class="fa fa-building tw-mt-1" aria-hidden="true"></i>} className={' hover:tw-bg-blue tw-font-semibold tw-w-full tw-py-3 tw-text-lg'}  label={'Business Visa Assessment'} />
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div>
                      <img src={assess2} alt=""  className="  tw-mx-auto"/>

                      <Button Icons={<i class="fa fa-street-view tw-mt-1" aria-hidden="true"></i>} className={' hover:tw-bg-blue tw-font-semibold tw-w-full tw-py-3 tw-text-lg'}  label={'Visit Visa Assessment'} />
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div>
                      <img src={assess3} alt=""  className="  tw-mx-auto"/>

                      <Button Icons={<i class="fa fa-street-view tw-mt-1" aria-hidden="true"></i>} className={' hover:tw-bg-blue tw-font-semibold tw-w-full tw-py-3 tw-text-lg'}  label={'Study in Sweden Assesmment'} />
                     </div>
                  </div>

                  <div className="col-md-6">
                     <div>
                      <img src={assess4} alt=""  className="  tw-mx-auto"/>

                      <Button Icons={<i class="fa fa-street-view tw-mt-1" aria-hidden="true"></i>} className={' hover:tw-bg-blue tw-font-semibold tw-w-full tw-py-3 tw-text-lg'}  label={'Work Permit Assesmment'} />
                     </div>
                  </div>
                </div>
            


                <h6 className=" tw-text-gray tw-mb-3 text-xl">Notes:</h6>

                <div className=" tw-bg-white tw-shadow-lg tw-rounded-md tw-py-4  tw-mb-4  px-3">
                  <p className="  tw-text-gray text-sm tw-m-0">
                    Once you book the appointment you will be able to upload the documents on online portal, If you are in Sweden or Denmark you can visit us in our office.
                  </p>
                </div>

                <div className=" tw-bg-blue tw-rounded-md tw-py-4 tw-mb-12  px-3">
                  <h6 className=" tw-text-white tw-m-0">
                    {" "}
                    <i class="fa fa-calendar"></i>You can be anywhere in the world to apply visa online through our one window visa application system.
                  </h6>
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
      <Footer />
    </>
  );
};

export default Assessment;
