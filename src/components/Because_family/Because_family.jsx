import React from "react";
import first_image from "../../assets/images/Front-relocation.webp";
import second_image from "../../assets/images/Second-relocation.jpg";
import third_image from "../../assets/images/business-development-directions.png";
import fourth_image from "../../assets/images/man-searching-air-ticket-for-summer-travel.png";
import fifth_image from "../../assets/images/My-Documents.png";
import six_image from "../../assets/images/house-building.png";
import seven_image from "../../assets/images/bank-manager-talking.png";
import eight_image from "../../assets/images/child-care.png";
import Button from "../Button";
import Why_choose_us from "../Why_choose_us";
import { fadeIn, staggerContainer, zoomIn } from "../../utils/motion";
import { motion } from "framer-motion";
const Because_family = () => {
  const containerVariants = staggerContainer(0.1, 0.1);
  return (
    <>
      <section
        id="services"
        className=""
      >
        <div className="container">
          {/* row */}
          <div className="row ">
            <div className="col-lg-10 m-auto">
              {/* section title */}
              <div className="section-title title-style-center_text">
                <div className="title-header tw-text-center">
                  <span>BECAUSE FAMILY COMES FIRST!</span>
                  <h2 className="h2  tw-text-black">
                    EU Family
                    <strong> Reunification Solutions</strong>
                  </h2>
                </div>
              </div>
              {/* section title end */}
            </div>
          </div>{" "}
          {/* row end*/}
          <div className="row tw-items-center ">
            <motion.div   variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }} className="col-md-6">
              <motion.img variants={fadeIn("right", "tween", 0.2, 1)}  src={first_image} alt="" />
            </motion.div>
            <div className="col-md-6">
              <div className="title-header">
                <span>EU RESIDENCE CARD</span>
                <h2 className="h2  tw-text-black">
                  Family
                  <strong> Reunification </strong>
                </h2>
              </div>

              <p className=" tw-text-gray">
                In the European Union (EU), the right to family reunification is
                protected by the EU’s Charter of Fundamental Rights. The EU has
                established a common set of rules for family reunification for
                third-country nationals (non-EU citizens) who are living in an
                EU Member State. These rules are set out in the Family
                Reunification Directive (2003/86/EC).
              </p>

              <p className=" tw-text-gray">
                According to the Directive, the EU Member States must facilitate
                the reunification of third-country nationals with their spouse
                and minor children in their territory. The EU Member States have
                some discretion in determining the conditions for family
                reunification, but in general, the process must be efficient,
                transparent, and non-discriminatory.
              </p>

              <p className=" tw-text-gray">
                The third-country national must be legally resident in an EU
                Member State and must be able to support his or her family
                members financially and provide them with adequate
                accommodation. The family members must also not be a threat to
                public security or public health.
              </p>
            </div>

            <div className="col-md-6">
              <div className="title-header">
                <span> SOFTWARE BASE SOLUTION</span>
                <h2 className="h2  tw-text-black">
                  Apply Online
                  <strong> Now </strong>
                </h2>
              </div>

              <p className=" tw-text-gray">
                In the European Union (EU), the right to family reunification is
                protected by the EU’s Charter of Fundamental Rights. The EU has
                established a common set of rules for family reunification for
                third-country nationals (non-EU citizens) who are living in an
                EU Member State. These rules are set out in the Family
                Reunification Directive (2003/86/EC).
              </p>

              <p className=" tw-text-gray">
                According to the Directive, the EU Member States must facilitate
                the reunification of third-country nationals with their spouse
                and minor children in their territory. The EU Member States have
                some discretion in determining the conditions for family
                reunification, but in general, the process must be efficient,
                transparent, and non-discriminatory.
              </p>

              <p className=" tw-text-gray">
                The third-country national must be legally resident in an EU
                Member State and must be able to support his or her family
                members financially and provide them with adequate
                accommodation. The family members must also not be a threat to
                public security or public health.
              </p>
            </div>
            <motion.div   variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }} className="col-md-6">
              <motion.img  variants={fadeIn("left", "tween", 0.2, 1)}  src={second_image} alt="" />
            </motion.div>

            <div className="col-md-6">
              <div className="title-header">
                <span>COMPLETE ONLINE PORTAL & APP BASE SOLUTION</span>
                <h2 className="h2  tw-text-black">
                  Relocating To
                  <strong> Sweden? </strong>
                </h2>
              </div>

              <p className=" tw-text-gray">
                Moving abroad is an exciting yet stressful task. People migrate
                to different countries because of many reasons. People move to
                other countries to pursue better job opportunities, better
                education systems, better living standards, health systems, or
                due to their Family ties.
              </p>

              <p className=" tw-text-gray">
                We provide a wide range of services to individuals, families,
                and companies to relocate their employees to Sweden :
              </p>
              <p className=" tw-text-gray">
                Visa and immigration services: We can assist with the
                application process for various types of visas, including work
                visas, student visas, and family reunification visas. They can
                also provide guidance on immigration laws and regulations, and
                help with the documentation required for the application
                process.
              </p>
            </div>

           

            <motion.div   variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }} className="col-md-6">
              <motion.img  variants={fadeIn("right", "tween", 0.2, 1)}  src={third_image} alt="" />
            </motion.div>

           
            <motion.div   variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }} className="col-md-6">
              <motion.img  variants={fadeIn("right", "tween", 0.2, 1)}  src={fourth_image} alt="" />
            </motion.div>
            <div className="col-md-6">
              <div className="title-header">
                <span>STEP-BY-STEP ASSISTANCE</span>
                <h2 className="h2  tw-text-black">
                  Departure-Arrival
                  <strong> Services</strong>
                </h2>
              </div>

              <p className=" tw-text-gray">
                <strong>Housing and accommodation services:</strong> We can help
                find suitable housing for the individual or family, including
                rental properties or purchasing a home. They can also provide
                advice on local neighborhoods and the cost of living in the new
                country.
              </p>

              <p className=" tw-text-gray">
                <strong>School and education services: </strong>For families
                with children, we assist with the enrollment process for local
                schools, and provide information on educational systems and
                curriculums.
              </p>
              <p className=" tw-text-gray">
                <strong>Cultural and language services:</strong> We can provide
                information and resources on the culture, customs, and language
                of the new country, and may offer language classes or cultural
                training.
              </p>
              <p className=" tw-text-gray">
                <strong>Legal services:</strong> We can help with the legal
                aspects of the move, such as tax and financial advice, and can
                provide guidance on local laws and regulations.
              </p>
              <p className=" tw-text-gray">
                <strong>Logistics services:</strong> We can help with the
                physical aspect of the move, including packing and shipping
                household goods, customs clearance, and transportation.
              </p>
              <p className=" tw-text-gray">
                <strong>Settling-in services:</strong> We can provide assistance
                to help you to settle into your new home and surroundings, such
                as setting up utilities, arranging for home cleaning, or
                arranging for a handyman.
              </p>
            </div>
            
            <div className="col-md-6">
              <div className="title-header">
                <span>WORK PERMIT & EXTENSIONS</span>
                <h2 className="h2  tw-text-black">
                  Applying For
                  <strong> Work Permit?</strong>
                </h2>
              </div>
              <p className=" tw-text-gray-dark tw-pt-2 tw-font-semibold tw-text-lg">
                We will help you with preparing permit applications
              </p>
              <p className=" tw-text-gray">
                Whether you are a Swedish company or a foreign employer who is
                facing problems with working permits inside Sweden we have easy
                solutions for you. You won’t be wasting enough time on how to
                apply for a Swedish work permit. We will do it for you easily
                and conveniently. You will not have to wait for 12 months in
                case of incorrect or incomplete applications. Our company will
                do it for you in good time. Download our app and discuss your
                case directly with our team.
              </p>

              <Button label={"Read More!"} className={"btn-indigo tw-mt-8"} />
            </div>

           

            <motion.div   variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }} className="col-md-6">
              <motion.img  variants={fadeIn("left", "tween", 0.2, 1)}  src={fifth_image} alt="" />
            </motion.div>

            
            <motion.div   variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }} className="col-md-6">
              <motion.img  variants={fadeIn("left", "tween", 0.2, 1)}  src={third_image} alt="" />
            </motion.div>
            <div className="col-md-6">
              <div className="title-header">
                <span>BUSINESS & INVESTMENT SOLUTIONS</span>
                <h2 className="h2  tw-text-black">
                  Business
                  <strong> In Sweden</strong>
                </h2>
              </div>
              <p className=" tw-text-gray-dark tw-pt-2 tw-font-semibold tw-text-lg">
                If you are planning to invest in Sweden, you might need to apply
                for the residence permit
              </p>
              <p className=" tw-text-gray">
                We have a complete solution for all your problems while starting
                a new business or opening a franchise of your existing business
                in Sweden. Our company will deliver the service of providing the
                resident permit that will align with your plan easily. You will
                need a detailed plan for your business, a bank statement that
                shows that you have enough capital to invest in your business
                along with other enough funds to show that you can support your
                family and yourself while staying in Sweden during the first two
                years. Don’t forget to use our Assessment tool to find out more.
              </p>

              <Button label={"Read More!"} className={"btn-indigo tw-mt-8"} />
            </div>
          </div>
          <Why_choose_us />
          <div className=" row   tw-items-center tw-py-10">
            <div className="col-md-7">
              <div className="title-header">
                <span>INSTANT HOUSING SOLUTIONS</span>
                <h2 className="h2  tw-text-black">
                  Home Loans & <br />
                  <strong> Secure Home Rental Solutions</strong>
                </h2>
              </div>

              <p className=" tw-text-gray">
                The first crucial step when relocating to Sweden is the right
                home for you and your family. We provide instant housing
                solutions with our housing partner companies. You can find the
                apartment or rent out your apartment by providing information on
                our Housing Solutions page.
              </p>

              <Button label={"Read More!"} className={"btn-indigo tw-mt-8"} />
            </div>


            <motion.div   variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }} className="col-md-5">
              <motion.img  variants={fadeIn("left", "tween", 0.2, 1)}  src={six_image} alt="" />
            </motion.div>

            <div className="col-md-6">
              <div className="title-header">
                <span>PROFESSIONAL LEGAL SERVICES BY LAWYERS</span>
                <h2 className="h2  tw-text-black">
                  We Can Provide Lawyers For
                  <strong> Legal Issues</strong>
                </h2>
              </div>

              <p className=" tw-text-gray">
                The universe in which people live is full of actions and
                decisions considered as right and wrong. Legal services are
                defined as services related to government laws or legal issues
                such as providing legal advice, filing a case, defending against
                criminal charges, etc., which lawyers provided. We are working
                with different individuals lawyers and law firms where they can
                provide you solutions to your ongoing issues.
              </p>

              <Button label={"Read More!"} className={"btn-indigo tw-mt-8"} />
            </div>

            
            <motion.div   variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }} className="col-md-6">
              <motion.img  variants={fadeIn("bottom", "tween", 0.2, 1)}  src={seven_image} alt="" />
            </motion.div>
            <div className="col-md-6">
              <div className="title-header">
                <span>AU-PAIR SERVICES FOR NORDIC FAMILIES</span>
                <h2 className="h2  tw-text-black">
                  Solutions For Host Families &<strong> AU Pair</strong>
                </h2>
              </div>

              <p className=" tw-text-gray">
                An Au Pair is a young person living abroad with a Host Family
                and taking care of the children in exchange for accommodation
                and pocket money.
              </p>
              <p className=" tw-text-gray">
                The Au Pair program is an international cultural exchange that
                gives the possibility to young people to spend some time abroad,
                learn more about a different culture, improve their skills in a
                foreign language in exchange for help with duties related to
                childcare. The term “au pair” from French means “on equal
                terms”, signifying that Au Pair and Host Family treat each other
                as equals.
              </p>

              <Button label={"Send Request"} className={"btn-indigo tw-mt-8"} />
            </div>

        
              
            <motion.div   variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }} className="col-md-6">
              <motion.img  variants={zoomIn(0.3, 1)}  src={eight_image} alt="" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Because_family;
