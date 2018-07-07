import React from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/bclogo.png";
import { StyledHeader } from "../styled/Containers";
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
              <div>
                <p>Login</p>
              </div>
            </a>
          )}
        <Link className="navlink cart" to="/cart">
          {/* <p>Cart</p> */}
          <i className="fas fa-shopping-cart" />
          {props.cart[0] ? (
            <ItemsInCart>
              <h1>{props.cart.length}</h1>
            </ItemsInCart>
          ) : (
              <ItemsInCart>
                <h1>0</h1>
              </ItemsInCart>
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

const ItemsInCart = styled.div`
        /* border: 1px solid black; */
        height: 60px;
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 3vh;
        right: 6.3vw;
  & h1 {
        height: 40px;
      width: 40px;
      font-size: 48px;
      align-self: center;
      line-height: 40px;
      border-radius: 50%;
    }
  `;
