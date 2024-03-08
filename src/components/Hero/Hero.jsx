import React from "react";
import hero from "../../assets/images/hero.png";
import Button from "../Button";
const Hero = () => {
  return (
    <>
      <section className=" tw-pb-16">
        <div className=" container">
          <div className=" row tw-items-center">
            <div className=" col-md-6">
              <h6 className=" tw-text-gray tw-uppercase tw-text-lg">Relocation solutions for investors & international employees</h6>
              <h1 className=" tw-leading-[60px] tw-text-5xl  tw-font-normal">
                Relocate To <strong className=" tw-text-blue">Sweden</strong>{" "} <br/>
                With  an <strong className=" tw-text-blue">Expert Advise</strong>
              </h1>
              <p className=" tw-text-gray">We offer complete Relocation Services to our worldwide clients including, Residene & Work Permit,Home Finding, School-Pre Search, Integration, and Setting-in Services</p>
              <div className="row">
                <div className=" col-md-4">
                  <Button className={"btn-warning"} label={"Our Services"} />
                </div>
                <div className=" col-md-6">
                  <Button
                    className={"btn-indigo"}
                    label={"Book an Appointment!"}
                  />
                </div>
              </div>
            </div>
            <div className=" col-md-6">
              <img src={hero} alt="" width='100%' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
