import React from "react";
import Button from "../Button";

const Visitor = () => {
  return (
    <div>
      <>
        {/*visitor-section*/}
        <section className=" tw-py-6">
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-lg-7 m-auto">
                {/* section title */}
                <div className=" tw-text-center tw-py-2">
                  <span>YOUR NEXT VISA APPLICATION IS ON ONE CLICK!</span>
                  <h2 className="title">
                    We Prepare Visa Applications &{" "}
                    <strong>Send Worldwide Via DHL</strong>
                  </h2>
                  <p className=" tw-text-gray">
                    Submit to Embassy or Nearest FedEx Office
                  </p>
                </div>
                {/* section title end */}
              </div>
            </div>
            {/* row end */}
            {/* row */}
            <div className="row  tw-py-8">
              <div className="col-lg-12">
                <div className="">
                  <div className="row  g-5">
                    <div className="col-lg-3 col-md-2 ">
                      {/*featured-icon-box*/}
                      <div className=" ">
                        <div class="wrapper tw-mx-auto tw-relative tw-w-44 tw-h-44 tw-flex tw-justify-center tw-items-center tw-overflow-hidden">
                          <div class="border-animate tw-absolute tw-inset-0 tw-rounded-full tw-border-2 tw-border-dashed tw-border-gray-light"></div>
                          <div class="inner-content element-inner  tw-h-32 tw-w-32 tw-rounded-full  tw-flex tw-justify-center tw-items-center tw-bg-[#0067ED]">
                            <i className="flaticon tw-text-5xl tw-text-white tw-m-0  tw-h-14 tw-w-11 flaticon-passport-6" />
                          </div>
                        </div>

                        <div className=" tw-text-center">
                          <h5 className=" tw-pt-5 tw-pb-2">Sign Up</h5>
                        </div>
                        <div className="featured-desc">
                          <p className=" tw-text-gray">
                            You can signup on our website and book an
                            appointment or write us in Message section on My
                            Page!
                          </p>
                        </div>
                      </div>
                      {/* featured-icon-box end*/}
                    </div>
                    <div className="col-lg-3 col-md-2 ">
                      {/*featured-icon-box*/}
                      <div className=" ">
                        <div class="wrapper tw-mx-auto tw-relative tw-w-44 tw-h-44 tw-flex tw-justify-center tw-items-center tw-overflow-hidden">
                          <div class="border-animate tw-absolute tw-inset-0 tw-rounded-full tw-border-2 tw-border-dashed tw-border-gray-light"></div>
                          <div class="inner-content element-inner  tw-h-32 tw-w-32 tw-rounded-full  tw-flex tw-justify-center tw-items-center tw-bg-[#0067ED]">
                            <i className="flaticon tw-text-5xl tw-text-white tw-m-0  tw-h-14 tw-w-11 flaticon-passport-6" />
                          </div>
                        </div>

                        <div className=" tw-text-center">
                          <h5 className=" tw-pt-5 tw-pb-2">Upload Documents</h5>
                        </div>
                        <div className="featured-desc">
                          <p className=" tw-text-gray">
                            In next step go to My Page and upload all necessary
                            documents.
                          </p>
                        </div>
                      </div>
                      {/* featured-icon-box end*/}
                    </div>
                    <div className="col-lg-3 col-md-2 ">
                      {/*featured-icon-box*/}
                      <div className=" ">
                        <div class="wrapper tw-mx-auto tw-relative tw-w-44 tw-h-44 tw-flex tw-justify-center tw-items-center tw-overflow-hidden">
                          <div class="border-animate tw-absolute tw-inset-0 tw-rounded-full tw-border-2 tw-border-dashed tw-border-gray-light"></div>
                          <div class="inner-content element-inner  tw-h-32 tw-w-32 tw-rounded-full  tw-flex tw-justify-center tw-items-center tw-bg-[#0067ED]">
                            <i className="flaticon tw-text-5xl tw-text-white tw-m-0  tw-h-14 tw-w-11 flaticon-passport-6" />
                          </div>
                        </div>

                        <div className=" tw-text-center">
                          <h5 className=" tw-pt-5 tw-pb-2">
                            File Preparation Process
                          </h5>
                        </div>
                        <div className="featured-desc">
                          <p className=" tw-text-gray">
                            One of our experienced Consultant will contact you
                            and prepare your visa file and book your appointment
                            at embassy or Gerry’s/FedEx office.
                          </p>
                        </div>
                      </div>
                      {/* featured-icon-box end*/}
                    </div>
                    <div className="col-lg-3 col-md-2 ">
                      {/*featured-icon-box*/}
                      <div className=" ">
                        <div class="wrapper tw-mx-auto tw-relative tw-w-44 tw-h-44 tw-flex tw-justify-center tw-items-center tw-overflow-hidden">
                          <div class="border-animate tw-absolute tw-inset-0 tw-rounded-full tw-border-2 tw-border-dashed tw-border-gray-light"></div>
                          <div class="inner-content element-inner  tw-h-32 tw-w-32 tw-rounded-full  tw-flex tw-justify-center tw-items-center tw-bg-[#0067ED]">
                            <i className="flaticon tw-text-5xl tw-text-white tw-m-0  tw-h-14 tw-w-11 flaticon-passport-6" />
                          </div>
                        </div>

                        <div className=" tw-text-center">
                          <h5 className=" tw-pt-5 tw-pb-2">Download or DHL</h5>
                        </div>
                        <div className="featured-desc">
                          <p className=" tw-text-gray">
                            Once file is completed we will upload on your portal
                            and send you via DHL. All you need to do is to
                            submit to closest Embassy or Gerry's Visa Services
                            office.
                          </p>
                        </div>
                      </div>
                      {/* featured-icon-box end*/}
                    </div>
                  </div>

                  <Button
                    label={"Apply Now!"}
                    className={
                      " tw-my-3 tw-mx-auto tw-bg-blue tw-text-white tw-py-3.5 tw-rounded-md "
                    }
                  />
                </div>
              </div>
            </div>
           
          </div>
        </section>
        {/*visitor-section end*/}
      </>
    </div>
  );
};

export default Visitor;
