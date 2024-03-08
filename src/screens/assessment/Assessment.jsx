import React from "react";
import Navbar from "../../components/Header/Navbar";
import Banner_Page from "../../components/Common/Banner_Page";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
const Assessment = () => {
  return (
    <>
      <Navbar />
      <Banner_Page title={" Assessment"} />
      <section className=" tw-pt-40">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className=" tw-bg-white tw-pt-8">
                <div className="">
                  <p className=" tw-font-bold tw-text-2xl tw-flex tw-gap-2 tw-text-black tw-m-0">
                    {" "}
                    <img   src={'https://swedenrelocators.se/pages/assets/web/images/background/results.png'} className=" tw-w-10"  alt="" /> Check below your Visa or Residence Permit Eligibility
                  </p>


                  <p className=" tw-text-gray tw-pt-3">This tool will help you to find out if you are eligible to apply for Visa or Residence Permit. We made this assessment tool to make sure, If you are eligible for your desired Visa or Residence Permit. In the end of your assesment process you would receive your result. The risk of changes in law refers to the risk of changes that may affect the assessment results.

</p>
<p className=" tw-text-gray tw-pt-2">Any sort of visa and residence permit for any country are available at lower cost when you apply directly on their official website. Our comprehensive visa and Immigration-Relocation services are provided by Migration Agents who have experience to advise on visa strategy, right documentation and they ensure your application is successful and we charge for our services.

</p>
                </div>

                
              </div>
            </div>
            <div className="col-md-4 tw-pt-9 tw-bg-[#F5F8FB]">
              <ul>
                <li className="  tw-w-full">
                  <Link
                    to={"#"}
                    className="tw-text-black tw-text-base  tw-bg-white tw-shadow-lg tw-w-full"
                  >
                    APPEAL
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Assessment;
