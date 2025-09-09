import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { EffectFade, Thumbs } from 'swiper';
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Rating from "./sub-components/ProductRating";
import Swiper, { SwiperSlide } from "../../components/swiper";
import { getProductCartQuantity } from "../../helpers/product";
import { addToCart } from "../../store/slices/cart-slice";
import { addToWishlist } from "../../store/slices/wishlist-slice";
import { addToCompare } from "../../store/slices/compare-slice";

function ProductModal({ product, currency, discountedPrice, finalProductPrice, finalDiscountedPrice, show, onHide, wishlistItem, compareItem }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const [selectedProductColor, setSelectedProductColor] = useState(
    product.variation ? product.variation[0].color : ""
  );
  const [selectedProductSize, setSelectedProductSize] = useState(
    product.variation ? product.variation[0].size[0].name : ""
  );
  const [productStock, setProductStock] = useState(
    product.variation ? product.variation[0].size[0].stock : product.stock
  );
  const [quantityCount, setQuantityCount] = useState(1);
  const productCartQty = getProductCartQuantity(
    cartItems,
    product,
    selectedProductColor,
    selectedProductSize
  );


  const gallerySwiperParams = {
    spaceBetween: 10,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    thumbs: { swiper: thumbsSwiper },
    modules: [EffectFade, Thumbs],
  };

  const thumbnailSwiperParams = {
    onSwiper: setThumbsSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    touchRatio: 0.2,
    freeMode: true,
    loop: true,
    slideToClickedSlide: true,
    navigation: true
  };

  const onCloseModal = () => {
    setThumbsSwiper(null)
    onHide()
  }

  return (
    <Modal show={show} onHide={onCloseModal} className="product-quickview-modal-wrapper">
    <Modal.Header closeButton></Modal.Header>

    <div className="modal-body">
      <div className="row">
        <div className="col-md-5 col-sm-12 col-xs-12">
          <div className="product-large-image-wrapper">
            <Swiper options={gallerySwiperParams}>
              {product.image &&
                product.image.map((img, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className="single-image">
                        <img
                          src={process.env.PUBLIC_URL + img}
                          className="img-fluid"
                          alt="Product"
                        />
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
          <div className="product-small-image-wrapper mt-15">
            <Swiper options={thumbnailSwiperParams}>
              {product.image &&
                product.image.map((img, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className="single-image">
                        <img
                          src={process.env.PUBLIC_URL + img}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
        <div className="col-md-7 col-sm-12 col-xs-12">
          <div className="product-details-content quickview-content">
            <h2>{product.name}</h2>
           
          
            <div className="pro-details-list">
            <p dangerouslySetInnerHTML={{ __html: product.shortDescription }}></p>
            </div>

            {product.variation ? (
              <div className="pro-details-size-color">
                <div className="pro-details-color-wrap">
                  <span>Color</span>
                  <div className="pro-details-color-content">
                    {product.variation.map((single, key) => {
                      return (
                        <label
                          className={`pro-details-color-content--single ${single.color}`}
                          key={key}
                        >
                          <input
                            type="radio"
                            value={single.color}
                            name="product-color"
                            checked={
                              single.color === selectedProductColor
                                ? "checked"
                                : ""
                            }
                            onChange={() => {
                              setSelectedProductColor(single.color);
                              setSelectedProductSize(single.size[0].name);
                              setProductStock(single.size[0].stock);
                              setQuantityCount(1);
                            }}
                          />
                          <span className="checkmark"></span>
                        </label>
                      );
                    })}
                  </div>
                </div>
                <div className="pro-details-size">
                  <span>Size</span>
                  <div className="pro-details-size-content">
                    {product.variation &&
                      product.variation.map(single => {
                        return single.color === selectedProductColor
                          ? single.size.map((singleSize, key) => {
                              return (
                                <label
                                  className={`pro-details-size-content--single`}
                                  key={key}
                                >
                                  <input
                                    type="radio"
                                    value={singleSize.name}
                                    checked={
                                      singleSize.name ===
                                      selectedProductSize
                                        ? "checked"
                                        : ""
                                    }
                                    onChange={() => {
                                      setSelectedProductSize(
                                        singleSize.name
                                      );
                                      setProductStock(singleSize.stock);
                                      setQuantityCount(1);
                                    }}
                                  />
                                  <span className="size-name">
                                    {singleSize.name}
                                  </span>
                                </label>
                              );
                            })
                          : "";
                      })}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {product.affiliateLink ? (
              <div className="pro-details-quality">
                <div className="pro-details-cart btn-hover">
                  <a
                    href={product.affiliateLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            ) : (
              <div className="pro-details-quality">
               
                <div className="pro-details-cart btn-hover">
                 
                    <button
  onClick={() => window.open("https://wa.me/6282243431717", "_blank", "noopener,noreferrer")}
>
  Chat Whatsapp
</button>
                  
                </div>
                
               
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </Modal>
  );
}

ProductModal.propTypes = {
  currency: PropTypes.shape({}),
  discountedprice: PropTypes.number,
  finaldiscountedprice: PropTypes.number,
  finalproductprice: PropTypes.number,
  onHide: PropTypes.func,
  product: PropTypes.shape({}),
  show: PropTypes.bool,
  wishlistItem: PropTypes.shape({}),
  compareItem: PropTypes.shape({})
};

export default ProductModal;
