import React from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/signing-contract.png";
const PermanentResidence = () => {
  const { id } = useParams();

  const data = [
    {
      id: 1,
      title: "Asylum",
      description:
        "You have to be in Sweden or on the Swedish border in order to apply for asylum.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-home"></i>
      ),
      Link:'/asylum'
    },
    {
      id: 2,
      title: "Family Reunification",
      description:
        "Family reunification is a recognized reason for the immigration of family members to a country.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-family"></i>
      ),
      Link:'/family-reunification'
    },
    {
      id: 3,
      title: "Personnummer Sweden",
      description:
        "The personal identification is a number that the Swedish Tax Agency assigns to person registered in Sweden.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-14"></i>
      ),

      Link:'/personnumer-sweden'
      
    },
    {
      id: 4,
      title: "CPR Number Denmark",
      description:
        "CPR stands for Det Centrale Personregister, which translates to the Civil Registration System ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-12"></i>
      ),
      Link:'/cpr-number-denmark'
      
    },
    {
      id: 5,
      title: "Work Permit",
      description:
        "Permit To Work refers to management systems used to ensure that work is done safely and efficiently.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport-11"></i>
      ),
      Link:'/work-permit'
    },
    {
      id: 5,
      title: "Business Permit",
      description:
        "Swedish business culture is open and innovative, and starting a business there is relatively simple        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 fa fa-briefcase"></i>
      ),

      Link:'/business-permit'
    
    },
    {
      id: 6,
      title: "Business Visit",
      description:
        "Foreign people who want to invest in Sweden and stay temporarily for that purpose can apply for business visa.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 themifyicon ti-map-alt"></i>
      ),
      
      Link:'/business-visit'
    },
    {
      id: 7,
      title: "Citizenship",
      description:
        "When you have lived in Sweden for a specified period and meet requirements, you can apply for Swedish citizenship.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-passport"></i>
      ),
      Link:'/citizenship'
      
    
    },
    {
      id: 8,
      title: "Study in EU",
      description:
        "If you are thinking about studying abroad, then visit Sweden. Sweden is well known for its world-class academic opportunities.          ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-graduation-hat-1"></i>
      ),
      Link:'/study-in-eu'
      
    },
    {
      id: 9,
      title: "Global Visit Visas",
      description:
        "For visiting Sweden for a short period you will need a visit visa. Sweden follows the same visa rules as others.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-travel"></i>
      ),
      Link:'/global-visit-visas'
    },
    {
      id: 10,
      title: "EEA Permits",
      description:
        "Any EU citizen getting residence in the UK according to the EU rules, can bring their family with them.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12 flaticon-contract"></i>
      ),
      Link:'/eea-permits'
    },
    {
      id: 11,
      title: "Parents EU Permit",
      description:
        "Parents of a child under 18 years who is in Sweden can move to sweden if they will live with the child.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-family-1"></i>
      ),
      Link:'/parents-eu-permit'
    },
    {
      id: 12,
      title: "Marriage & Divorce      ",
      description:
        "Getting married is beautiful. But to make sure that it will be a good experience, it is important to have legal control.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-insurance"></i>
      ),
      Link:'/marriage-divorce'
    },
    {
      id: 13,
      title: "Company Registration      ",
      description:
        "If you are planning to register your company inside Sweden, you can reach us anytime if you have some queries about it.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>
      ),
      Link:'/company-registration'
    },
    {
      id: 14,
      title: "House & Offices",
      description:
        "we offer you an easy and painless solution where you can get a place to live without any worries.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-certificate"></i>
      ),
      Link:'/house-offices'
    },
    {
      id: 15,
      title: "Appeal Cases",
      description:
        "Have you been denied? let’s take a look at your case so that the decision can hopefully be overturned.",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-reading"></i>
      ),
      Link:'/appeal-cases'
    },
    {
      id: 16,
      title: "EU Citizens Relocation",
      description:
        "Family reunification means that a family that has been split up can apply to be allowed to live together.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-passport-3"></i>
      ),
      Link:'/eu-family-reunification'
    },
    {
      id: 17,
      title: "Investment",
      description:
        "There are various opportunities for business ventures, Look for the best opportunity, grab it and do your best.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  fa fa-sitemap"></i>
      ),
      Link:'/investment'
    },
    {
      id: 18,
      title: "Direct Citizenship     ",
      description:
        "citizenship-by-investment programs provide ultra-wealthy families with the privilege of a second or third passport.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass"></i>
      ),
      Link:'/direct-citizenship-by-investments'
    },
    {
      id: 19,
      title: "Permanent Residence",
      description:
        "If you lived in Sweden for more than 5 years with the EU right of residence you can get the permanent residence permit.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-policy"></i>
      ),
      Link:'/permanent-residence'
    },
    {
      id: 20,
      title: "Golden Visa  ",
      description:
        "As a member state of the EU, They offer its residents and citizens a number of reassuring benefits.        ",
      icons: (
        <i class="   tw-ml-0 p-0 tw-text-4xl tw-text-blue tw-mb-12  flaticon-boarding-pass-2"></i>
      ),
      Link:'/golden-visa-greece-portugal'
    },
  ];



  

  return (
    <>
      <Navbar />
      <Banner_Page title={`PERMANENT RESIDENCE`} />

      <div className=" ">
        <section className="  md:tw-mt-36 tw-mt-44">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-md-8 tw-py-20 tw-bg-white">
                <div className="  md:tw-pl-32 tw-pl-3">
          
<span className=" tw-flex tw-items-center tw-gap-2"> <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> PERMANENT RIGHT OF</span>
                  <h2>
                    <strong>Residence For EU Citizens
</strong>
                  </h2>

                  <p className=" tw-text-gray">
                  If you lived in Sweden for more than 5 years with the EU right of residence you can get the permanent residence permit.



                  </p>
              

                  <div>
       

<span className=" tw-flex tw-items-center tw-gap-2"> <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> DIFFERENT WAYS FOR</span>
                  <h2>
                    <strong>Permanent Right Of Residence

</strong>
                  </h2>

                  <p className=" tw-text-gray">
                  As an EU citizen you have right of residence if you work, study, have your own company or have sufficient means to support yourself. If you have right of residence of living with someone you should live for 5 years with them. There are quite a few permits that can lead to permanent residence. Generally, you just need to spend enough time on one of the following permits.




                  </p>
                  <p className=" tw-text-gray tw-font-medium">
                  Some of these are:





                  </p>
                

                  <ul className=" tw-p-0 tw-pt-4">
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                        Standard work permit

                        </p>
                      </li>
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                        Dependent permit

                        </p>
                      </li>
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                        Guest researcher
                        </p>
                      </li>
                      <li className=" tw-flex  tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                        Doctoral student

                        </p>
                      </li>

                      <li className=" tw-flex  tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                        EU blue card

                        </p>
                      </li>
                     
                    </ul>

            <p className=" tw-text-gray">Time spent in Sweden on a student permit or on a working holiday visa does not generally count towards the time needed for permanent residence.

</p>    


<p className=" tw-text-gray">Standard work permit, EU blue card, guest researcher, and doctoral students


</p>  
<p className=" tw-text-gray">The process for obtaining permanent residence as someone holding a standard work permit, EU blue card, guest researcher, and doctoral student are relatively similar. In order to obtain permanent residence the core requirement is to have held a permit for a combined period of 4 years in Sweden (excluding time spent on student permits) during the past 7 years. The assessment of permanent residence will be made in conjunction with the extension application that is submitted. The case officer should automatically make the assessment and see if permanent residence can be granted.



</p>  
                  </div>


                  <div>
     
<span className=" tw-flex tw-items-center tw-gap-2"> <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> FOR</span>
            
                    <h2>
                      <strong>Dependents
</strong>
                    </h2>

                    <p className=" tw-text-gray">
                    For dependents, the process is a bit different. Permanent residence for dependents can only be granted either in conjunction with the main applicant being granted permanent residence (if the applications were submitted together) or if the main applicant/reference person in Sweden already has permanent residence. They cannot be granted permanent residence on their own merits as a dependent and require the main application to be granted this first




                    </p>
                 


                  </div>


                  <div className="row">
                    <div className="col-md-10 tw-mx-auto"> 
                    <img src={banner} alt="" />
                    </div>
                  </div>
                  <div>
     

<span className=" tw-flex tw-items-center tw-gap-2"> <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> PERMANENT RESIDENCE CARDS FOR</span>
                    <h2>
                      <strong>EU Citizens Family Members Who Are Non-EU Citizens

</strong>
                    </h2>

                    <p className=" tw-text-gray">
                    As a close relative of an EU citizen, when you have lived in Sweden for five years with your close relative and they have had right of residence throughout this period, you have permanent right of residence.




                    </p>
                 
                    <p className=" tw-text-gray">
                    you can apply for a permanent residence card.





                    </p>
                 


         
<span className=" tw-flex tw-items-center tw-gap-2"> <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> REQUIREMENTS FOR</span>
                    <h2>
                      <strong>Permanent Residence Card


</strong>
                    </h2>


                  </div>

                  <div>
             
<span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2"> <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> TO BE ELIGIBLE FOR</span>
                    <h2>
                      <strong>A Permanent Residence Card



</strong>
                    </h2>



                    <ul className=" tw-p-0 tw-pt-4">
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                        You should have lived in Sweden for at least five years while having a relation to the close relative who is an EU citizen

                        </p>
                      </li>
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                        Your family member should meet the requirements of permanent right of residence.

                        </p>
                      </li>
                     
                     
                    </ul>

                    <p className="  tw-text-gray">Your permanent right of residence is dependent on your family member who is an EU citizen having the right of residence for five years. Your application should specify the occupation of the EU citizen.

</p>
                    <p className="  tw-text-gray">There are also special regulations about keeping your right of residence in certain cases. Contact us for more details.



</p>
                  </div>



                  <div>
            
<span className=" tw-pt-3 tw-flex tw-items-center tw-gap-2"> <p className=" tw-m-0 tw-w-[15px]  tw-h-[1px] tw-bg-[#c2c2d3]"></p> HOWEVER, HAVING A PERMANENT</span>
                    <h2>
                      <strong>Residence Permit Does Not Entitle You To




</strong>
                    </h2>



                    <ul className=" tw-p-0 tw-pt-4">
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                        A Swedish passport

                        </p>
                      </li>
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                        To vote in the national elections

                        </p>
                      </li>
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                        Nor does it entitle you to do the military service or to exercise any military occupations

                        </p>
                      </li>
                     
                     
                    </ul>

                    <p className="  tw-text-gray">Having a Swedish citizenship (instead of a PUT) will make it a lot easier if you wish to move to another EU country. It is possible – yet more complicated – to live in another EU country with a Swedish PUT.



</p>
                    <p className="  tw-text-gray">The Swedish Migrations Board – Migrationsverket, has the right to revoke your permanent residence permit if you move to another country or spend more than one year outside of Sweden. It is therefore important to check with the Migrationsverket before you leave Sweden,if you are planning to spend more than one year abroad.





</p>
                  </div>
                
               
</div>
           

                
              </div>

              <div className="col-md-4  tw-pt-16  tw-bg-[#F5FAFF]">
                <div className="  md:tw-pr-32 tw-pr-4">
                  <ul className=" tw-pl-4 tw-flex tw-flex-col tw-gap-2.5">
                  {data?.map((item, index) => {
                      return (

                        <Link
                          to={`${item?.Link}`}
                          className="hover-effect tw-rounded-md hover:tw-bg-blue tw-bg-white tw-p-4 tw-shadow-lg tw-flex tw-justify-between tw-items-center hover:tw-text-white"
                        >
                          <p className="m-0 tw-text-gray-dark tw-font-semibold hover:tw-text-white">
                            {item?.title}
                          </p>
                          <GoTriangleRight className="tw-text-gray" />
                        </Link>

                      );
                    })}
                  </ul>
                </div>
              </div>



              
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default PermanentResidence;
