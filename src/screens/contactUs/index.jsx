import React from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input";
import Button from "../../components/Button";
const ContactUs = () => {
  return (
    <>
      <Navbar />
      <Banner_Page title={"CONTACT US"} />
      <div className=" sm:tw-pt-36 tw-pt-28">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4509.282465196967!2d13.02468000000001!3d55.59085300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a16677346a9f%3A0x3fffcf31a36f0521!2sAmiralsgatan%2086A%2C%20214%2037%20Malm%C3%B6%2C%20Sweden!5e0!3m2!1sen!2sus!4v1709645005178!5m2!1sen!2sus" width="100%" height="450" style={{border:"0;"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      
      <section>
        <div className="container    tw-py-14 tw-bg-white">
            <div className="row  g-5">
                <div className="col-md-4">
                  <div className="card border-0">
                     <div className=" tw-bg-gray-dark p-4">

                      <p className=" tw-text-white m-0 tw-font-semibold tw-text-2xl">Sweden Office:</p>
                      <p className=" tw-text-white tw-pt-3">Amiralsgatan 86A 214 37 Malmö, Sweden
 
</p>

<p className=" tw-text-base tw-font-semibold m-0 tw-text-white">Denmark Office:</p>

<p className=" tw-text-white">Roskildevej 30B, 2620 Albertslund, Denmark
 
 </p>




 <p className=" tw-text-white m-0 tw-font-semibold tw-text-2xl">Quick Contact:</p>
  

<p className=" tw-text-white m-0 tw-pt-3">info@swedenrelocators.se
 
 </p>
<p className=" tw-text-white m-0">Technical Issues:
 
 </p>
<p className=" tw-text-white m-0">support@swedenrelocators.se
 
 </p>
 


                      </div>   

                      <div className=" tw-bg-blue tw-flex tw-gap-3 px-4 tw-py-9">
                         <div>
                         <div className=" tw-w-10 tw-h-10 tw-rounded-full    tw-border  tw-border-white  tw-flex tw-justify-center tw-items-center">
                    <i className="fa fa-phone m-0 tw-text-white" />
                  </div>
                         </div>
                         <div>
                         <p className=" tw-text-white m-0 tw-font-semibold">+46 723 276 276
 
 </p>
 <p className=" tw-text-white tw-font-semibold m-0">+46 102 146 276
 
 </p>
 <p className=" tw-text-white tw-font-semibold m-0">+45 53 766 276
 
 </p>
                         </div>
                      </div>
                  </div>
                </div>
                <div className="col-md-8">
                <div className="section-title">
                  <div className="title-header">
                    <span>Why Choose Us</span>
                    <h2>
                    Get In 
                      <strong>Touch?</strong>
                    </h2>
                  </div>
                </div>

                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <Input  placeholder={'Your Name'} type={'text'} className={' tw-bg-[#F5FAFF]   tw-w-full tw-py-3.5 tw-rounded-xl tw-px-3 '} />
                    </div>
                    <div className="col-md-6">
                    <Input  placeholder={'Your Name'} type={'text'} className={' tw-bg-[#F5FAFF]   tw-w-full tw-py-3.5  tw-rounded-xl tw-px-3'} />
                    </div>
                    <div className="col-md-6">
                    <Input  placeholder={'Phone Number'} type={'text'} className={' tw-bg-[#F5FAFF]   tw-w-full tw-py-3.5  tw-rounded-xl tw-px-3'} />
                    </div>
                    <div className="col-md-6">
                    <Input  placeholder={'Subject'} type={'text'} className={' tw-bg-[#F5FAFF]   tw-w-full tw-py-3.5  tw-rounded-xl tw-px-3'} />
                    </div>
                    <div className="col-md-12">
                      <textarea rows={6} className="tw-bg-[#F5FAFF]   tw-w-full tw-py-3.5  tw-rounded-xl tw-px-3"></textarea>
                    </div>
                    <div className="col-md-12">
                      <Button label={' Submit Request!'} className={' tw-text-gray-dark hover:tw-bg-gray-dark hover:tw-text-white tw-font-bold  tw-w-full py-3 tw-rounded-sm tw-border tw-border-gray-dark'} />
                    </div>
                  </div>
                </form>
                </div>
            </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
