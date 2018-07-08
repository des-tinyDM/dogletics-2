import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getInventory,
  getSportInventory,
  getCategories
} from "../../../ducks/inventoryReducer";
import { getUser } from "../../../ducks/userReducer";
import { getCart, addToCart } from "../../../ducks/cartReducer";
import Swal from "sweetalert2";
import Product from "./Product";
import styled from "styled-components";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { category: "agility", numberDisplayed: 4, offset: 0 };
  }

  componentDidMount = () => {
    this.props.getInventory(
      this.state.numberDisplayed,
      this.state.numberDisplayed * this.state.offset
    );
    this.props.getCategories();
    this.props.getSportInventory("agility");
    this.props.getUser().then(() => {
      this.props.user && this.props.getCart();
    });
  };
  chooseSport = str => {
    console.log(str);
    this.props.getSportInventory(str);
    this.setState({ category: str });
  };

  chooseNumberDisplayed = num => {
    this.setState({ numberDisplayed: num, offset: 0 }, () =>
      this.props.getInventory(
        this.state.numberDisplayed,
        this.state.numberDisplayed * this.state.offset
      )
    );
  };
  choosePage = page => {
    this.setState(
      { offset: page },
      this.props.getInventory(
        this.state.numberDisplayed,
        this.state.numberDisplayed * this.state.offset
      )
    );
  };
  offsetBack = e => {
    let { offset } = this.state;

    offset === 0
      ? this.setState(({ offset }) => ({ offset: 0 }))
      : this.setState({ offset: offset - 1 }, () =>
        this.props.getInventory(
          this.state.numberDisplayed,
          this.state.numberDisplayed * this.state.offset
        )
      );
    console.log(offset);
  };
  offsetForward = e => {
    let { offset } = this.state;

    offset === 4
      ? this.setState({ offset: 4 })
      : this.setState({ offset: offset + 1 }, () => {
        this.props.getInventory(
          this.state.numberDisplayed,
          this.state.numberDisplayed * this.state.offset
        );
      });
    console.log(offset);
  };
  addToCart = (id, num) => {
    console.log(id, num);
    this.props.user
      ? this.props.addToCart(id, num)
      : Swal({
        title: "Sign up or Login!",
        confirmButtonText: "Login",
        text: "You aren't logged in. Log in to add items to your account!",
        type: "warning"
      }).then(() => {
        console.log(`redirecting...`);
        window.location.href = process.env.REACT_APP_LOGIN;
      });
  };
  render() {
    console.log(this.props);

    let categoryOptions = this.props.categories.map((cat, i) => {
      return (
        <h3
          className={`option
          ${this.state.category === cat.category && "current"}
          `}
          onClick={() => this.chooseSport(cat.category)}
        >
          {cat.category}
        </h3>
      );
    });
    return (
      <div>
        {/* <h1 className="sectionTitle">Hot Items</h1>
        <div>list of items here</div> */}
        <div>
          <div className="invHeader">
            <h1 className="sectionTitle">By Category</h1>
            <div className="options1">{categoryOptions}</div>
          </div>
          <div id="sports">
            {this.props.sportInventory &&
              this.props.sportInventory.map((product, index) => {
                return (
                  <Product
                    user={this.props.user}
                    addToCart={this.addToCart}
                    className="product"
                    key={index}
                    category={product.category}
                    description={product.description}
                    images={product.images}
                    name={product.name}
                    price={product.price}
                    company={product.company}
                    productid={product.item_id}
                  />
                );
              })}
          </div>
        </div>
        <div>
          <div className="invHeader">
            <h1 className="sectionTitle">All Inventory</h1>
            <div className="options2">
              <h3
                className={`option
                  ${this.state.numberDisplayed === 4 && "current"}
                  `}
                onClick={() => this.chooseNumberDisplayed(4)}
              >
                Show 4
              </h3>

              <h3
                className={`option
                  ${this.state.numberDisplayed === 8 && "current"}
                  `}
                onClick={() => this.chooseNumberDisplayed(8)}
              >
                Show 8
              </h3>

              <h3
                className={`option
                  ${this.state.numberDisplayed === 16 && "current"}
                  `}
                onClick={() => this.chooseNumberDisplayed(16)}
              >
                Show 16
              </h3>
            </div>
          </div>
          <div>
            <button onClick={e => this.offsetBack(e)}>
              <i className="fas fa-chevron-circle-left offsets" />
            </button>
            <div className="invDisplay" style={{ height: `${55 * this.state.numberDisplayed / 4}vh` }}>

              {this.props.inventory &&
                this.props.inventory.map((product, index) => {
                  return (
                    <Product
                      user={this.props.user}
                      addToCart={this.addToCart}
                      className="product"
                      key={index}
                      category={product.category}
                      description={product.description}
                      images={product.images}
                      name={product.name}
                      price={product.price}
                      company={product.company}
                      productid={product.item_id}
                    />
                  );
                })}
            </div>
            <button onClick={e => this.offsetForward(e)}>
              <i className="fas fa-chevron-circle-right offsets" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    inventory: state.inventoryReducer.inventory,
    sportInventory: state.inventoryReducer.sportInventory,
    loading: state.inventoryReducer.isLoading,
    error: state.inventoryReducer.error,
    cart: state.cartReducer.cart,
    cartid: state.cartReducer.cartid,
    categories: state.inventoryReducer.categories
  };
};

export default connect(
  mapStateToProps,
  {
    getInventory,
    getSportInventory,
    getUser,
    getCart,
    addToCart,
    getCategories
  }
)(Home);

<<<<<<< HEAD
const InventorySection = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  & .invHeader {
    padding: 0vh 5vw;
    height: 5vh;
    max-width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* font-size: 24px; */
    background: black;
    color: white;
    & h3 {
      text-transform: capitalize;
      &.current {
        text-decoration: underline;
      }
    }
    & .options1 {
      display: flex;
      flex-direction: row;
      width: 50vw;
      justify-content: space-between;
      /* padding:0 10vw 0 0; */
    }
    & .options2 {
      display: flex;
      flex-direction: row;
      width: 25vw;
      justify-content: space-between;
      /* padding:0 10vw 0 0; */
    }
  }
  & div {
    /* display: flex;
    flex-direction: column; */

    & .Header {
      width: 100vw;
    }
  }
`;

const Inventory = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 2vh 0;
  flex-wrap: wrap;
=======
const InventorySection = styled.div``
>>>>>>> 2f00dabfc4b10d77fe79046fde9d73901c0fafc3

const Inventory = styled.div``