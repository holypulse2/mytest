import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import PizzaProducts from './PizzaProducts';
import AllProducts from './AllProducts';
import SteakProducts from './SteakProducts';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Cart from './Cart';

const styles = {
    slide: {
      margin: 5,
      minHeight: 100,
    },
};

const cartStyle = {
    'background-color': 'black',
    height: '50px',
    width: '100%',
    bottom: '0px',
    position: 'fixed',
    'z-index': '100',
    'text-align': 'center',
    'color': 'white'
}

class App extends Component {
  state = {
    index: 0,
  };

  handleChange = (event, value) => {
    this.setState({
      index: value,
    });
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };
      
  render() {
    const { index } = this.state;

    return (
        <div className="App">

       <SwipeableDrawer docked  anchor="bottom" open={this.state.bottom} onClose={this.toggleDrawer('bottom', false)} onOpen={this.toggleDrawer('bottom', true)}>
         <div style={{height: 200, backgroundColor: 'black', color: 'white'}} tabIndex={0} role="button" onClick={this.toggleDrawer('bottom', false)} onKeyDown={this.toggleDrawer('bottom', false)}>
           <Cart />
         </div>
       </SwipeableDrawer>

         <div style={cartStyle}
        > <button style={{color: 'white'}} onClick={this.toggleDrawer('bottom', true)}>cart</button>
         </div>   
        <Tabs value={index} fullWidth onChange={this.handleChange} style={styles.tabs}>
            <Tab label="All" />
            <Tab label="Pizza" />
            <Tab label="Steak" />
        </Tabs>
        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
          <div style={Object.assign({}, styles.slide)}>
           <AllProducts />
          </div>
          <div style={Object.assign({}, styles.slide)}>
            <PizzaProducts />
          </div>
          <div style={Object.assign({}, styles.slide)}>
            <SteakProducts />
          </div>
        </SwipeableViews>
        </div>
    );
  }
}

export default App;

