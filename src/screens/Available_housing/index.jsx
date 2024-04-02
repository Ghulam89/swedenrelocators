import React from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import Tabs from "../../components/Tabs";
import { Button } from "bootstrap";
import Img from "../../assets/images/rent1.jpeg";
import san from '../../assets/images/san.webp'
import Carousel from "../../components/property/Carousel";
const Available_housing = () => {
  const tabData = [
    {
      title: "Apartments",
      content: (
        <>
          <div className=" tw-flex md:tw-flex-row  tw-shadow-xl tw-bg-white p-4 tw-rounded-lg tw-flex-col tw-w-full  tw-gap-4">
            <div className=" md:tw-w-[45%] tw-w-full ">
              <Carousel/>
              
            </div>
            <div className=" md:tw-w-[65%]  w-[100%]">
              <div className=" tw-text-gray-dark ">
              
                 
                  ADDRESS: SKOLGATAN 2 LGH 1402, 22361 LUND, LUND, SWEDEN
               
              </div>

              <div>
                <div className="  tw-py-4 tw-gap-4  tw-flex  md:tw-flex-row tw-flex-col tw-w-full tw-justify-between">
                  <ul className=" tw-flex tw-flex-col tw-gap-2 tw-w-full p-0 w-[50%]">
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-font-semibold">
                        Rent:
                      </p>
                      <button className=" tw-bg-blue tw-text-sm tw-py-0.5  tw-font-normal tw-text-white tw-w-44 tw-rounded-sm">
                        23000
                      </button>
                    </li>
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-font-semibold">
                        Rooms:
                      </p>
                      <button className=" tw-bg-blue tw-text-sm tw-py-0.5  tw-font-normal tw-text-white tw-w-44 tw-rounded-sm">
                        3
                      </button>
                    </li>
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-font-semibold">
                        Floor:
                      </p>
                      <button className=" tw-bg-blue tw-text-sm tw-py-0.5  tw-font-normal tw-text-white tw-w-44 tw-rounded-sm">
                        4
                      </button>
                    </li>

                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-font-semibold">
                        People can Stay:
                      </p>
                      <button className=" tw-bg-blue tw-text-sm tw-py-0.5  tw-font-normal tw-text-white tw-w-44 tw-rounded-sm">
                        4
                      </button>
                    </li>
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-font-semibold">
                        Contract Type:
                      </p>
                      <button className=" tw-bg-blue tw-text-sm tw-py-0.5  tw-font-normal tw-text-white tw-w-44 tw-rounded-sm">
                        First Hand
                      </button>
                    </li>
                  </ul>

                  <ul className=" p-0 tw-w-full tw-flex   tw-flex-col tw-gap-2  w-[50%]">
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-font-semibold">
                        Available From:
                      </p>
                      <button className=" tw-bg-blue tw-text-sm tw-py-0.5  tw-font-normal tw-text-white tw-w-44 tw-rounded-sm">
                        2024-02-19
                      </button>
                    </li>
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-font-semibold">
                        Rentout Duration:
                      </p>
                      <button className=" tw-bg-blue tw-text-sm tw-py-0.5  tw-font-normal tw-text-white tw-w-44 tw-rounded-sm">
                        2 Years
                      </button>
                    </li>
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-font-semibold">
                        Property Type:
                      </p>
                      <button className=" tw-bg-blue tw-text-sm tw-py-0.5  tw-font-normal tw-text-white tw-w-44 tw-rounded-sm">
                        Own Property
                      </button>
                    </li>
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-font-semibold">
                        Deposit Required:
                      </p>
                      <button className=" tw-bg-blue tw-text-sm tw-py-0.5  tw-font-normal tw-text-white tw-w-44 tw-rounded-sm">
                        Yes
                      </button>
                    </li>
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-font-semibold">
                        Deposit For:
                      </p>
                      <button className=" tw-bg-blue tw-text-sm tw-py-0.5  tw-font-normal tw-text-white tw-w-44 tw-rounded-sm">
                        2 Months
                      </button>
                    </li>
                  </ul>
                </div>

                <p className=" m-0 tw-text-primary tw-font-extrabold">
                  BASIC NECESSITIES
                </p>

                <div className="  tw-py-4   tw-flex tw-w-full tw-justify-between">
                  <ul className=" tw-flex tw-flex-col tw-gap-1 tw-w-full p-0 w-[50%]">
                    <hr className=" tw-m-0  tw-border-gray" />
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray">Furnished:</p>
                      <button className=" tw-text-black ">Flexible</button>
                    </li>
                    <hr className=" tw-m-0  tw-border-gray" />

                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray">Electricity:</p>
                      <button className=" tw-text-black ">Included</button>
                    </li>
                    <hr className=" tw-m-0  tw-border-gray" />
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray">Pets:</p>
                      <button className=" tw-text-black ">Allowed </button>
                    </li>
                    <hr className=" tw-m-0  tw-border-gray" />

                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray">Internet:</p>
                      <button className=" tw-text-black ">Included </button>
                    </li>
                    <hr className=" tw-m-0  tw-border-gray" />
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray">Heat Water:</p>
                      <button className=" tw-text-black ">Included </button>
                    </li>
                    <hr className=" tw-m-0  tw-border-gray" />
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray">Washing Machine:</p>
                      <button className=" tw-text-black ">Available </button>
                    </li>
                    <hr className=" tw-m-0  tw-border-gray" />
                  </ul>

                  <ul className=" tw-flex tw-flex-col tw-gap-1 tw-w-full p-0 w-[50%]">
                    <hr className=" tw-m-0  tw-border-gray" />
                    <li className="  tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-pl-4">Balcony/Terrace:</p>
                      <button className=" tw-text-black ">Available</button>
                    </li>

                    <hr className=" tw-m-0  tw-border-gray" />

                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-pl-4">Parking:</p>
                      <button className=" tw-text-black ">Not Included</button>
                    </li>
                    <hr className=" tw-m-0  tw-border-gray" />
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-pl-4">Smoking:</p>
                      <button className=" tw-text-black ">Allowed </button>
                    </li>

                    <hr className=" tw-m-0  tw-border-gray" />
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-pl-4">Lift:</p>
                      <button className=" tw-text-black ">Available </button>
                    </li>
                    <hr className=" tw-m-0  tw-border-gray" />
                    <li className=" tw-w-full tw-flex tw-items-center tw-justify-between">
                      <p className=" m-0 tw-text-gray tw-pl-4">	Dishwasher:</p>
                      <button className=" tw-text-black ">Available
 </button>
                    </li>
                  
                  </ul>
                </div>

                <div className=" tw-flex tw-justify-between ">
                  <div>
                    <p className=" tw-m-0 tw-text-gray  text-sm">
                      Apartment Id: 475
                    </p>
                    <p className=" tw-m-0 tw-text-gray  text-sm">
                      Apartment Status: Available
                    </p>
                  </div>
                  <div>
                    <p className=" tw-m-0 tw-text-gray  text-sm">
                      Uploaded Date: 2024-01-17
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    { title: "Villas", content: <>
    
    <div className=" tw-bg-blue tw-rounded-md tw-px-4  tw-text-white tw-py-3.5 tw-flex tw-justify-center">
                  <p className=" tw-m-0 tw-font-semibold">
                    {" "}
                    NO VILLAS AVAILABLE.
                  </p>
                </div>


    </> },
    { title: "Radhus", content: <>
      
      <div className=" tw-bg-blue tw-rounded-md tw-px-4  tw-text-white tw-py-3.5 tw-flex tw-justify-center">
                  <p className=" tw-m-0 tw-font-semibold">
                    {" "}
                    NO RADHUS AVAILABLE.
                  </p>
                </div>
    </> },
    { title: "Shared Rooms", content: <>
       <div className=" tw-bg-blue tw-rounded-md tw-px-4  tw-text-white tw-py-3.5 tw-flex tw-justify-center">
                  <p className=" tw-uppercase tw-m-0 tw-font-semibold">
                    {" "}
                    NO Shared Rooms AVAILABLE.
                  </p>
                </div>
    </> },
    { title: "Shared Beds", content: <>
     <div className=" tw-bg-blue tw-rounded-md tw-px-4  tw-text-white tw-py-3.5 tw-flex tw-justify-center">
                  <p className=" tw-uppercase tw-m-0 tw-font-semibold">
                    {" "}
                    NO Shared Beds AVAILABLE.
                  </p>
                </div>
    </> },
  ];
  const defaultTab = "Apartments";

  return (
    <>
      <Navbar />
      <Banner_Page title={"HOUSING SOLUTIONS"} />

      <div className="  tw-bg-[#f5f8fb]">
        <div className="  md:tw-mt-36 tw-mt-44">
          <div className="container tw-py-12">
            <div className=" tw-relative">
              <Tabs tabs={tabData} defaultTab={defaultTab} />
            </div>

            <div className=" tw-flex md:tw-flex-row   tw-gap-2 tw-flex-col  tw-my-4  tw-justify-end tw-items-center">
             
              <div className="md:tw-w-[25%]  tw-w-[100%] ">
                <button className=" tw-uppercase  tw-rounded-md tw-bg-primary tw-text-white tw-font-semibold tw-py-3.5 tw-px-12 tw-w-full">
                  Submit interest
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Available_housing;
