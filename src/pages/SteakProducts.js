import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";
import { getSteakProducts, sortAsc } from '../redux/actions/products';
import { addToCart } from '../redux/actions/cart';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import _ from 'underscore'
import ProductCard from '../components/molecules/productCard';
import Cart from './Cart';

const styleBeerCards = {
   display: "flex",
  "flex-wrap": "wrap",
  "padding-left": 0,
  "justify-content": "space-between"
}

class SteakProducts extends Component {
  state = {
    items: Array.from({ length: 20 }),
    allProducts: [],
    pageNumber: 1,
    bottom: false,
    sortedProducts: [], 
    dataLength: 20,
    open: false
  };

 
   onSwitch = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  componentDidMount() {
    const { getSteakProducts} = this.props;

    getSteakProducts({pageNumber: 1, foodType: 'steak'});
  } 

  fetchMoreData = () => {
    const { getSteakProducts } = this.props;

    this.setState({pageNumber: this.state.pageNumber + 1})
    getSteakProducts({pageNumber: this.state.pageNumber, foodType: 'steak'});
  };
  
   srted =(products) => {
    var sortedAsc = _.sortBy(products, 'name');
    console.info('sorted', sortedAsc)
    this.state.allProducts = sortedAsc;
    console.info('allProducts sorted', this.state.allProducts)
   // return sortedAsc

   this.setState({allProducts: sortedAsc})
  };

  render() {
    const { products, addToCart, sortAsc }  = this.props;
    return (
      <div> 
      <div> 
      <span>abv</span> <span onClick={() =>sortAsc()}>asc</span>&nbsp;<span onClick={() => this.srted(products)}>dec</span>
        &nbsp; &nbsp;
        <span>name</span> <span onClick={() =>sortAsc()}>asc</span>&nbsp;<span onClick={() => this.srted(products)}>dec</span>
        <br/>
        <br/>

        <SwipeableDrawer docked  anchor="bottom" open={this.state.bottom} onClose={this.toggleDrawer('bottom', false)} onOpen={this.toggleDrawer('bottom', true)}>
          <div style={{height: 200, backgroundColor: 'black', color: 'white'}} tabIndex={0} role="button" onClick={this.toggleDrawer('bottom', false)} onKeyDown={this.toggleDrawer('bottom', false)}>
            <Cart />
          </div>
        </SwipeableDrawer>

        <InfiniteScroll
          dataLength={products === undefined ? 20 : products.length }
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          
          <div style={styleBeerCards} >
           {products && products.map((product, index) => (
            <ProductCard 
              id={product.id}
              name={product.name} 
              src={product.image_url} 
              tagline={product.tagline} 
              abv={product.abv} 
              description={product.description} 
              food_pairing={product.food_pairing} 
              addToCart={addToCart}
            />
          ))}
        </div>
        </InfiniteScroll>
        <hr/>
        <hr/>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
     products: state.products.getSteakProducts.products,
  };
}

export default connect(mapStateToProps,{addToCart,  getSteakProducts, sortAsc })(SteakProducts);
