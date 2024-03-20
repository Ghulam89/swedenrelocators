import React from "react";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { motion } from "framer-motion";

const OurSkills = () => {
  const containerVariants = staggerContainer(0.1, 0.1);
  return (
    <>
      <section
        id="services"
        className="cmt-row services-section bg-img5 cmt-bg cmt-bgimage-yes clearfix"
      >
        <div className="container tw-py-14">
          {/* row */}
          <div className="row">
            <div className="col-lg-10 m-auto">
              {/* section title */}
              <div className="section-title title-style-center_text">
                <div className="title-header tw-text-center">
                  <span>WE EMPOWER YOUR SKILLS TO SUCCEED IN SWEDEN!</span>
                  <h2 className="h2  tw-text-black">
                    Legal Relocation{" "}
                    <strong>Solutions For Worldwide Clients</strong>
                  </h2>
                </div>
              </div>
              {/* section title end */}
            </div>
          </div>{" "}
          {/* row end*/}
          <div className="row tw-pt-8">
            <motion.div   variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                
                className="col-lg-6 col-md-12">
              <motion.div  variants={fadeIn("up", "tween", 0.2, 1)}   className=" tw-flex tw-shadow-xl tw-pt-5 px-4 tw-gap-8 wrapperIcon">
                <div className="featured-icon tw-bg-[#F5FAFF] p-1    tw-w-72 tw-rounded-tl-3xl tw-rounded-tr-3xl">
                  <div className="">
                    <i className="flaticon icons-animate tw-text-blue tw-pl-1  tw-text-5xl flaticon-bussiness-man" />
                  </div>
                </div>
                <div className="featured-content">
                  <div className="featured-title">
                    <h3>
                      <a
                        className=" tw-text-black  tw-font-medium  tw-text-xl"
                        href="business-visa.html"
                      >
                        Family Reunification
                      </a>
                    </h3>
                  </div>
                  <div className="featured-desc">
                    <p className=" tw-text-gray  tw-font-normal">
                      Family reunification is a recognized reason for the
                      immigration of family members to a country where one or
                      more family members already reside. If a person is an EU
                      citizen or has a permanent residence permit or is an
                      individual who needs subsidiary protection, then you may
                      have the right to invite your family to that country.
                    </p>
                  </div>
                  <div className="cmt-serviceboxbox-readmore tw-pb-5">
                    <a className=" tw-font-medium" href="business-visa.html">
                      View More Details
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div   variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }} className="col-lg-6 col-md-12">
              <motion.div  variants={fadeIn("up", "tween", 0.6, 1)} className=" tw-flex tw-shadow-xl tw-pt-5 px-4 tw-gap-8 wrapperIcon">
                <div className="featured-icon tw-bg-[#F5FAFF] p-1    tw-w-72 tw-rounded-tl-3xl tw-rounded-tr-3xl">
                  <div className="">
                    <i className=" icons-animate mt_tripzia flaticon-travel tw-text-blue tw-pl-1  tw-text-5xl" />
                  </div>
                </div>
                <div className="featured-content">
                  <div className="featured-title">
                    <h3>
                      <a
                        className=" tw-text-black tw-font-medium   tw-text-xl"
                        href="business-visa.html"
                      >
                        Visitor Visa
                      </a>
                    </h3>
                  </div>
                  <div className="featured-desc">
                    <p className=" tw-text-gray  tw-font-normal">
                      For visiting Sweden for a short period you will need a
                      visit visa. Visiting for a short tour, meeting your
                      relatives, visiting friends, or business meeting you need
                      to consider a short visit to Sweden which is called the
                      Schengen tourist visa. Sweden follows the same visa rules
                      as other European countries because it is also part of the
                      Schengen agreement.
                    </p>
                  </div>
                  <div className="cmt-serviceboxbox-readmore tw-pb-5">
                    <a className=" tw-font-medium" href="business-visa.html">
                      View More Details
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <div className="col-lg-6 col-md-12">
              <div className=" tw-flex tw-shadow-xl tw-pt-5 px-4 tw-gap-8 wrapperIcon">
                <div className="featured-icon tw-bg-[#F5FAFF] p-1    tw-w-72 tw-rounded-tl-3xl tw-rounded-tr-3xl">
                  <div className="">
                    <i className="flaticon icons-animate tw-text-blue tw-pl-1  tw-text-5xl flaticon-certificate" />
                  </div>
                </div>
                <div className="featured-content">
                  <div className="featured-title">
                    <h3>
                      <a
                        className=" tw-text-black tw-font-medium   tw-text-xl"
                        href="business-visa.html"
                      >
                        Work Permit
                      </a>
                    </h3>
                  </div>
                  <div className="featured-desc">
                    <p className=" tw-text-gray  tw-font-normal">
                      Currently, every EU country has a different process for
                      granting work permits to nationals of non-EU countries. To
                      address this issue, the European Commission began work in
                      1999 on developing an EU-wide process for the entry of
                      non-EU nationals into the workforce. For a work permit,
                      you must have received an official offer of employment
                      from a Swedish employer.
                    </p>
                  </div>
                  <div className="cmt-serviceboxbox-readmore tw-pb-5">
                    <a className=" tw-font-medium" href="business-visa.html">
                      View More Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className=" tw-flex tw-shadow-xl tw-pt-5 px-4 tw-gap-8 wrapperIcon">
                <div className="featured-icon tw-bg-[#F5FAFF] p-1    tw-w-72 tw-rounded-tl-3xl tw-rounded-tr-3xl">
                  <div className="">
                    <i className="flaticon icons-animate tw-text-blue tw-pl-1  tw-text-5xl flaticon-reading" />
                  </div>
                </div>
                <div className="featured-content">
                  <div className="featured-title">
                    <h3>
                      <a
                        className=" tw-text-black tw-font-medium   tw-text-xl"
                        href="business-visa.html"
                      >
                        Family Study in Sweden
                      </a>
                    </h3>
                  </div>
                  <div className="featured-desc">
                    <p className=" tw-text-gray  tw-font-normal">
                      If you are thinking about studying abroad, then visit
                      Sweden. Studying in Sweden is unique, and you will not
                      find an experience like it anywhere else in the world.
                      Swedish educational institutions provide an exciting as
                      well as an open environment, with a strong focus on
                      cooperation. This will give you valuable skills that you
                      cannot find at other universities across the world.
                    </p>
                  </div>
                  <div className="cmt-serviceboxbox-readmore tw-pb-5">
                    <a className=" tw-font-medium" href="business-visa.html">
                      View More Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurSkills;
