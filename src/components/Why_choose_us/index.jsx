import React from "react";
import choose from "../../assets/images/office-meetings.png";
import Button from "../Button";
import { fadeIn, imageVariants, staggerContainer } from "../../utils/motion";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Why_choose_us = () => {
  const containerVariants = staggerContainer(0.1, 0.1);

  return (
    <>
      <section>
        <div className="container  tw-pt-10">
          <div className="row tw-items-center">
            <div className="col-xl-6 col-lg-6">
              <div
                
                className=""
              >
                <div className="row">
                  <div className="col-md-11">
                  <motion.img
                 animate={imageVariants}
                  
                  className="img-fluid tw-w-full"
                  src={choose}
                  alt="single_04"
                />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              {/* section title */}
              <div className="section-title">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  className="title-header"
                >
                  <span>Why Choose Us</span>
                  <motion.h2 variants={fadeIn("up", "tween", 0.2, 1)}>
                    Experienced Team Provide <br />
                    <strong>RELOCATION SERVICES</strong>
                  </motion.h2>
                </motion.div>
              </div>
              {/* section title end */}

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                <motion.p variants={fadeIn("up", "tween", 0.2, 1)}>
                  We are here to provide you complete Relocation Services,
                  including Housing, Kids School, Visa Services, Registration
                  for Social Benefits, Language School, Integration activities
                  etc.
                </motion.p>
              </motion.div>

              <div className="bg-white">
                <div className="tw-flex   tw-items-center tw-justify-between">
                  <p className="  tw-text-primary  tw-font-medium tw-text-md  m-0">
                    Business Permit
                  </p>
                  <p className=" tw-pr-4 tw-text-primary m-0 tw-font-medium tw-text-lg">
                    94% 
                  </p>
                </div>
                <div className="tw-w-full   tw-bg-gray-light tw-h-2 mb-6 mt-2">
                  <div
                    className="tw-bg-blue tw-h-2 "
                    style={{ width: "94%" }}
                  />
                </div>

                <div className="tw-flex  tw-mt-6 tw-items-center tw-justify-between">
                  <p className="  tw-text-primary  tw-font-medium tw-text-md  m-0">
                    Work Permit
                  </p>
                  <p className="tw-pr-4 tw-text-primary m-0 tw-font-medium tw-text-lg">
                    98%
                  </p>
                </div>
                <div className="tw-w-full   tw-bg-gray-light tw-h-2 mb-6 mt-2">
                  <div
                    className="tw-bg-blue tw-h-2 "
                    style={{ width: "98%" }}
                  />
                </div>

                <div className="tw-flex  tw-mt-6 tw-items-center tw-justify-between">
                  <p className="  tw-text-primary  tw-font-medium tw-text-md  m-0">
                    Family Reunification
                  </p>
                  <p className="tw-pr-4 tw-text-primary m-0 tw-font-medium tw-text-lg">
                    100%
                  </p>
                </div>
                <div className="tw-w-full   tw-bg-gray-light tw-h-2 mb-6 mt-2">
                  <div
                    className="tw-bg-blue tw-h-2 "
                    style={{ width: "100%" }}
                  />
                </div>

                <div className="tw-flex  tw-mt-6 tw-items-center tw-justify-between">
                  <p className="  tw-text-primary  tw-font-medium tw-text-md  m-0">
                    Study in Sweden
                  </p>
                  <p className="tw-pr-4 tw-text-primary m-0 tw-font-medium tw-text-lg">
                    98%
                  </p>
                </div>
                <div className="tw-w-full   tw-bg-gray-light tw-h-2 mb-6 mt-2">
                  <div
                    className="tw-bg-blue tw-h-2 "
                    style={{ width: "98" }}
                  />
                </div>

                <div className="tw-flex  tw-mt-6 tw-items-center tw-justify-between">
                  <p className="  tw-text-primary  tw-font-medium tw-text-md  m-0">
                    Long Term EU Resident
                  </p>
                  <p className="tw-pr-4 tw-text-primary m-0 tw-font-medium tw-text-lg">
                    99%
                  </p>
                </div>
                <div className="tw-w-full   tw-bg-gray-light tw-h-2 mb-6 mt-2">
                  <div
                    className="tw-bg-blue tw-h-2 "
                    style={{ width: "99%" }}
                  />
                </div>
              </div>
              <Link to={'/about_us'} >
              <Button label={"Read More!"} className={"btn-indigo tw-mt-8"} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Why_choose_us;
