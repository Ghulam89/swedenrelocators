import React from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import Our_specialization from "../../components/Our_specialization";
import { FaLongArrowAltRight } from "react-icons/fa";
const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Banner_Page title={"ABOUT US"} />
      
     <div className=" md:tw-mt-36 tw-mt-48"
     >

<section className=" tw-bg-[#F5FAFF]">
<div className="container tw-py-14">
        <div className="row">
          <div className="col-md-6">
            <span>ABOUT US
</span>
            <h2>
            Welcome To <strong>SWEDEN RELOCATORS AB</strong>
            </h2>

            <p className=" tw-text-gray"><strong>SWEDEN  RELOCATORS AB</strong>  was established in 2015.</p>

            <p className=" tw-text-gray">We offer quality guidance, and effective advice and provide information to our clients to settle down in the country. We provide solutions with Destination Services, Global Mobility Services, Immigration Services, Move Management, Intercultural Communication, Investment in Sweden, Property Management, and IT Solutions.

</p>
<p className=" tw-text-gray">We provide a portal and app-based solution for individuals and companies. Some key features of our portal and app-based solution are:

</p>
<p className=" tw-text-gray">Online application and documentation submission: Clients can submit their visa and immigration applications, as well as any required documentation, through the portal or app, making the process more efficient and convenient.

</p>
<p className=" tw-text-gray"> Account management and tracking: Clients can create an account and track the progress of their applications and requests through the portal or app.

</p>

<p className=" tw-text-gray">Housing and accommodation search: Clients can search for housing and accommodation options through the portal or app, including the ability to filter by location, price, and amenities.

</p>
<p className=" tw-text-gray">School and education search: Clients can search for schools and education options for their children through the portal or app, including the ability to filter by location, curriculum, and language.

</p>
<p className=" tw-text-gray">Digital Wallet: Clients can keep track of their expenses and invoices and make payments through the portal or app.

</p>

          </div>
          <div className="col-md-6 tw-text-end">
           <div>
           <iframe width="100%" height="315" src="https://www.youtube.com/embed/LA19eRSWrLo?si=KgsqW1Fn9sEIUD9j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           </div>
            <div className=" tw-mt-6">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/0Tj14bz8Jkc?si=Bs5wqjT5KDuDVkO3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
      </section>
     <Our_specialization/>
     </div>
       
      <Footer />
    </>
  );
};

export default AboutUs;
