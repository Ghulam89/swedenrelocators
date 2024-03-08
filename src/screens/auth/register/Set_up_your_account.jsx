import React from "react";
import Navbar from "../../../components/Header/Navbar";
import Banner_Page from "../../../components/Common/Banner_Page";
import Footer from "../../../components/Footer/Footer";
import individuals from "../../../assets/images/individual.svg";
import Company from "../../../assets/images/company.svg";
import Partners from "../../../assets/images/partner.svg";
import Input from "../../../components/Input";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
const Set_up_your_account = () => {
  return (
    <>
      <Navbar />
      <Banner_Page title={"Setup Your Account - Sign Up"} />
      <section className=" tw-pt-40">
        <div className="container py-5">
          <div className=" row  tw-items-center ">
            <div className="col-md-6">
              <h2>Sign Up - Setup your account</h2>
            </div>
            <div className="col-md-6 tw-text-end">
              <p className=" tw-text-gray">
                {" "}
                Already have an account?{" "}
                <Link className=" tw-text-black" to={"/login"}>
                  login
                </Link>{" "}
              </p>
            </div>
          </div>

          <div className="row g-5 tw-py-9">
            <div className="col-md-4">
              <div className=" card border-0 tw-text-center">
                <img src={individuals} alt="" />
                <p className=" tw-text-gray">
                  Set up your account to get full access to our online portal.
                </p>
                <Button
                  Icons={
                    <i class="fa fa-user  tw-text-sm" aria-hidden="true"></i>
                  }
                  label={"Private"}
                  className={
                    " tw-text-blue  tw-font-semibold tw-text-lg hover:tw-bg-blue tw-py-2.5 hover:tw-text-white"
                  }
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className=" card border-0 tw-text-center">
                <img src={Company} alt="" />
                <p className=" tw-text-gray">
                  At the moment this service is available for Swedish companies.
                </p>
                <Button
                  Icons={
                    <i
                      class="fa fa-building  tw-text-sm"
                      aria-hidden="true"
                    ></i>
                  }
                  label={"Companies"}
                  className={
                    " tw-text-blue  tw-font-semibold tw-text-lg hover:tw-bg-blue tw-py-2.5 hover:tw-text-white"
                  }
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className=" card border-0 tw-text-center">
                <img src={Partners} alt="" />
                <p className=" tw-text-gray">
                  Sign up and join our partner program.
                </p>
                <Button
                  Icons={
                    <i class="fa fa-users tw-text-sm" aria-hidden="true"></i>
                  }
                  label={"Partners"}
                  className={
                    " tw-text-blue  tw-font-semibold tw-text-lg hover:tw-bg-blue tw-py-2.5 hover:tw-text-white"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Set_up_your_account;
