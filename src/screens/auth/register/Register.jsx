import React from "react";
import Navbar from "../../../components/Header/Navbar";
import Banner_Page from "../../../components/Common/Banner_Page";
import Footer from "../../../components/Footer/Footer";
import Input from "../../../components/Input";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
const Register = () => {
  return (
    <>
      <Navbar />
      <Banner_Page title={"Setup Your Account - Sign Up"} />
      <section className=" md:tw-pt-40 tw-pt-48">
        <div className="container py-5">
          <div className=" row  tw-items-center ">
            <div className="col-md-8">
              <h2>Sign Up - Setup your individual account</h2>
            </div>
            <div className="col-md-4 tw-text-end">
              <p className=" tw-text-gray">
                {" "}
                Already have an account?{" "}
                <Link className=" tw-text-black" to={"/login"}>
                  login
                </Link>{" "}
              </p>
              <p className=" tw-text-gray">
                {" "}
                Sign Up as a
                 <Link className=" tw-text-black" to={"/login"}>
                  Company
                </Link>{" "}
              </p>
            </div>
          </div>

          <div>
            <form>
              <div className=" row g-3 tw-pt-4 ">
                <div className="col-md-6">
                  <Input
                    placeholder={"First Name..."}
                    star={"*"}
                    className={" tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl"}
                    label={"First Name"}
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    placeholder={"Last Name..."}
                    star={"*"}
                    className={"  tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl"}
                    label={"Last Name"}
                  />
                </div>
                <div className="col-md-4">
                  <Input
                    placeholder={"@12s"}
                    star={"*"}
                    className={"  tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl"}
                    label={"Email"}
                  />
                </div>
                <div className="col-md-4">
                  <Input
                    placeholder={"Contact No"}
                    star={"*"}
                    className={"  tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl"}
                    label={"Contact No"}
                  />
                </div>
                <div className="col-md-4">
                  <Input
                    placeholder={"Date of Birth"}
                    star={"*"}
                    className={"  tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl"}
                    label={" Date of Birth"}
                  />
                </div>
                <div className="col-md-4">
                  <label
                    htmlFor="first_name"
                    className=" tw-block  tw-text-md  tw-pb-2.5 tw-text-gray "
                  >
                    <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                    Nationality
                  </label>
                  <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark  border   tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl">
                    <option>Select Country</option>
                    <option>Pakistan</option>
                    <option>China</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label
                    htmlFor="first_name"
                    className=" tw-block  tw-text-md  tw-pb-2.5 tw-text-gray"
                  >
                    <a className=" tw-text-red-600 tw-font-semibold">*</a> Place
                    of Birth
                  </label>
                  <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark  border   tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl">
                    <option>Select Country</option>
                    <option>Pakistan</option>
                    <option>China</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label
                    htmlFor="first_name"
                    className=" tw-block  tw-text-md  tw-pb-2.5 tw-text-gray"
                  >
                    <a className=" tw-text-red-600 tw-font-semibold">*</a>{" "}
                    Currently Residing in
                  </label>
                  <select className="tw-outline-none tw-bg-lightGray  tw-p-1.5   tw-text-gray-dark  border   tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl">
                    <option>Select Country</option>
                    <option>Pakistan</option>
                    <option>China</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <Input
                    placeholder={"Your Address"}
                    star={"*"}
                    className={"  tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl"}
                    label={"Address"}
                  />
                </div>
                <div className="col-md-4">
                  <Input
                    placeholder={"City Name"}
                    star={"*"}
                    className={"  tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl"}
                    label={" City"}
                  />
                </div>
                <div className="col-md-2">
                  <Input
                    placeholder={"Postal Code"}
                    star={"*"}
                    className={"  tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl"}
                    label={" Postal Code"}
                  />
                </div>

                <div className="col-md-6">
                  <Input
                    placeholder={"Enter Password..."}
                    star={"*"}
                    className={"  tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl"}
                    label={"Your Password"}
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    placeholder={"Enter Repeat Password..."}
                    star={"*"}
                    className={"  tw-w-full border tw-py-3 tw-px-3 tw-rounded-xl"}
                    label={" Repeat Password"}
                  />
                </div>
                <div className="col-md-12 tw-text-center">
                  <p className=" tw-text-gray">
                    <input type="checkbox" className="" /> I agree to the{" "}
                    <Link to={""} className=" tw-text-black">
                      Terms & Conditions
                    </Link>{" "}
                  </p>
                </div>
                <div className="12">
                  <Button
                    label={"sign up"}
                    className={
                      " tw-uppercase tw-mx-auto  tw-text-sm   tw-bg-blue tw-py-3  tw-w-96 tw-rounded-xl tw-text-white "
                    }
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;
