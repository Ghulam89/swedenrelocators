import React from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoTriangleRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/startup-incubation.png";
import banner2 from "../../assets/images/study-material.png";
const StudyInEu = () => {
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
      title: "Direct Citizenship by Investments      ",
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
      title: "Golden Visa (Greece - Portugal)      ",
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
      <Banner_Page title={`STUDY IN EU`} />

      <div className=" ">
        <section className="  md:tw-mt-36 tw-mt-44">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-md-8 tw-py-20 tw-bg-white">
                <div className="  md:tw-px-20 tw-px-2">
                  <span>STUDY
</span>
                  <h2>
                    <strong>In Sweden</strong>
                  </h2>
                  <img src={banner} alt="" />
                  <p className=" tw-text-gray">
                  If you are thinking about studying abroad, then visit Sweden. You probably want to know why Sweden is considered as a great destination. Let me notify you, Sweden has a fascinating history and culture, global businesses, delicious food, and welcoming people; and is also well known for its world-class academic opportunities that rank among the top 100 in the world.



                  </p>
                 
                  <p className=" tw-text-gray">
                  Following are 6 reasons why Sweden is considered an ideal place to study:




                  </p>




                

                  <div>
                    <span>VISION

</span>
                    <h2>
                      <strong>Enhancement Of One’s Mind
</strong>
                    </h2>

                    <p className=" tw-text-gray">
                    Study in Sweden let you think independently and critically. It will enhance your ability to question the state of affairs by accessing information, seeking new perspectives and coming up with well-informed judgments. Because of the informal and non-hierarchical nature of Swedish society, you will be able to think creatively. Where everyone is urged to bestow their ideas and opinions. This independence of mind and letting everyone’s voice heard are the reasons why Sweden ranks among the world’s most innovative nations.



                    </p>
                   
                  </div>
                  <div>
                  

                    

                 
     <div>

     <span>RICH


</span>

                    <h2>
                      <strong>Swedish History



</strong>
                    </h2>


                    <p className=" tw-text-gray">
                    Sweden has contributed a lot to the history books, and many museums allow free entrance on a daily basis or on specially marked days throughout the year. Swedish History Museum, the largest museum in Sweden; where millions of visitors and students come to see Sweden’s foremost gold and silver treasures, and incomparable medieval art.



</p>
     <span>LANGUAGE



</span>

                    <h2>
                      <strong>Proficiency




</strong>
                    </h2>


                    <p className=" tw-text-gray">
                    Using Swedish, a rich and beautiful native language; in 2017, Swedes ranked second in the world for skills in English as an official language. As the world is getting more independent and businesses seek to extend the national and linguistic boundaries, Sweden offers a marvelous location to learn and develop your English language skills. But knowing and trying to learn a little bit of Swedish language will make much easier to open your mind to your new cultural surroundings. Also, Sweden is a car-free country with an extensive network of buses, trains, subways, trams, boats, planes, and many more that can take you anywhere you want to go.




</p>
     <span>MALMÖ




</span>

                    <h2>
                      <strong>A Coastal City





</strong>
                    </h2>


                    <p className=" tw-text-gray">
                    Malmö is among the top cities in Sweden having a free business environment and also a good place to live with outrageous rankings in housing, healthcare, and environmental quality. The University of Malmo founded in 1998, attracts above 15,000 students every year. It’s not only a global city but also a commercial hub in the South of Sweden, as part of the Öresund region. The city has attracted a wide variety of companies in the technology sector (for example bio, medical, environmental, information and communication), as well as digital media, transports, financial services, business, leisure, entertainment, and constructions. And, most importantly, the cost of an apartment in Malmo is in the 139th place of all 248 Teleport cities.





</p>


     <span>STUDYING




</span>

                    <h2>
                      <strong>And Working In Sweden






</strong>
                    </h2>


                    <p className=" tw-text-gray">
                    International students can comfortably get Sweden work permit. Unlike other countries, there’s no legal limit to the number of hours international students can work during their studies. After the completion of studies, you can apply to extend your residence permit to look for work for up to six months. (But for that learning Swedish is necessary – it’s often a job’s requirement.)






</p>


     <span>EU





</span>

                    <h2>
                      <strong>Citizen’s Right







</strong>
                    </h2>


                    <p className=" tw-text-gray">
                    Unless you are a citizen of a neighboring Nordic country, every foreigner will need to contemplate the different types of Swedish visas. When applying for a Swedish visa, you are not allowed to be in the country. This largely related to non-EU/EEA citizens and citizens of Sweden; because citizens with EU/EEA family visa Sweden have the rights of residence in Sweden and therefore can shift to the country with or without a job. However, they will need to start the Swedish visa application process if they plan to continue their stay in a country for a long time.







</p>
                    <p className=" tw-text-gray">
                    If you are thinking about relocation Sweden; want to study abroad and also interesting in traveling, then Swedes are waiting for you. They are very friendly and like traveling very much. They are habitually open to know about a new culture and also interested in hearing about international experiences.








</p>


     </div>
     <img src={banner2} alt="" />



     <span>VISA





</span>

                    <h2>
                      <strong>Requirements For Students








</strong>
                    </h2>


                    <p className=" tw-text-gray">
                    Students from the EU/EEA can study in Sweden without any visa requirements. If you are from outside the EU/EEA, you may need to obtain a student visa.








</p>


     <span>JOB MARKET






</span>

                    <h2>
                      <strong>For Graduates








</strong>
                    </h2>


                    <p className=" tw-text-gray">
                    Sweden is home to several internationally successful corporations – think Volvo, IKEA or H&M – but also to some of the most exciting startups of recent years – think Skype or Spotify. The in-ternationality of such employers as well as the high proficiency of English among Swedes make it fairly easy for qualified international graduates to get the foot in the door of the Swedish job market, even when their knowledge of Swedish is limited. Sweden’s government has also put an effort into decreasing red tape for foreign nationals looking to join the local workforce.









</p>


<div className=" row tw-pt-5">

  <div className="col-md-6">
    
  <h2>
                      <strong>Bachelor Programs




</strong>
                    </h2>

                    <p className="  tw-text-gray">Application for <b>online first admission</b> of bachelor’s regarding different programs starts from <b>16th of October to 15th of January</b> every year. After enrolling, the classes start in August.

</p>

<p className="  tw-text-gray">Application for <b>online second admission</b> of bachelor’s regarding different programs starts from <b>1st of June to 15th of August</b> of every year. The classes will start in January after enrolling.



</p>
  </div>
  <div className="col-md-6">
    
  <h2>
                      <strong>Maters Programs





</strong>
                    </h2>

                    <p className="  tw-text-gray">Application for <b>online first admission</b> of bachelor’s regarding different programs starts from <b>16th of October to 15th of January</b> every year. After enrolling, the classes start in August.

</p>

<p className="  tw-text-gray">Application for <b>online second admission</b> of bachelor’s regarding different programs starts from <b>1st of June to 15th of August</b> of every year. The classes will start in January after enrolling.



</p>
  </div>

</div>



<div>
<span>LETTER OF







</span>

                    <h2>
                      <strong>English Proficiency









</strong>
                    </h2>


                    <p className=" tw-text-gray">
                    There are no requirements of the language test such as TOEF and IELTS for the students who have studied at the university with IT-Engineering-Medical background. Students from Pakistan and India with their Swedish Kandidatexamen equivalent degree (Bachelors Hons) can provide letter of English proficiency from their Universities.



</p>
</div>



<div>
<span>ENGLISH







</span>

                    <h2>
                      <strong>Requirement










</strong>
                    </h2>


                    <p className=" tw-text-gray">
                    There are no requirements of the language test such as TOEF and IELTS for the students who have studied at the university with IT-Engineering-Medical background. Students from Pakistan and India with their Swedish Kandidatexamen equivalent degree (Bachelors Hons) can provide letter of English proficiency from their Universities.




</p>


<ul className=" tw-p-0 tw-pt-4">
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                        IELTS score of 6.5 is required.

                        </p>
                      </li>
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                        TOEFL score of 4.5 in written test is required.

                        </p>
                      </li>
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                        English Language with Proficiency Certificate from Cambridge Michigan.
                        </p>
                      </li>
                     
                      <li className=" tw-flex tw-items-center tw-gap-3">
                        <GoTriangleRight className=" tw-text-blue" />
                        <p className=" m-0 tw-text-gray">
                        Minimum score for Pearson is 47.
                        </p>
                      </li>
                     
                     
                    </ul>

                    <p className=" tw-text-gray">Use our <b>Student Assessment tool </b> to find out if you are eligible for admission in Sweden.

</p>
</div>
                
</div>
</div>
           

                
              </div>

              <div className="col-md-4  tw-pt-16  tw-bg-[#F5FAFF]">
                <div className="  tw-pr-10">
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

export default StudyInEu;
