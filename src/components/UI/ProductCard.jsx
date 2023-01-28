import React from "react";
import { motion } from "framer-motion";
import "../../styles/product-card.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";

function ProductCard({ ele }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: ele.id,
        imgUrl: ele.imgUrl,
        price: ele.price,
        productName: ele.productName,
      })
    );
    toast.success("Added to the cart");
  };

  return (
    <Col lg="3" md="4">
      <div className="product__item">
        <div className="product__img">
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={ele.imgUrl}
            alt="prodImg"
          />
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name">
            <Link to={`/shop/${ele.id}`}>{ele.productName}</Link>
          </h3>
          <span>{ele.category}</span>
        </div>
        <div className="product__card-bottom d-flex p-2 align-items-center justify-content-between">
          <span className="price">₹{ele.price}</span>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <i class="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
}

export default ProductCard;
