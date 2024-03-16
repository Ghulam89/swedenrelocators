import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <>
      <section className="  md:tw-pb-3.5 tw-pb-0 md:tw-pl-24 tw-pl-0  tw-bg-primary">
        <div className="container-fluid tw-p-0 ">
          <div className="row  tw-items-center text-center">
            <div className="col-lg-6 col-md-12">
              <div className=" tw-flex tw-flex-wrap tw-items-center tw-gap-4 tw-justify-center md:tw-justify-start tw-text-center tw-pt-3">
                <p className="   tw-text-sm      tw-border-gray  tw-text-white">
                  <i class="ti ti-alarm-clock"></i>
                  Mon - Fri 10.00 - 18.00
                </p>
               <span  className="  tw-h-5  tw-mb-4 tw-bg-gray  tw-border-gray" style={{width:'1px'}}></span>
                <p className="    tw-text-sm tw-text-white">
                  <i class="ti ti-location-pin"></i>
                  Amiralsgatan 86E 214 37 Malmö, Sweden
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12  px-0">
              <div className=" sm:tw-flex  tw-block tw-justify-end tw-gap-4 tw-items-center">
                <div className="">
                  <Link
                    to={"/book_your_appointment"}
                    className="tw-text-sm  tw-text-white"
                  >
                    {" "}
                    <i class="fa fa-calendar-check"></i> Book an Appointment{" "}
                  </Link>
                </div>
                <div className=" tw-float-right sm:tw-pt-0 tw-pt-3">
                  <div className=" tw-flex tw-items-center">
                    <button className=" tw-bg-blue tw-py-3.5  tw-px-4  tw-text-white text-xs  tw-flex tw-border-r tw-justify-center tw-items-center">
                      My Page
                    </button>
                    <Link
                      to={"/register"}
                      className=" sign_up tw-outline-none  hover:tw-text-white tw-bg-blue tw-py-3.5 tw-px-4  tw-w-44  tw-text-white text-sm tw-flex  tw-items-center"
                    >
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
