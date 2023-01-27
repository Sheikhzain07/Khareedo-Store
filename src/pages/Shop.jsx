import React, { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import TitleOfApp from "../components/titleApp/TitleOfApp";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";
import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";

function Shop() {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filteredData = products.filter((ele) => ele.category === "sofa");
      setProductsData(filteredData);
    } else if (filterValue === "chair") {
      const filteredData = products.filter((ele) => ele.category === "chair");
      setProductsData(filteredData);
    } else if (filterValue === "mobile") {
      const filteredData = products.filter((ele) => ele.category === "mobile");
      setProductsData(filteredData);
    } else if (filterValue === "watch") {
      const filteredData = products.filter((ele) => ele.category === "watch");
      setProductsData(filteredData);
    } else if (filterValue === "wireless") {
      const filteredData = products.filter(
        (ele) => ele.category === "wireless"
      );
      setProductsData(filteredData);
    }
  };

  const handleSearch = (e) => {
    const searchData = e.target.value;

    const searchedData = products.filter((ele) =>
      ele.productName.toLowerCase().includes(searchData)
    );

    setProductsData(searchedData);
  };

  const handleSort = (e) => {
    const myVal = e.target.value;
    if (myVal === "lth") {
      let newArr = [...productsData];
      const sortedData = newArr.sort((a, b) => {
        return a.price - b.price;
      });
      setProductsData(sortedData);
    }
    if (myVal === "htl") {
      let newArr = [...productsData];
      const sortedData = newArr.sort((a, b) => {
        return b.price - a.price;
      });
      setProductsData(sortedData);
    }
  };
  return (
    <TitleOfApp title="Shop">
      <CommonSection title={"Products"} />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option value="">Filter by Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="chair">Chair</option>
                  <option value="mobile">Mobile</option>
                  <option value="wireless">Wireless</option>
                  <option value="watch">Watch</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select onChange={handleSort}>
                  <option value="">Sort by Price</option>
                  <option value="lth">Low to High</option>
                  <option value="htl">High to Low</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center">Products not found</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </TitleOfApp>
  );
}

export default Shop;
