import React from "react";
import blog1 from "../../assets/images/single-img-04.png";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import Banner_Page from "../../components/Common/Banner_Page";
import { LiaAngleRightSolid } from "react-icons/lia";
import profile from "../../assets/images/profile.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Button from "../../components/Button";
import Input from "../../components/Input";
const BlogDetails = () => {
  return (
    <>
      <Navbar />
      <Banner_Page title={"5 Swedish Foods You Must Try"} />
      <section className=" md:tw-mt-36 tw-mt-48">
        <div className="container-fluid ">
          <div className="row g-5">
            <div className="col-md-8    tw-py-10 tw-bg-white">
              <div className="row tw-pt-6   md:tw-px-10 tw-px-2 ">
                <div className="col-lg-12">
                  {/* featured-imagebox-post */}
                  <div className=" tw-shadow-lg">
                    <div className=" tw-relative">
                      <img
                        width={720}
                        height={630}
                        className="img-fluid"
                        src={blog1}
                        alt="image"
                      />
                    </div>
                    <div className=" tw-p-4">
                      <p className=" tw-text-gray">
                        Are you planning to visit Sweden in the near future?
                        Sweden has scrumptious and unique dishes and recipes
                        that you must try while you visit. Swedish food is more
                        than just fish, coffee, or meatballs. With a diet rich
                        in proteins, whole grains, and omega-3, Swedish food has
                        been hailed for its amazing health benefits. Being a
                        visitor or foreigner, it can be difficult for you to
                        find the food items and places in Sweden as most of the
                        people eat at home. The restaurant culture in Sweden is
                        much more different than in other countries. If you want
                        to try some traditional and finger-licking Swedish food,
                        then you must look for these 5 delicious dishes from
                        Sweden:
                      </p>
                      <div>
                        <p className=" tw-text-gray">1. Herring/Sill</p>
                        <p className=" tw-text-gray">
                          This will be the dish that you will either love or
                          hate depending upon your taste buds. There are a lot
                          of varieties of sills and you can even eat pickled or
                          fried herrings. Pickled Swedish herring is a classic
                          Swedish dish derived from the times when preserving
                          was the only way to get through the winter months. It
                          is now an important part of all three basic
                          traditional celebrations; Christmas, Easter, and
                          off-course midsummer/midsummer.
                        </p>
                        <p className=" tw-text-gray">
                          The pickling juice used to cook herring is made from
                          vinegar, salt, spices, and water. No matter what type
                          of herring you will see in the menu, it will be
                          generally served with boiled potato, finely chopped
                          chives, and gräddfil.
                        </p>

                        <p className=" tw-text-gray">
                          The pickling juice used to cook herring is made from
                          vinegar, salt, spices, and water. No matter what type
                          of herring you will see in the menu, it will be
                          generally served with boiled potato, finely chopped
                          chives, and gräddfil.
                        </p>

                        <p className=" tw-text-gray">2. Falukorv</p>
                        <p className=" tw-text-gray">
                          This dish is a firm favorite among kids of all ages
                          across Sweden. Falukorv’s origin can be traced back to
                          the sixteenth century when Falu copper mines used
                          horse and ox skin to make strong ropes to pullover the
                          copper ores. At first, the meat was simply salted and
                          smoked to make this dish. When the Germans came into
                          the mines, then Swedes learn to make sausage out of
                          meat. Now falukorv is made out of meat and pork by
                          boiling it, frying it, roasting it in cream or
                          grilling it. This is served with rice, mashed potatoes
                          or macaroni depending upon your choice.
                        </p>

                        <p className=" tw-text-gray">3. Kroppkakor</p>
                        <p className=" tw-text-gray">
                          Hearty mashed potato dumplings with mushroom fillings
                          are known as kroppkakor. There are many different
                          versions of kroppkakor all over the country and have
                          different names. Potatoes and flour are mixed and then
                          wrapped by the dough and pork. Potatoes can be used
                          either raw or boiled depending upon your choice. These
                          are most commonly served with melted butter, double
                          cream, different sauces, and milk.
                        </p>

                        <p className=" tw-text-gray">4. Raggmunk</p>
                        <p className=" tw-text-gray">
                        Raggmunk is the name of a Swedish dish made of potato pancakes. These pancakes, however, cannot be cooked using new potatoes as these potatoes don’t contain enough starch to hold the pancake together. This dish is mostly cooked in winters so this is not an issue. The butterier and crispier the pancake is around the edges, the better it will be in taste. The trick to this is not to spread the batter too thinly. If you will add some diced onion in it, then it will be called “French” potato pancake.


                        </p>

                        <p className=" tw-text-gray">5. Crayfish
</p>
                        <p className=" tw-text-gray">
                        August in Sweden is known for the Crayfish season and people host crayfish parties with amazing décor. Get stuck in, rip off the claws and suck out the delicious juices. The crayfish are usually boiled in a brine bath with a lot of spices and crown dill. All you need then is Västerbotten cheese pie, soft bread, cold beer, snaps, crispbread and you’re good to go!



                        </p>
                        <p className=" tw-text-gray">
                        As the month of August start, the shops are full of all kind of crayfish from different countries but Swedes prefer the Swedish signal crayfish. Besides this, both Chinese and Turkish crayfish are also good.





                        </p>
                        <hr  className=" tw-border-gray" />

                        <div  className=" tw-flex tw-items-center  tw-justify-between">
                            <div>
                            <Button label={'Visa'}  className={' tw-bg-[#F5FAFF] tw-py-1 tw-rounded-sm  hover:tw-bg-blue hover:tw-text-white border tw-border-gray'}  />
                            </div>
                            <div>
                                <ul className=" tw-flex tw-gap-4">
                                    <li  className="  tw-flex tw-justify-center hover:tw-bg-blue hover:tw-border-blue hover:tw-text-white tw-items-center tw-border-gray-dark tw-border tw-h-8 tw-w-8 tw-rounded-full" >
                                        <a  href="#">
                                        <FaFacebookF className="  tw-text-gray-dark" />
                                        </a>
                                    </li>
                                    <li  className="  tw-flex tw-justify-center hover:tw-bg-blue hover:tw-border-blue hover:tw-text-white tw-items-center tw-border-gray-dark tw-border tw-h-8 tw-w-8 tw-rounded-full" >
                                        <a  href="#">
                                        <FaTwitter className="  tw-text-gray-dark" />
                                        </a>
                                    </li>
                                    <li  className="  tw-flex tw-justify-center hover:tw-bg-blue hover:tw-border-blue hover:tw-text-white tw-items-center tw-border-gray-dark tw-border tw-h-8 tw-w-8 tw-rounded-full" >
                                        <a  href="#">
                                        <FaInstagram className="  tw-text-gray-dark" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className=" tw-pt-10">
                            <h3>Leave a Reply</h3>
                            <p className="">Your email address will not be published.</p>
                            <form>
                              <div className="row ">
                              <div className="col-md-12">
                                <textarea rows={6} className=" tw-border tw-border-gray-light  tw-rounded-md tw-w-full" ></textarea>
                              </div>
                              <div className="col-md-4">
                                <Input placeholder={'Name (required)'} className={' border tw-rounded-none tw-py-3 tw-w-full'} />
                              </div>
                              <div className="col-md-4">
                                <Input placeholder={'Email (required)'} className={' border tw-rounded-none tw-py-3 tw-w-full'} />
                              </div>
                              <div className="col-md-4">
                                <Input placeholder={'Website'} className={' border tw-rounded-none tw-py-3 tw-w-full'} />
                              </div>
                              <div>
                                <div className=" tw-flex  tw-gap-3">
                                    <Input type={'checkbox'} className={''} />
                                    <p className=" tw-text-gray tw-m-0 tw-pt-2">Save my name, email, and website in this browser for the next time I comment.</p>
                                </div>
                                <p  className=" tw-text-gray tw-pt-4">Please enter an answer in digits:</p>
                              </div>
                              <div className="col-md-12">
                                <Input  label={'2 x 5='} className={' border tw-rounded-none tw-py-3 tw-w-full'} />
                              </div>
                              <div className="col-md-12 tw-pt-6">
                                <Button label={'Post Comment'} className={' tw-border tw-rounded-full tw-py-2 tw-font-semibold tw-border-gray-dark'} />
                              </div>
                              </div>
                            </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* featured-imagebox-post end*/}
                </div>
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

export default BlogDetails;
