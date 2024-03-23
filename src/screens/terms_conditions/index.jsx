import React, { useState } from "react";
import Banner_Page from "../../components/Common/Banner_Page";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
const Terms_conditions = () => {
  return (
    <>
      <Navbar />
      <Banner_Page title={"TERMS & CONDITIONS"} />

      <section className=" tw-mt-44">
        <div className="container tw-py-5">
          <div className="row">
            <div className="col-md-12">
              <h5>1. Team and Services</h5>

              <p className=" tw-text-gray m-0">
                <strong>1.1</strong> We work in teams to offer you the expertise
                and resources required for each assigned application. At the
                beginning of an assignment, we usually agree on the scope of
                desired services as well as the people who will work with your
                application. The scope can then be changed, increased, or
                decreased and we may need to change people in the team.
              </p>
              <p className=" tw-text-gray m-0">
                <strong>1.2</strong> In order to develop personal relationships
                and our understanding of Relocation activities with clients, the
                advisor is appointed as customer support. Customer support has
                the overall responsibility for our services to you. There will
                also be one adviser responsible for our work in each individual
                application on the backend. This may be advisory advice on what
                you will get on your client portal.
              </p>
              <p className=" tw-text-gray m-0">
                <strong>1.3 </strong> According to the assigned application
                there is an agreement with the current legal entity within
                SWEDEN RELOCATORS AB & our partner program consultant. We accept
                your application as an assignment for the company and not for an
                individual adviser. This also applies if there is the express or
                implied intention that the work will be performed by one or more
                specific persons. All company advisors and other persons
                employed or hired by the company on partner programs are covered
                by these terms and these persons shall under no circumstances
                have any individual liability towards you unless otherwise
                provided by mandatory law.
              </p>
              <p className=" tw-text-gray m-0">
                <strong>1.4</strong> In accordance with these terms, all issues
                within a business statement shall be deemed to be an end
                assignment, even if it involves several related companies,
                handled by different teams within the company or outside of the
                company. There are no guarantees we provided for any sort of
                application and assignment by any means for positive decisions.
                We as individuals and teams work hard on your application and
                assignment to get success in a positive direction. It is the
                client’s choice whether he/she is satisfied with our experience
                and wants to get our services under defined conditions.
              </p>

              <hr className=" tw-border-gray" />

              <h5>2. ARRANGEMENTS AND COSTS </h5>

              <p className=" tw-text-gray m-0">
                <strong>2.1 </strong> We strive to provide services for
                attractive fees, we will provide you with an estimate of our fee
                at the start of the assignment or application and, depending on
                the nature of the assignment, we can also agree on a single
                budget or another fee arrangement. For a different type of
                Relocations services, we have a fixed fee that clients have to
                pay when they signed the Power of Attorney with the company. We
                are not providing any kind of guarantees to our clients as our
                job is to provide you right assistance. Even due to a lack of
                documents or false documentation if your application is rejected
                by the authorities we will cost the client a regular application
                fee. We do have our online portal where you can see the service
                charges for your desired assignment. Sign up on our website and
                see the section Service charges.
              </p>
              <p className=" tw-text-gray m-0">
                <strong>2.2</strong> If we do not agree on a fixed application
                otherwise, our fees will be determined on the basis of a number
                of factors such as (i) time, (ii) the skill and experience
                required by the assignment, (iii) the values that the assignment
                relates to, (iv) any risks for the company, ( v) time pressure
                and (vi) achieved results.
              </p>
              <p className=" tw-text-gray m-0">
                <strong>2.3</strong> In addition to our fees, travel and other
                expenses may be charged. Normally, the client will limit his
                expenses and wants to charge us in the same application area,
                but wants to add other services too, so we may be charged extra
                on top of the already paid invoice.
              </p>

              <hr className=" tw-border-gray" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Terms_conditions;
