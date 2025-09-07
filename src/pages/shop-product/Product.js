import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams, useLocation, Link } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";

const Product = () => {
  let { pathname } = useLocation();
  let { id } = useParams();
  const { products } = useSelector((state) => state.product);
  const product = products.find((product) => product.id === id);

  // Absolute product URL for structured data
  const productUrl = `https://www.fajargrafika.com/product/${product?.id}`;

  // Structured data (JSON-LD) for Google Rich Results
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product?.name,
    image: [product?.image], // must be an absolute URL
    description: product?.shortDescription,
    sku: product?.sku,
    brand: {
      "@type": "Brand",
      name: "Fajar Grafika"
    },
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: "IDR",
      price: product?.price,
      availability: "https://schema.org/InStock"
    }
  };

  return (
    <Fragment>
      <SEO
        titleTemplate={product?.name}
        description={product?.shortDescription}
      />

      {/* Inject Product schema for Google */}
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Shop Product", path: process.env.PUBLIC_URL + pathname }
          ]}
        />

        {/* product description with image */}
        {/* Wrap with Link so image/title are clickable on your site */}
        <Link to={`${process.env.PUBLIC_URL}/product/${product?.id}`}>
          <ProductImageDescription
            spaceTopClass="pt-100"
            spaceBottomClass="pb-100"
            product={product}
          />
        </Link>

        {/* related product slider */}
        <RelatedProductSlider
          spaceBottomClass="pb-95"
          category={product?.category[0]}
        />
      </LayoutOne>
    </Fragment>
  );
};

export default Product;
