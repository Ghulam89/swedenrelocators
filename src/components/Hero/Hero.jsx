import React from "react";
import hero from "../../assets/images/hero.png";
import Button from "../Button";
const Hero = () => {
  return (
    <>
      <section className=" tw-pb-16">
        <div className=" container tw-py-24">
          <div className=" row tw-items-center tw-pt-20">
            <div className=" col-md-8 ">
              <h6 className=" tw-text-gray tw-uppercase  tw-flex  tw-gap-2  tw-text-lg"> <p className=" tw-w-8 tw-h-0.5 tw-mt-3  tw-bg-blue" /> Relocation solutions for investors & international employees</h6>
              <h1 className=" tw-leading-[60px] tw-text-5xl  tw-font-normal">
                 Relocate To <strong className=" tw-text-blue">Sweden</strong>{" "} <br/>
                With  an <strong className=" tw-text-blue">Expert Advise</strong>
              </h1>
              <p className=" tw-text-gray">We offer complete Relocation Services to our worldwide clients including, <br/> Residene & Work Permit,Home Finding, School-Pre Search, Integration, and Setting-in Services</p>
              <div className="  tw-flex tw-gap-7 tw-pt-5">
                <div className=" ">
                  <Button className={"btn-warning"} label={"Our Services"} />
                </div>
                <div className=" ">
                  <Button
                    className={"btn-indigo"}
                    label={"Book an Appointment!"}
                  />
                </div>
              </div>
            </div>
            <div className=" col-md-6  md:tw-absolute tw-relative tw-right-0">
              <img src={hero} alt="" width='100%' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
