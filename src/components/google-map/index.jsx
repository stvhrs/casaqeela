import PropTypes from "prop-types";
import GoogleMapReact from 'google-map-react';

const GoogleMap = ({
    lat,
    lng,
    zoom,
    options,
}) => {
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBNVGKvHr8B_iQqWvQmW_xvQ02AjZhZBMM" }}
                defaultCenter={{lat, lng}}
                defaultZoom={zoom}
            >
                <Marker
                    lat={lat}
                    lng={lng}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
};

GoogleMap.propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    zoom: PropTypes.number,
    options: PropTypes.shape({}) 
}

GoogleMap.defaultProps = {
    lat: -7.4193895,
    lng: 110.8155274,
    zoom: 20,
};

export default GoogleMap;

const Marker = ({ text }) => <div className="map-marker"><img src={`${process.env.PUBLIC_URL + "/assets/img/icon-img/2.png"}`} alt={text}/></div>;