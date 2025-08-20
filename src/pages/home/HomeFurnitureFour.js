import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import CountDownFive from "../../wrappers/countdown/CountDownFive";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import ImageSliderTwo from "../../wrappers/image-slider/ImageSliderTwo";
import TabProductNineteen from "../../wrappers/product/TabProductNineteen";
import VideoPopupTwo from "../../components/video-popup/VideoPopupTwo";
import FeatureIconSeven from "../../wrappers/feature-icon/FeatureIconSeven";
import CategoryFiveGrid from "../../wrappers/category/CategoryFiveGrid";
import HeroSliderTwentyNine from "../../wrappers/hero-slider/HeroSliderTwentyNine";
import VideoPlayer from '../../components/VideoPlayer';  // Import the VideoPlayer component

const HomeFurnitureFour = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Home Living"
        description="Casaqeela Furniture"
      />
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
        headerPositionClass="header-absolute"
      >
        {/* hero slider */}

        <HeroSliderTwentyNine />
        {/* category grid */}
        <CategoryFiveGrid spaceBottomClass="pb-70" />

        {/* feature icon */}
        <FeatureIconSeven spaceBottomClass="pb-70" />
        <VideoPlayer/>
        {/* video popup */}
        {/* <VideoPopupTwo /> */}
        {/* tab product */}
        <TabProductNineteen
          spaceTopClass="pt-95"
          spaceBottomClass="pb-100"
          category="furniture"
        />
        {/* countdown */}
      
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFurnitureFour;
