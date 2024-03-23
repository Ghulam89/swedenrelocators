import React, { useEffect, useState } from "react";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { MdClose } from "react-icons/md";
import Banner_Page from "../../components/Common/Banner_Page";
import { LiaAngleRightSolid } from "react-icons/lia";
import gallery1 from "../../assets/images/g1.jpg";
import gallery2 from "../../assets/images/g2.jpeg";
import gallery3 from "../../assets/images/g3.jpeg";
import gallery4 from "../../assets/images/g4.jpeg";
import gallery5 from "../../assets/images/g5.jpeg";
import gallery6 from "../../assets/images/g6.jpeg";

import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";
import Modal from "../../components/Modal";

const Gallery = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const allProduct = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ];

  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? allProduct?.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === allProduct?.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  const goToSlide = (index) => {
    setCurr(index);
  };

  const [isModalSlider, setIsModalSlider] = useState(false);

  const openSlider = () => {
    setIsModalSlider(true);
  };

  const closeSlider = () => {
    setIsModalSlider(false);
  };

  return (
    <>
      <Navbar />
      <Banner_Page title={"GALLERY"} />
      <section className=" md:tw-mt-36 tw-mt-48">
        <div className="container-fluid ">
          <div className="row g-5">
            <div className="col-md-8    tw-py-10 tw-bg-white">
              <div className="row tw-pt-6  tw-px-10">
                <div className="col-lg-12">
                  <div className=" tw-grid  tw-gap-0.5 tw-grid-cols-5">
                    <div>
                      <img
                        onClick={openSlider}
                        src={gallery1}
                        className=" tw-w-full"
                        alt=""
                      />
                    </div>
                    <div>
                      <img src={gallery2} className=" tw-w-full" alt="" />
                    </div>
                    <div>
                      <img src={gallery3} className=" tw-w-full" alt="" />
                    </div>
                    <div>
                      <img src={gallery4} className=" tw-w-full" alt="" />
                    </div>
                    <div>
                      <img src={gallery5} className=" tw-w-full" alt="" />
                    </div>
                    <div>
                      <img src={gallery6} className=" tw-w-full" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4   tw-bg-[#F5FAFF]">
              <div className="  tw-pr-10 tw-pb-12">
                <div className=" tw-bg-white tw-mt-12 tw-p-5 tw-shadow-lg">
                  <div className=" tw-flex tw-gap-3 tw-mt-3">
                    <p className=" tw-h-8 tw-w-1  tw-bg-blue"></p>
                    <h5 className="  ">Categories</h5>
                  </div>

                  <p className=" tw-text-black tw-pt-5">Media & News</p>
                </div>

                <div className=" tw-bg-white tw-mt-8 tw-p-5 tw-shadow-lg">
                  <div className=" tw-flex tw-gap-3 tw-mt-3">
                    <p className=" tw-h-8 tw-w-1  tw-bg-blue"></p>
                    <h5 className="  ">Meta</h5>
                  </div>

                  <ul className=" tw-p-0">
                    <li className=" tw-gap-2 tw-flex tw-items-center">
                      {" "}
                      <LiaAngleRightSolid className=" tw-text-sm" />{" "}
                      <p className=" tw-m-0 tw-text-black tw-pt-2">Log in</p>
                    </li>
                    <li className=" tw-gap-2 tw-flex tw-items-center">
                      {" "}
                      <LiaAngleRightSolid className=" tw-text-sm" />{" "}
                      <p className=" tw-m-0 tw-text-black tw-pt-2">
                        Entries-feed
                      </p>
                    </li>
                    <li className=" tw-gap-2 tw-flex tw-items-center">
                      {" "}
                      <LiaAngleRightSolid className=" tw-text-sm" />{" "}
                      <p className=" tw-m-0 tw-text-black tw-pt-2">
                        Comments feed
                      </p>
                    </li>
                    <li className=" tw-gap-2 tw-flex tw-items-center">
                      {" "}
                      <LiaAngleRightSolid className=" tw-text-sm" />{" "}
                      <p className=" tw-text-black tw-pt-2">WordPress.org</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        className={" tw-w-full h-[90vh] bg-transparent"}
        isOpen={isModalSlider}
        onClose={closeSlider}
      >
        {/* Modal Content */}
        <div className="">
          <div className=" tw-mx-auto">
            <div className="tw-overflow-hidden tw-w-full  tw-h-[75vh] tw-relative">
              <div
                className="  tw-transition-transform tw-ease-out tw-duration-500 tw-h-screen	"
                style={{ transform: `tw-translateX(-${curr * 100}%)` }}
              >
                {allProduct?.map((image, i) => {
                  return (
                    <div className="tw-flex-none tw-w-full tw-h-full">
                      <img
                        src={image}
                        alt=""
                        className="tw-w-full  tw-cursor-pointer tw-h-full tw-object-contain"
                      />
                    </div>
                  );
                })}
              </div>

              <button
                onClick={prev}
                className=" tw-w-12 tw-h-16 tw-shadow  tw-absolute tw-left-0 tw-top-56 tw-flex  tw-justify-center tw-items-center tw-bg-white/80 tw-text-gray-800 hover:tw-bg-white"
              >
                <TfiAngleLeft size={20} className="" />
              </button>
              <button
                onClick={next}
                className=" tw-w-12 tw-h-16  tw-absolute tw-right-0 tw-top-56 tw-flex tw-justify-center tw-items-center tw-shadow tw-bg-white/80 tw-text-gray-800 hover:tw-bg-white"
              >
                <TfiAngleRight size={20} />
              </button>
              {/* </div> */}
            </div>
          </div>
        </div>

        <div className=" tw-p-4 tw-absolute -tw-top-4  tw-right-0 tw-flex tw-justify-between tw-items-center">
          <MdClose
            className="  tw-text-white"
            onClick={() => setIsModalSlider(false)}
            size={25}
          />
        </div>
      </Modal>

      <Footer />
    </>
  );
};

export default Gallery;
