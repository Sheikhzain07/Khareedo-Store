import React from "react";
import "../styles/cart.css";
import TitleOfApp from "../components/titleApp/TitleOfApp";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <TitleOfApp title={"Cart"}>
      <CommonSection title={"Shopping Cart"} />

      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h1 className="fs-4 text-center">No item added to the cart</h1>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((ele, idx) => {
                      return <Tr ele={ele} key={idx} />;
                    })}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotal
                  <span className="fs-4 fw-bold">₹{totalAmount}</span>
                </h6>
              </div>
              <p className="fs-6 mt-2">
                Taxes and Shipping will be calculated in checkout
              </p>
              <div>
                <button className="buy__btn w-100">
                  <Link to="/checkout">Checkout</Link>
                </button>
                <button className="buy__btn w-100 mt-3">
                  <Link to="/shop">Continue Shopping</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </TitleOfApp>
  );
}
const Tr = ({ ele }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(ele.id));
  };
  return (
    <tr>
      <td>
        <img src={ele.imgUrl} alt="cartImage" />
      </td>
      <td>{ele.productName}</td>
      <td>{ele.price}</td>
      <td>{ele.quantity}</td>
      <td>
        <motion.i
          whileTap={{ scale: 1.2 }}
          onClick={deleteProduct}
          class="ri-delete-bin-line"
        ></motion.i>
      </td>
    </tr>
  );
};

export default Cart;
