import React from "react";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import Banner_Page from "../../components/Common/Banner_Page";
import { LiaAngleRightSolid } from "react-icons/lia";
import profile from "../../assets/images/profile.png";
import { Link, useNavigate } from "react-router-dom";
import blog1 from "../../assets/images/blog/b1.png";
import blog2 from "../../assets/images/blog/b2.png";
import blog3 from "../../assets/images/blog/b3.png";
import blog4 from "../../assets/images/blog/b4.png";

const Blogs = () => {


  const data = [
    {
      id: 1,
      title: "5 Things To Keep In Mind If You Are Relocating To Sweden",
      des: "",
      image: blog1,
    },
    {
      id: 2,
      title: "How To Build A Successful Strat-Up In Sweden",
      des: "",
      image: blog2,
    },

    {
      id: 3,
      title: "A Guide About Student Fee And Admissions In Sweden",
      des: "",
      image: blog3,
    },
    {
      id: 2,
      title: "How To Build A Successful Strat-Up In Sweden",
      des: "",
      image: blog4,
    },
  ];


  const navigate = useNavigate();


  return (
    <>
      <Navbar />
      <Banner_Page title={"Blogs"} />
      <section className=" md:tw-mt-36 tw-mt-48">
        <div className="container-fluid ">
          <div className="row g-5">
            <div className="col-md-8    tw-py-10 tw-bg-white">
              <div className="row tw-pt-6  md:tw-px-10 tw-px-4">
                {data?.map((item,index)=>{
                  return (
                    <div className="col-lg-6">
                    {/* featured-imagebox-post */}
                    <Link to={`/blog_details/${item?.id}`}   className=" tw-shadow-lg">
                      <div className=" tw-relative">
                        <img
                          width={720}
                          height={630}
                          className="img-fluid"
                          src={item?.image}
                          alt="image"
                        />
                      </div>
                      <div className=" tw-p-4">
                        <div className="post-header">
                          <div className="post-title featured-title">
                            <p className=" tw-leading-2">
                              <a
                                className=" tw-text-black tw-font-medium tw-text-xl "
                                href="blog-single.html"
                              >
                                5 Things To Keep In Mind If You Are Relocating To
                                Sweden
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="  tw-flex tw-gap-2 tw-items-center">
                          <div className=" tw-flex tw-gap-2 tw-items-center">
                            <img
                              src={profile}
                              alt=""
                              className=" tw-rounded-full"
                            />
                            <p className="cmt-meta-line byline     tw-pl-2  tw-text-gray tw-m-0">
                              Shahid Aslam
                            </p>
                          </div>
  
                          <p className=" tw-text-gray m-0">
                            {" "}
                            <i class="fa fa-calendar-check"></i> 2024-07-06
                          </p>
                        </div>
  
                        <div className="post-desc featured-desc">
                          <p className=" tw-text-gray tw-pb-6 tw-pt-4">
                            There are full service engage company is to provide
                            solution for employees needs trai...
                          </p>
                        </div>
                      </div>
                    </Link>
                    {/* featured-imagebox-post end*/}
                  </div>
                  )
                })}
               
               
                

                
              </div>
            </div>

            <div className="col-md-4   tw-bg-[#F5FAFF]">
              <div className="  tw-pr-10">
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
      <Footer />
    </>
  );
};

export default Blogs;
