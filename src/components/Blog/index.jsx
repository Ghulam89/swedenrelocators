import React from "react";
import blog1 from "../../assets/images/blog/b1.png";
import blog2 from "../../assets/images/blog/b2.png";
import blog3 from "../../assets/images/blog/b3.png";
import blog4 from "../../assets/images/blog/b4.png";
import { Link } from "react-router-dom";
const Blog = () => {
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
  return (
    <>
      {/*blog_row-section*/}
      <section id="blog" className=" tw-py-8">
        <div className="container">
          {/* row */}
          <div className="row">
            <div className="col-lg-7 m-auto">
              {/* section title */}
              <div className="section-title">
                <div className="title-header tw-text-center">
                  <span>Blog Corner</span>
                  <h2 className="title">
                    In Your <strong>Inbox News</strong>
                  </h2>
                </div>
              </div>
              {/* section title end */}
            </div>
          </div>
          {/* row end */}
          {/* slick_slider */}
          <div className="row tw-pt-6 ">
            {data?.map((item, index) => {
              return (
                <Link to={`/blog_details/${item?.id}`} onClick={()=>navigate(`/blog_details/${item}`)} className="col-lg-3">
                  {/* featured-imagebox-post */}
                  <div className=" tw-shadow-xl tw-rounded-lg">
                    <div className=" tw-relative">
                      <img
                        width={720}
                        height={630}
                        className="img-fluid"
                        src={item?.image}
                        alt="image"
                      />
                      <div className=" tw-absolute tw-bg-blue  tw-px-4 tw-py-0.5 tw-rounded-md tw-top-4 tw-left-3">
                        <p className=" tw-text-white m-0">Media & News</p>
                      </div>
                    </div>
                    <div className=" tw-p-4">
                      <div className="  tw-flex tw-gap-1 tw-items-center">
                        <p className=" m-0 cmt-meta-line byline  text-md tw-border-l-2   tw-pl-2  tw-border-blue">
                          Sweden Relocators
                        </p>
                        <span className="">.</span>
                        <p className=" tw-text-gray m-0">2024-07-06</p>
                      </div>
                      <div className="post-header">
                        <div className="post-title featured-title">
                          <p className=" tw-leading-2">
                            <a
                              className="  tw-text-gray-dark tw-font-medium tw-text-lg "
                              href="blog-single.html"
                            >
                              {item?.title}
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="post-desc featured-desc">
                        <p className=" tw-text-gray">
                          There are full service engage company is to provide
                          solution for employees needs trai...
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* featured-imagebox-post end*/}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      {/*blog_row-section end*/}
    </>
  );
};

export default Blog;
