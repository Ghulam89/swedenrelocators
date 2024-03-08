import React from "react";
import Navbar from "../../../components/Header/Navbar";
import Banner_Page from "../../../components/Common/Banner_Page";
import Footer from "../../../components/Footer/Footer";
import login_img from "../../../assets/images/login_img.svg";
import Input from "../../../components/Input";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
const Login = () => {
  return (
    <>
      <Navbar />
      <Banner_Page title={"Login"} />
      <section className=" tw-pt-40">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-5">
              <img src={login_img} alt="" />
              <p className=" tw-text-gray tw-text-center tw-leading-5">
                Our portal allows you to communicate directly with our team of
                immigration experts, lawyers who can provide you with guidance &
                support throughout the relocation & immigration process.
              </p>
            </div>
            <div className="col-md-7 ">
              <div className="row ">
                <div className="col-md-10 mx-auto">
                  <div className=" tw-text-center">
                    <p className=" tw-text-lg tw-text-gray tw-font-semibold tw-pb-9">
                      Login with
                    </p>
                  </div>
                  <div>
                    <div className=" tw-bg-primary tw-flex tw-items-center tw-justify-around tw-rounded-md tw-py-2.5">
                      <img
                        src="https://swedenrelocators.se/pages/assets/web/images/icons8-email-48.png"
                        alt=""
                      />
                      <p className=" tw-text-white m-0  tw-font-bold tw-text-2xl">
                        EMAIL ID
                      </p>
                      <img
                        src="https://swedenrelocators.se/pages/assets/web/images/icons8-globe-48.png"
                        alt=""
                      />
                    </div>

                    <form>
                      <div className=" row g-3 tw-pt-4 ">
                        <div className="col-md-12">
                          <Input
                            placeholder={"Email Address..."}
                            star={"*"}
                            className={" tw-w-full border"}
                            label={"Your Email"}
                          />
                        </div>
                        <div className="col-md-12">
                          <Input
                            placeholder={"*********"}
                            star={"*"}
                            className={" tw-w-full border"}
                            label={"Your Password"}
                          />
                        </div>
                        <div className=" col-md-12">
                          <div className=" tw-flex tw-justify-between tw-items-center">
                            <div className=" tw-flex tw-gap-2 ">
                              <input className={""} type={"checkbox"} />
                              <p className=" tw-text-gray tw-pt-3">
                                Remember Password
                              </p>
                            </div>
                            <div>
                              <Link className=" tw-text-black">
                                Forget Password?
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="12">
                          <Button
                            label={"sign in"}
                            className={
                              " tw-uppercase tw-mx-auto  tw-text-sm   tw-bg-blue tw-py-1.5  tw-w-60 tw-rounded-sm tw-text-white "
                            }
                          />
                        </div>
                        <div className="col-md-12 tw-text-center">
                          <p className=" tw-text-gray">
                            Don't have an account?{" "}
                            <Link to={"/register"} className=" tw-text-black">
                              Sign Up
                            </Link>{" "}
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
