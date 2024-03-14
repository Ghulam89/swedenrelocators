import React from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import tesi from "../../assets/images/testimonial/01.jpg";
const Testimonials = () => {
  return (
    <>
      <Navbar />
      <Banner_Page title={"Testimonial"} />
      <div className="">
        <div className="container md:tw-pt-56 tw-pt-48">
          <div className="">
            <span>TESTIMONIAL</span>
            <h2>What Our Clients Say?</h2>
            <p className=" tw-text-gray">
              Hear what our clients have to say about partnering with us for
              corporate and development. We assist our customers in home
              finding, children’s school, Moving Services, and we can take care
              of all the paperwork from day one till you moved to your new home.
            </p>
          </div>

          <div className="row tw-py-12 g-5">
            <div className="col-md-6">
              <div className="testi_card tw-w-[80%] tw-shadow-lg  tw-mt-12 tw-h-80 tw-relative">
                <div className=" p-5 tw-shadow-lg tw-w-full  tw-bg-white tw-text-center tw-absolute tw-left-10  -tw-top-20">
                  <p className=" tw-text-lg tw-text-gray">
                    Have used their services for getting advice for moving to
                    Sweden, I found them to be resonantly professional and yet
                    cost-effective
                  </p>
                  <img
                    src={tesi}
                    alt=""
                    className=" tw-w-20 tw-h-20 tw-my-4 tw-mx-auto tw-rounded-full"
                  />
                  <h5 className="">AB Mack</h5>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="testi_card tw-w-[80%] tw-shadow-lg  tw-mt-12 tw-h-80 tw-relative">
                <div className=" p-5 tw-shadow-lg tw-w-full  tw-bg-white tw-text-center tw-absolute tw-left-10  -tw-top-20">
                  <p className=" tw-text-lg tw-text-gray">
                    Have used their services for getting advice for moving to
                    Sweden, I found them to be resonantly professional and yet
                    cost-effective
                  </p>
                  <img
                    src={tesi}
                    alt=""
                    className=" tw-w-20 tw-h-20 tw-my-4 tw-mx-auto tw-rounded-full"
                  />
                  <h5 className="">AB Mack</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="testi_card tw-w-[80%] tw-shadow-lg  tw-mt-12 tw-h-80 tw-relative">
                <div className=" p-5 tw-shadow-lg tw-w-full  tw-bg-white tw-text-center tw-absolute tw-left-10  -tw-top-20">
                  <p className=" tw-text-lg tw-text-gray">
                    Have used their services for getting advice for moving to
                    Sweden, I found them to be resonantly professional and yet
                    cost-effective
                  </p>
                  <img
                    src={tesi}
                    alt=""
                    className=" tw-w-20 tw-h-20 tw-my-4 tw-mx-auto tw-rounded-full"
                  />
                  <h5 className="">AB Mack</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="testi_card tw-w-[80%] tw-shadow-lg  tw-mt-12 tw-h-80 tw-relative">
                <div className=" p-5 tw-shadow-lg tw-w-full  tw-bg-white tw-text-center tw-absolute tw-left-10  -tw-top-20">
                  <p className=" tw-text-lg tw-text-gray">
                    Have used their services for getting advice for moving to
                    Sweden, I found them to be resonantly professional and yet
                    cost-effective
                  </p>
                  <img
                    src={tesi}
                    alt=""
                    className=" tw-w-20 tw-h-20 tw-my-4 tw-mx-auto tw-rounded-full"
                  />
                  <h5 className="">AB Mack</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="testi_card tw-w-[80%] tw-shadow-lg  tw-mt-12 tw-h-80 tw-relative">
                <div className=" p-5 tw-shadow-lg tw-w-full  tw-bg-white tw-text-center tw-absolute tw-left-10  -tw-top-20">
                  <p className=" tw-text-lg tw-text-gray">
                    Have used their services for getting advice for moving to
                    Sweden, I found them to be resonantly professional and yet
                    cost-effective
                  </p>
                  <img
                    src={tesi}
                    alt=""
                    className=" tw-w-20 tw-h-20 tw-my-4 tw-mx-auto tw-rounded-full"
                  />
                  <h5 className="">AB Mack</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="testi_card tw-w-[80%] tw-shadow-lg  tw-mt-12 tw-h-80 tw-relative">
                <div className=" p-5 tw-shadow-lg tw-w-full  tw-bg-white tw-text-center tw-absolute tw-left-10  -tw-top-20">
                  <p className=" tw-text-lg tw-text-gray">
                    Have used their services for getting advice for moving to
                    Sweden, I found them to be resonantly professional and yet
                    cost-effective
                  </p>
                  <img
                    src={tesi}
                    alt=""
                    className=" tw-w-20 tw-h-20 tw-my-4 tw-mx-auto tw-rounded-full"
                  />
                  <h5 className="">AB Mack</h5>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Testimonials;
