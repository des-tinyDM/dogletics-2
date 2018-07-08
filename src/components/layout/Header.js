import React from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/bclogo.png";
import { connect } from "react-redux";
import { addToCart, getCart } from "../../ducks/cartReducer";
import './Header.css'

const Header = props => {
  console.log(props);
  return (
    <div>

      <div className="logoContainer">
        <img src={logo} />
      </div>
      <div className="symmetry">
        <Link className="navlink other" to="/">
          Shop
        </Link>
        <Link className="navlink sports" to="/sports">
          Sports
        </Link>
        <Link className="navlink contact" to="/orders">
          Orders
        </Link>
        <Link className="navlink about" to="/about">
          About Us
        </Link>
        <Link className="navlink contact" to="/contact">
          Contact
        </Link>
      </div>
      <nav>
        {props.user && props.user.first_name ? (
          <a className="navlink login" href={process.env.REACT_APP_LOGOUT}>
            <div>
              <p>Logout</p>
            </div>
          </a>
        ) : (
            <a className="navlink login" href={process.env.REACT_APP_LOGIN}>


              Login


            </a>
          )}
        <Link className="navlink cart" to="/cart">
          {/* <p>Cart</p> */}
          <i className="fas fa-shopping-cart" />
          {props.cart[0] ? (
            <div>
              <p>{props.cart.length}</p>
            </div>
          ) : (
              <div>
                <p>0</p>
              </div>
            )}
        </Link>
      </nav>
    </div>

  );
};
const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    cart: state.cartReducer.cart
  };
};
export default connect(
  mapStateToProps,
  { addToCart }
)(Header);
