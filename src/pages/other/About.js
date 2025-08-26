import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";

const About = () => {
  let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO
        titleTemplate="About us"
        description="Casaqeela"
      />
      <LayoutOne >
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "About us", path: process.env.PUBLIC_URL + pathname }
          ]}
        />


     
<img src="/assets/About Us-1.jpg" style={{ width: '100%', height: 'auto', display: 'block' }} alt="" />
  <img src="/assets/About Us-2.jpg" style={{ width: '100%', height: 'auto', display: 'block' }} alt="" />
  <img src="/assets/About Us-3.jpg" style={{ width: '100%', height: 'auto', display: 'block' }} alt="" />
  <img src="/assets/About Us-4.jpg" style={{ width: '100%', height: 'auto', display: 'block' }} alt="" />

        {/* story section */}
        <div className="story-container">
{/* 
          <div className="text-container">
            <h2>Our story</h2>
            <p>
              Tikamoon was created in Lille by a small team with an
              enterprising spirit. From the start, we wanted to manage all the
              links in the chain so that we could offer our customers
              high-quality and long-lasting furniture at the best possible prices.
            </p>
            <a href="/our-commitments">Our commitments</a>
          </div>
          <div className="image-container">
            <img src="/assets/about.jpg" style={{ width: '100%', height: 'auto', display: 'block' }} alt="" />
          </div> */}
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default About;
