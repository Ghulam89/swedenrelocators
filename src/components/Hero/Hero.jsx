import React from "react";
import hero from "../../assets/images/hero.png";
import Button from "../Button";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
const Hero = () => {
  const containerVariants = staggerContainer(0.1, 0.1);

  return (
    <>
      <section className=" tw-pb-16">
        <div className=" container md:tw-py-24 tw-py-10">
          <div className=" row tw-items-center g-5 md:tw-pt-20 tw-pt-0">
            <div className=" col-md-8 ">
              <motion.div    variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }} >
              <motion.h6   variants={fadeIn("up", "tween", 0.2, 1)} className=" tw-text-gray tw-uppercase  tw-flex  tw-gap-2  tw-text-lg">
                {" "}
                <p className=" tw-w-8 tw-h-0.5 tw-mt-3  tw-bg-blue" />{" "}
                Relocation solutions for investors & international employees
              </motion.h6>
              </motion.div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                <motion.h1
                  variants={fadeIn("up", "tween", 0.4, 1)}
                  className=" tw-leading-[60px] tw-text-5xl  tw-font-normal"
                >
                  Relocate To <strong className=" tw-text-blue">Sweden</strong>{" "}
                  <br />
                  With an{" "}
                  <strong className=" tw-text-blue">Expert Advise</strong>
                </motion.h1>
              </motion.div>
              <motion.div  variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}>
              <motion.p 
               
               variants={fadeIn("up", "tween", 0.6, 2)}
              
              className=" tw-text-gray">
                We offer complete Relocation Services to our worldwide clients
                including, <br /> Residene & Work Permit,Home Finding,
                School-Pre Search, Integration, and Setting-in Services
              </motion.p>
              </motion.div>
              <div className="  tw-flex sm:tw-flex-row tw-flex-col tw-gap-7 tw-pt-5">
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
            <motion.div variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                 className=" col-md-6  md:tw-absolute tw-relative  tw-right-0">
              <motion.img  variants={fadeIn("down", "tween", 0.6, 2)}  src={hero} alt="" width="100%" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
