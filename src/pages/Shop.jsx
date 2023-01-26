import React from "react";
import CommonSection from "../components/UI/CommonSection";
import TitleOfApp from "../components/titleApp/TitleOfApp";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";
function Shop() {
  return (
    <TitleOfApp title="Shop">
      <CommonSection title={"Products"} />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select>
                  <option value="">Filter by Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="Chair">Chair</option>
                  <option value="Mobile">Mobile</option>
                  <option value="Wireless">Wireless</option>
                  <option value="Watch">Watch</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select>
                  <option value="">Sort by Price</option>
                  <option value="lth">Low to High</option>
                  <option value="htl">High to Low</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search__box">
                <input type="text" placeholder="Search..." />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </TitleOfApp>
  );
}

export default Shop;
