import PropTypes from "prop-types";
import clsx from "clsx"
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import ProductGridTen from "./ProductGridTen";
import SectionTitleSeven from "../../components/section-title/SectionTitleSeven";

const TabProductNineteen = ({
  spaceTopClass,
  spaceBottomClass,
  category,
  productTabClass,
  productGridStyleClass
}) => {
  return (
    <div className={clsx("product-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        {/* section title */}
        <SectionTitleSeven
          titleText="Products Collection"
          positionClass="text-center"
          borderClass="bottom-border"
          spaceClass="mb-30"
        />
        <Tab.Container defaultActiveKey="meja">
          <Nav
            variant="pills"
            className={clsx("product-tab-list-6 justify-content-center mb-60", productTabClass)}
          >
            <Nav.Item>
              <Nav.Link eventKey="meja">
                <h4>Meja</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="kursi">
                <h4>Kursi</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="aksesoris">
                <h4>Aksesoris</h4>
              </Nav.Link>
            </Nav.Item> <Nav.Item>
              <Nav.Link eventKey="lemari">
                <h4>Lemari</h4>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="meja">
              <div className="row">
                <ProductGridTen
                  category={"meja"}
                  type="meja"
                  limit={6}
                  spaceBottomClass="mb-25"
                  productGridStyleClass={productGridStyleClass}
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="kursi">
              <div className="row">
                <ProductGridTen
                  category={"kursi"}
                  type="kursi"
                  limit={6}
                  spaceBottomClass="mb-25"
                  productGridStyleClass={productGridStyleClass}
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="aksesoris">
              <div className="row">
                <ProductGridTen
                  category={"aksesoris"}
                  type="aksesoris"
                  limit={6}
                  spaceBottomClass="mb-25"
                  productGridStyleClass={productGridStyleClass}
                />
              </div>
            </Tab.Pane><Tab.Pane eventKey="lemari">
              <div className="row">
                <ProductGridTen
                  category={"lemari"}
                  type="lemari"
                  limit={6}
                  spaceBottomClass="mb-25"
                  productGridStyleClass={productGridStyleClass}
                />
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        <div className="view-more text-center mt-20 toggle-btn6 col-12">
          <Link
            className="loadMore6"
            to={process.env.PUBLIC_URL + "/shop-grid-standard"}
          >
            VIEW MORE PRODUCTS
          </Link>
        </div>
      </div>
    </div>
  );
};

TabProductNineteen.propTypes = {
  category: PropTypes.string,
  productTabClass: PropTypes.string,
  productGridStyleClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default TabProductNineteen;
