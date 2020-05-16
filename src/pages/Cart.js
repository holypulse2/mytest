import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  removeFromCart} from '../redux/actions/cart';
import { getTotal, getCartProducts} from '../redux/reducers';

class Cart extends Component {
  constructor(props){
    super(props);
    this.cartItems = this.cartItems.bind(this);
  }

  cartItems(products){
    const { removeFromCart } = this.props;
    return products.length <= 0 ?
      <em>Empty cart</em> :
      products.map(product =>
        <div>
          {product.name} &nbsp;&nbsp;
          £{product.abv} &nbsp;&nbsp; 
          <span onClick={() => removeFromCart(product.id)}> del </span>
        </div>
       );
  }

  render() {
    const {products, total } = this.props;
    
    return (
      <div>
        <h3>Your Cart</h3>
        <div>{this.cartItems(products)}</div>
        <p>Total: &#36;{total}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: getCartProducts(state),
    total: getTotal(state),
  };
}

export default connect(mapStateToProps,{ removeFromCart })(Cart)
