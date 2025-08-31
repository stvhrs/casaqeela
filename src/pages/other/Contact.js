import { Fragment } from "react"; 
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import GoogleMap from "../../components/google-map"

const Contact = () => {
  let { pathname } = useLocation();
         const latitude = -7.5146406;
  const longitude = 110.8060455;
  const zoomLevel = 11;
  
  const mapUrl = `https://www.google.com/maps/search/?q=casaqeela&ll=${latitude},${longitude}&z=${zoomLevel}`;
  return (
    <Fragment>
      <SEO
        titleTemplate="Contact"
        description="Contact page of casaqeela react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Contact", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            <div className="contact-map mb-10">
              <GoogleMap lat={ -7.4193895} lng={110.8155274} />
            </div>
            <div className="custom-row-2">
              <div className="col-12 col-lg-12 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="contact-info-dec">
                     <p>
                      
                        <a href="https://wa.me/6281325143663">
                    +62 813-2514-3663 (Fadila)
                        </a>
                      </p>  <p>
                      
                        <a href="https://wa.me/6282243431717">
                  +62 822-4343-1717 (Asnaun Novi)
                        </a>
                      </p>
                   
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-globe" />
                    </div>
                    <div className="contact-info-dec">
                      <p>
                        <a href="mailto:casaqeela@gmail.com">
                          casaqeela@gmail.com
                        </a>
                      </p>
                      <p>
                        <a href="https://www.casaqeela.com">
                          www.casaqeela.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="contact-info-dec">
                      <p>Office & Workshop
 </p>
                      <p>Jl. Imam Bonjol Gg. 5, Kabayanan I, Kragilan, Kec. Gemolong, Kab. Sragen, Jawa Tengah, 57274</p>
                    </div>
                  </div> <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="contact-info-dec">
                      <p>Workshop 1 </p>
                      <p>Jl. Solo - Purwodadi, Dusun II, Karangjati, Kec. Kalijambe, Kabupaten Sragen, Jawa Tengah 57275</p>
                    </div>
                  </div>
                 
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Contact;
