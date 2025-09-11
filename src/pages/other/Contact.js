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
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Contact", path: process.env.PUBLIC_URL + pathname }
          ]}
        />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
           
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.9606572967454!2d110.8157318!3d-7.4194105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a0e7170b05fcb%3A0xc93f3c5926038d58!2sJl.%20Solo%20-%20Purwodadi%2C%20Dusun%20II%2C%20Karangjati%2C%20Kec.%20Kalijambe%2C%20Kabupaten%20Sragen%2C%20Jawa%20Tengah%2057275!5e0!3m2!1sid!2sid!4v1726060800000!5m2!1sid!2sid"
                style={{ width: "100%", height: "400px", border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
          
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

                  <a href="https://share.google/vmeWvuJu7YRdkPW09" target="_blank" rel="noopener noreferrer" class="contact-link">
                    <div class="single-contact-info">
                      <div class="contact-icon">
                        <i class="fa fa-map-marker"></i>
                      </div>
                      <div class="contact-info-dec">
                        <p>Office & Workshop</p>
                        <p>Jl. Imam Bonjol Gg. 5, Kabayanan I, Kragilan, Kec. Gemolong, Kab. Sragen, Jawa Tengah, 57274</p>
                      </div>
                    </div>
                  </a>

                  <a href="https://share.google/U8gZaO3RGheQszaSH" target="_blank" rel="noopener noreferrer" class="contact-link">
                    <div class="single-contact-info">
                      <div class="contact-icon">
                        <i class="fa fa-map-marker"></i>
                      </div>
                      <div class="contact-info-dec">
                        <p>Workshop 1</p>
                        <p>Jl. Solo - Purwodadi, Dusun II, Karangjati, Kec. Kalijambe, Kabupaten Sragen, Jawa Tengah 57275</p>
                      </div>
                    </div>
                  </a>


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
