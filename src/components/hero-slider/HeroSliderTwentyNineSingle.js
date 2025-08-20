import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HeroSliderTwentyNineSingle = ({ data }) => {
  const isVideo = data.image && data.image.endsWith(".mp4");

  return (

    <div
    
    >
      {isVideo ? (
        <div className="image-gallery">
          <video autoPlay muted loop  style={{ width: "100%", height: "auto" }}>
            <source
              src={process.env.PUBLIC_URL + data.image}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
    <img 
      src={process.env.PUBLIC_URL + data.image} 
      alt="Story" 
      style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }} 
    />
  )}
    </div>
  );
};

HeroSliderTwentyNineSingle.propTypes = {
  data: PropTypes.shape({})
};

export default HeroSliderTwentyNineSingle;
