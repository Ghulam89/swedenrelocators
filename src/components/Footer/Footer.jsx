import React from 'react'
import footer_map from '../../assets/images/footer_map.png';
const Footer = () => {
  return (
    <>
    <>
  {/*footer start*/}
  <footer className="footer tw-bg-primary">
    <div className="first-footer tw-pt-12">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
            <div className="widget widget_text mr-25 res-991-mr-0">
              <h5 className=' tw-text-white'>About Us</h5>
              <hr  className=' tw-border-blue tw-border-2   tw-opacity-80 m-0 tw-w-7' />
              <div className="textwidget widget-text tw-mt-6">
                <p className='  tw-text-cyan-50'>
                We are Relocation Services Provider Company which deals with all sort of legal relocation to Sweden. We offers quality guidance, effective advice and provides information to our clients to settle down in the country.

                </p>

                <ul className=' p-0  tw-leading-2' >
                  <li>
                     {/* <img src={require('../assets/images/icons8-denmark.png')} alt='' /> */}
                    <p className='  m-0 tw-text-white'> REG 559025-2648</p>
                  </li>
                  <li>

                    <p className=' m-0 tw-text-white'> CVR 41200677</p>
                  </li>
                </ul>
              </div>
             
              <hr  className=' tw-border  tw-border-gray' />
              <div className="social-icons circle">
                <ul className="list-inline p-0  tw-flex tw-gap-2 cmt-textcolor-skincolor">
                  <li className="social-facebook tw-w-9 tw-h-9 tw-flex tw-justify-center tw-items-center tw-rounded-full tw-border  tw-border-blue">
                    <a
                      className=" "
                      target="_blank"
                      href="https://www.facebook.com/cymolthemes.191219"
                      rel="noopener"
                      
                    >
                      <span className="ti ti-facebook" />
                    </a>
                  </li>
                  <li className="social-twitter tw-w-9 tw-h-9 tw-flex tw-justify-center tw-items-center tw-rounded-full tw-border  tw-border-blue">
                    <a
                      className="tooltip-top"
                      target="_blank"
                      href="https://twitter.com/CymolThemes"
                      rel="noopener"
                   
                    >
                      <span className="ti ti-twitter-alt" />
                    </a>
                  </li>
                  <li className="social-instagram tw-w-9 tw-h-9 tw-flex tw-justify-center tw-items-center tw-rounded-full tw-border  tw-border-blue">
                    <a
                      className="tooltip-top"
                      target="_blank"
                      href="https://www.instagram.com/cymol_themes/"
                      rel="noopener"
                     
                    >
                      <span className="ti ti-instagram" />
                    </a>
                  </li>
                  <li className="social-google tw-w-9 tw-h-9 tw-flex tw-justify-center tw-items-center tw-rounded-full tw-border  tw-border-blue">
                    <a
                      className="tooltip-top"
                      target="_blank"
                      href="https://dribbble.com/cymol_themes"
                      rel="noopener"
                    
                    >
                      <span className="ti ti-dribbble" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
            <div className="widget widget_nav_menu clearfix">
              <h5 className="tw-text-white">Useful Links</h5>
              <hr  className=' tw-border-blue tw-border-2   tw-opacity-80 m-0 tw-w-5' />
              <ul  className='  p-0 tw-mt-6'>
              <li className=' tw-flex tw-items-center  tw-gap-2'> 
                <hr className=' tw-w-3 tw-opacity-75  tw-border-white  tw-border-2' /> 
                  <a className=' tw-text-white tw-uppercase'>about US</a>
                </li>
                <li className=' tw-flex tw-items-center  tw-gap-2'> 
                <hr className=' tw-w-3 tw-opacity-75  tw-border-white  tw-border-2' /> 
                  <a className=' tw-text-white tw-uppercase '> CONTACT US</a>
                </li>
                <li className=' tw-flex tw-items-center  tw-gap-2'> 
                <hr className=' tw-w-3 tw-opacity-75  tw-border-white  tw-border-2' /> 
                  <a className=' tw-text-white tw-uppercase '>services</a>
                </li>
                <li className=' tw-flex tw-items-center  tw-gap-2'> 
                <hr className=' tw-w-3 tw-opacity-75  tw-border-white  tw-border-2' /> 
                  <a className=' tw-text-white tw-uppercase '>GALLERY</a>
                </li>
                <li className=' tw-flex tw-items-center  tw-gap-2'> 
                <hr className=' tw-w-3 tw-opacity-75  tw-border-white  tw-border-2' /> 
                  <a className=' tw-text-white tw-uppercase '>CAREERS</a>
                </li>
                <li className=' tw-flex tw-items-center  tw-gap-2'> 
                <hr className=' tw-w-3 tw-opacity-75  tw-border-white  tw-border-2' /> 
                  <a className=' tw-text-white tw-uppercase '>BLOG</a>
                </li>
                <li className=' tw-flex tw-items-center  tw-gap-2'> 
                <hr className=' tw-w-3 tw-opacity-75  tw-border-white  tw-border-2' /> 
                  <a className=' tw-text-white tw-uppercase '>FAQs</a>
                </li>
                <li className=' tw-flex tw-items-center  tw-gap-2'> 
                <hr className=' tw-w-3 tw-opacity-75  tw-border-white  tw-border-2' /> 
                  <a className=' tw-text-white tw-uppercase '>TESTIMONIALS</a>
                </li>
                <li className=' tw-flex tw-items-center  tw-gap-2'> 
                <hr className=' tw-w-3 tw-opacity-75  tw-border-white  tw-border-2' /> 
                  <a className=' tw-text-white tw-uppercase '>TERMS & CONDITIONS</a>
                </li>
                <li className=' tw-flex tw-items-center  tw-gap-2'> 
                <hr className=' tw-w-3 tw-opacity-75  tw-border-white  tw-border-2' /> 
                  <a className=' tw-text-white tw-uppercase '>PRIVACY POLICY</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
            <div className="widget widget-recent-post clearfix">
              <h5 className="widget-title tw-text-white">Media & News</h5>
              <hr  className=' tw-border-blue tw-border-2   tw-opacity-80 m-0 tw-w-5' />
              <ul className=" p-0 tw-mt-6 ">
                <li className=' tw-flex tw-gap-4 '>
                  <a href="">
                    <img
                      className="img-fluid"
                      width={150}
                      height={150}
                      src="https://swedenrelocators.se/wp-content/uploads/2021/07/business-startup-2-150x150.png"
                      alt="post-img"
                    />
                  </a>
                  <div className=" tw-flex tw-flex-col">
                    <span className="post-date tw-text-white">
                      <i className="fa fa-calendar" />
                      Apr 06, 2020
                    </span>
                    <a className=' tw-text-white  tw-text-sm'>
                    5 Things To Keep In Mind If You Are Relocating To...
                    </a>
                  </div>
                </li>
                <li className=' tw-flex tw-mt-3 tw-gap-4'>
                  <a href="blog-single.html">
                    <img
                      className="img-fluid"
                      width={90}
                      height={90}
                      src="https://swedenrelocators.se/wp-content/uploads/2021/07/business-startup-1-150x150.png"
                      alt="post-img"
                    />
                  </a>
                  <div className=" tw-flex tw-flex-col">
                    <span className="post-date tw-text-white">
                      <i className="fa fa-calendar" />
                      Apr 06, 2020
                    </span>
                    <a className=' tw-text-white  tw-text-sm'>
                    5 Swedish Foods You Must Try
                    </a>
                  </div>
                </li>
                <li className=' tw-flex tw-mt-3 tw-gap-4'>
                  <a href="blog-single.html">
                    <img
                      className="img-fluid"
                      width={90}
                      height={90}
                      src="https://swedenrelocators.se/wp-content/uploads/2021/07/educational-books-150x150.png"
                      alt="post-img"
                    />
                  </a>
                  <div className=" tw-flex tw-flex-col">
                    <span className="post-date tw-text-white">
                      <i className="fa fa-calendar" />
                      Apr 06, 2020
                    </span>
                    <a className=' tw-text-white  tw-text-sm'>
                    5 Swedish Foods You Must Try
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
            <div className="widget contact_map clearfix">
              <h5 className="widget-title tw-text-white">Get in Touch</h5>
              <hr  className=' tw-border-blue tw-border-2   tw-opacity-80 m-0 tw-w-5' />
              <div className=" tw-mt-5">
                <img
                  width={257}
                  height={164}
                  className="img-fluid"
                  src={footer_map}
                  alt=""
                />
              </div>
              <ul className=" tw-mt-5">
                <li className=' tw-text-white tw-text-base'>
                  <i className="cmt-textcolor-skincolor fa fa-map-marker" />
                  Amiralsgatan 86E 214 37 Malmö, Sweden
                </li>
                {/* <li>
                  <i className="cmt-textcolor-skincolor fa fa-map-marker" />
                  Roskildevej 30B, 2620 Albertslund, Denmark
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="second-footer">
      <div className="container py-3 px-4">
        <div className="row  no-gutters tw-bg-blue ">
          <div className=" tw-bg-[#1A1F31] mb-4 col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <aside className="widget widget-text p-3">
              {/*featured-icon-box*/}
              <div className="tw-flex tw-gap-3">
                <div className="featured-icon">
                 
                  <div className=" tw-w-12 tw-h-12 tw-shadow-lg tw-bg-[#2A2F40]  tw-flex tw-justify-center tw-items-center">
                    <i className="fa fa-envelope m-0 tw-text-white" />
                  </div>
                </div>
                <div className="featured-content">
                  <div className="featured-title">
                    <p className=' tw-font-semibold m-0 tw-text-white'>info@swedenrelocators.se</p>
                  </div>
                  <div className="featured-desc">
                    <p className=' tw-text-white'>Drop Us a Line</p>
                  </div>
                </div>
              </div>
              {/* featured-icon-box end*/}
            </aside>
          </div>
          <div className="  col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <aside className="widget  p-3  widget-text cmt-bgcolor-skincolor">
              {/*featured-icon-box*/}
              <div className="tw-flex tw-items-center tw-gap-4">
                <div className="featured-icon ">
                  <div className=" tw-w-12 tw-h-12 tw-shadow-lg tw-bg-[#3388E3]  tw-flex tw-justify-center tw-items-center">
                    <i className="fa fa-phone m-0 tw-text-white" />
                  </div>
                </div>
                <div className="featured-content">
                  <div className="featured-title">
                    <p className=' tw-font-semibold m-0 tw-text-white'>+0 (123) 456 7890</p>
                  </div>
                  <div className="featured-desc">
                    <p className=' tw-text-white'>Call Us Now!</p>
                  </div>
                </div>
              </div>
              {/* featured-icon-box end*/}
            </aside>
          </div>
          <div className="widget-area  tw-bg-[#1A1F31] col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <aside className="widget p-3 widget-text">
              {/*featured-icon-box*/}
              <div className=" tw-flex tw-gap-3">
             
                <div className="featured-icon">
                 
                 <div className=" tw-w-12 tw-h-12 tw-shadow-lg tw-bg-[#2A2F40]  tw-flex tw-justify-center tw-items-center">
                 <i className="fa  m-0 tw-text-white fa-map-marker" />
                 </div>
               </div>
                <div className="featured-content">
                  <div className="featured-title">
                    <p className=' tw-font-semibold m-0 tw-text-white'>Amiralsgatan 86A 214 37 Malmö, Sweden</p>
                  </div>
                  <div className="featured-desc">
                    <p className=' tw-text-white'>Get Direction</p>
                  </div>
                </div>
              </div>
              {/* featured-icon-box end*/}
            </aside>
          </div>
        </div>
      </div>
    </div>
    <div className="">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className=" text-center tw-py-1">
             
              <p className=' tw-text-white tw-text-sm '>
                Copyright © 2024 &nbsp;<a href="" className=' tw-text-white'>SWEDEN RELOCATORS AB.</a> Powered By
               - <a className=' tw-text-white'  href=''>SWEDEN RELOCATORS AB</a>    - <a  className=' tw-text-white'  href=''>GLOBALVISA.EU.</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/*footer end*/}
</>

    </>
  )
}

export default Footer