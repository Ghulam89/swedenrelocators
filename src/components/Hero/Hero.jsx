import React from "react";
import hero from "../../assets/images/hero.png";
import Button from "../Button";
import { motion } from "framer-motion";
import { fadeIn, imageVariants, staggerContainer } from "../../utils/motion";
import { Link } from "react-router-dom";
import VideoPlayer from "../videoPlayer";
import video1 from '../../assets/images/hero_video.mp4';
const Hero = () => {
  const containerVariants = staggerContainer(0.1, 0.1);

  return (
    <>
      <section className=" tw-pb-16">
        <div className=" container md:tw-py-24 tw-py-10">
          <div className=" row tw-items-center g-4 md:tw-pt-20 tw-pt-0">
            <div className=" col-md-6">
              <motion.div    variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }} >
              <motion.h6   variants={fadeIn("up", "tween", 0.2, 1)} className=" tw-text-gray tw-uppercase  tw-flex  tw-gap-2  ">
                {" "}
                <p className=" tw-w-5 tw-h-0.5 tw-mt-3  tw-bg-blue" />{" "}
                Relocation & Immigration Solutions for Individuals, Families, Employees, and Companies
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
              We offer complete relocation services to our worldwide clients including residence & work permits, home finding, school pre-search, integration, and setting-in services.
              </motion.p>
              </motion.div>
              <div className="  tw-flex sm:tw-flex-row tw-flex-col tw-gap-7 tw-pt-5">
                <Link to={'/services'} className=" ">
                  <Button className={"btn-warning"} label={"Our Services"} />
                </Link>
                <Link to={'/book_your_appointment'} className=" ">
                  <Button
                    className={"btn-indigo "}
                    label={"Book an Appointment!"}
                  />
                </Link>
              </div>
            </div>
            <div 
                 className=" col-md-6">
              {/* <motion.img  
                 animate={imageVariants}  src={hero} alt="" /> */}
                 <VideoPlayer src={video1} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
