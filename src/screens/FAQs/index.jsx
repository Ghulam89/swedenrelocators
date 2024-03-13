import React, { useState } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import Accordion from "../../components/Accordion/Accordion";
import Input from "../../components/Input";
import Button from "../../components/Button";
const FAQs = () => {
    const [accordions, setAccordion] = useState([
        {
          key: 1,
          title: "What is a Visa?",
          data: "A Visa is an authorization issued by the representative of the Government of a country permitting a person, not resident in that country, to enter its boundaries.",
          isOpen: false,
        },
        {
          key: 2,
          title:
            "How do I know if I need a visa?",
          data: "Depending on your purpose of travel, you can visit our website to check the eligibility.",
          isOpen: false,
        },
        {
          key: 3,
          title: "Is the visa valid for Sweden only?",
          data: "The Embassy of Sweden issues visas for Sweden and for the other Schengen states. The Schengen visa issued by the Embassy of Sweden gives access to 26 Schengen countries in total. However, the Schengen Visa applications will only be accepted by The Sweden Visa Application Centre if Sweden is the country of maximum stay. Should the duration of the stay be the same in several Schengen States, Sweden must be the first point of entry if making an application at the Sweden Visa Application Centre.          ",
          isOpen: false,
        },
        {
          key: 4,
          title: "What type of services 'SWEDEN RELOCATORS AB' provides to their clients?",
          data: "SWEDEN RELOCATORS AB is a Relocation Services Provider Company that deals with all sorts of legal relocations to Sweden. The company was established in 2015 and offers fully Integrated Relocation Solutions for international corporations and their employees and Families. The company offers quality guidance, and effective advice and provides information to its clients to settle down in the country. We provide solutions within Destination Services, Global Mobility Services, Immigration Services, Move Management, Intercultural Communication, Invest in Sweden, Property Management, and IT Solutions.  In Additional Services Expats Home Rentals, EU Residence Permits, Family Permits, and Global Visa Applications Registering a new business or branch of an existing business, Import & Export to or from Europe.          ",
          isOpen: false,
        },
        {
          key: 5,
          title: "Is 'SWEDEN RELOCATORS AB' registered company?",
          data: "Yes. We are registered as a company in Sweden with a branch office in Glostrup Denmark. We are registered for Legal Public Assistance (Offentliga Biträden) and we are a supplier member of EURA (European Relocation Association) and IIA (International Immigration Association).          ",
          isOpen: false,
        },
        {
          key: 6,
          title: "How to Sign Up on your website and why its important?",
          data: "You must have a valid email ID to sign up on our website. We collect basic information to avoid spam accounts. It is important to get registered as we want to know whom we are communicating with and we are in the process to implement Digital IDs to log in like BankID for Sweden and NemID/MittID for Denmark to make the sign-in and sign-up process fast and smooth.          ",
          isOpen: false,
        },
        {
          key: 7,
          title: "What is Assessment and why everyone has to do that?",
          data: "We made this assessment tool to make sure that you are eligible for your desired Visa or residence permit. At the end of your assessment process, you would receive your Result. Positive-Negative-Not Sure which gives us a better image for further proceeding.          ",
          isOpen: false,
        },
        {
          key: 8,
          title: "How can I use the assessment tool?",
          data: "On our website, you can find an Assessment button which leads you to the page of assessment, where you can do a self-assessment for your desired relocation route.          ",
          isOpen: false,
        },
        {
          key: 9,
          title: "Do you have any office here in Copenhagen,Denmark?",
          data: "Yes, Every Friday we are available in Smedeland 7 1. Sal 2600 Glostrup, Denmark, you can book online appointment.          If you want to sell your car, you can list it on our website and you will get its best value. Along with advertising your car, we can also help you navigate through the entire",
          isOpen: false,
        },
        {
          key: 10,
          title: "Do I need to pay any fee for consultation?",
          data: "Yes, We charge a one-time appointment fee of 1000 Kr which we might adjust once you choose any of our services.          ",
          isOpen: false,
        },
      ]);
    
      const toggleAccordion = (accordionkey) => {
        const updatedAccordions = accordions.map((accord) => {
          if (accord.key === accordionkey) {
            return { ...accord, isOpen: !accord.isOpen };
          } else {
            return { ...accord, isOpen: false };
          }
        });
    
        setAccordion(updatedAccordions);
      };
  return (
    <>
      <Navbar />
      <Banner_Page title={"FAQs"} />

      <section className=" tw-mt-44">
       <div className="container tw-py-5">
        <div className="row g-5">
            <div className="col-md-7">
                <div>
                    <span>WHAT WE OFFER</span>
                    <h2>Do You Have <strong className=" tw-text-blue">Questions ?</strong> </h2>
                </div>
              <div className=" tw-pt-5">
              {accordions.map((accordion) => (
          <Accordion
            key={accordion.key}
            title={accordion.title}
            data={accordion.data}
            isOpen={accordion.isOpen}
            toggleAccordion={() => toggleAccordion(accordion.key)}
          />
        ))}
              </div>
            </div>
            <div className="col-md-5">

                <div className="  tw-bg-gray-dark tw-p-10">
                   <p className=" tw-text-4xl tw-text-white">
Can't <strong>Find</strong> The <strong>Answers ?</strong></p>
                    <form className=" tw-pt-2">
                        <div className="row g-2">
                            <div className="col-md-12">
                                <Input placeholder={'Your Name'} className={' tw-bg-white tw-py-3.5 tw-rounded-none  tw-w-full'} />
                            </div>
                            <div className="col-md-12">
                                <Input placeholder={'Email Id'} className={' tw-bg-white tw-py-3.5 tw-rounded-none  tw-w-full'} />
                            </div>
                            <div className="col-md-12">
                                <Input placeholder={'Cell phone'} className={' tw-bg-white tw-py-3.5 tw-rounded-none  tw-w-full'} />
                            </div>
                            <div className="col-md-12 tw-pt-2">
                                <textarea  rows={6}  className="  tw-w-full  tw-outline-none tw-bg-white   tw-p-2.5 " placeholder="Message"></textarea>
                            </div>
                            <div className="col-md-12">
                                <Button label={'Submit Request'} className={' tw-rounded-full  tw-bg-blue tw-text-white tw-w-full tw-py-3'} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
       </div>
      </section>

      <Footer />
    </>
  );
};

export default FAQs;
