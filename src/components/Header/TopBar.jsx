import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <>
      <section className="  tw-pb-2  tw-bg-primary">
        <div className="container-fluid  px-0">
          <div className="row  md:tw-pl-8 tw-pl-0 tw-items-center text-center">
            <div className="col-lg-6">
              <div className="row tw-items-center tw-text-center tw-pt-3">
                <div className="col-md-6">
                  <p className=" tw-font-normal tw-text-sm  tw-text-white">
                    {" "}
                    <i class="ti ti-alarm-clock"></i>
                    Mon - Fri 10.00 - 18.00{" "}
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="   tw-font-normal tw-text-sm tw-text-white">
                    <i class="ti ti-location-pin"></i>
                    Amiralsgatan 86E 214 37 Malmö, Sweden{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className=" tw-flex  tw-justify-end tw-gap-4 tw-items-center">
                <div className="">
                  <Link to={'/book_your_appointment'} className="tw-font-normal tw-text-sm  tw-text-white">
                    {" "}
                    
                    <i class="fa fa-calendar-check"></i> Book an Appointment{" "}
                  </Link>
                </div>
                <div className="">
                  <div className=" tw-flex tw-items-center">
                    <button className=" tw-bg-blue tw-py-3.5 tw-px-5  tw-text-white text-sm tw-font-semibold tw-flex tw-border-r tw-justify-center tw-items-center">
                      My Page
                    </button>
                    <Link to={'/register'} className=" sign_up tw-outline-none  hover:tw-text-white tw-bg-blue tw-py-3.5 tw-px-5  tw-w-44  tw-text-white text-sm tw-font-semibold tw-flex  tw-items-center">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" tw-py-3"></div>
      </section>
    </>
  );
};

export default TopBar;
