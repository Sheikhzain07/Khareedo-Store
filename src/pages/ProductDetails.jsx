import React, { useState, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import TitleOfApp from "../components/titleApp/TitleOfApp";
import products from "../assets/data/products";
import { useParams } from "react-router-dom";
import CommonSection from "../components/UI/CommonSection";
import "../styles/productDetails.css";
import { motion } from "framer-motion";
import ProductsList from "../components/UI/ProductsList";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

function ProductDetails() {
  const [tab, setTab] = useState("desc");
  // const [rating, setRating] = useState(null);

  const reviewUser = useRef("");
  const reviewMsg = useRef("");

  const dispatch = useDispatch();

  const { id } = useParams();
  const product = products.find((ele) => ele.id === id);

  const {
    productName,
    imgUrl,
    reviews,
    description,
    shortDesc,
    price,
    avgRating,
    category,
  } = product;

  const relatedProducts = products.filter((ele) => ele.category === category);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success("Add to Cart");
  };
  return (
    <TitleOfApp title={productName}>
      <CommonSection title={productName} />

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <div>
                <img src={imgUrl} alt="imageDetails" />
              </div>
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-3 mb-3">
                  <div>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-half-s-line"></i>
                    </span>
                  </div>
                  <p>
                    (<span>{avgRating}</span> Ratings)
                  </p>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <span className="product__price">₹ {price}</span>
                  <span>Category: {category.toUpperCase()}</span>
                </div>
                <p className="mt-3">{shortDesc}</p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  onClick={addToCart}
                  className="buy__btn"
                >
                  Add to Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col>
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6
                  onClick={() => setTab("desc")}
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                >
                  Description
                </h6>
                <h6
                  onClick={() => setTab("rev")}
                  className={`${tab === "rev" ? "active__tab" : ""}`}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review mt-5">
                  <div className="review__wrapper">
                    <ul>
                      <h4>Zain</h4>
                      {reviews?.map((ele, idx) => {
                        return (
                          <li key={idx}>
                            <span>{ele.rating} (rating)</span>
                            <p>{ele.text}</p>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="review__form">
                      <h4>Tell your Experience</h4>
                      <form action="" onSubmit={handleSubmit}>
                        <div className="form__group">
                          <input
                            type="text"
                            ref={reviewUser}
                            placeholder="Enter your name"
                          />
                        </div>

                        <div className="form__group rating__group d-flex align-items-center gap-5">
                          <span>
                            1<i class="ri-star-s-fill"></i>
                          </span>
                          <span>
                            2<i class="ri-star-s-fill"></i>
                          </span>
                          <span>
                            3<i class="ri-star-s-fill"></i>
                          </span>
                          <span>
                            4<i class="ri-star-s-fill"></i>
                          </span>
                          <span>
                            5<i class="ri-star-s-fill"></i>
                          </span>
                        </div>
                        <div className="form__group">
                          <textarea
                            ref={reviewMsg}
                            rows={4}
                            type="text"
                            placeholder="Write your Feedback"
                          />
                        </div>
                        <button type="submit" className="buy__btn">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>

            <Col lg="12" className="mt-5">
              <h2 className="related__title">You might also like</h2>
            </Col>

            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </TitleOfApp>
  );
}

export default ProductDetails;
