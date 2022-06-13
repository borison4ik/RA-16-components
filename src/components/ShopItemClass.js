import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShopItemClass extends Component {
  constructor(props) {
    super(props);
    this.item = props.item;
  }
  render() {
    return (
      <div className='main-content'>
        <h2>{this.item.brand}</h2>
        <h1>{this.item.title}</h1>
        <h3>{this.item.description}</h3>
        <div className='description'>{this.item.descriptionFull}</div>
        <div className='highlight-window mobile'>
          <div className='highlight-overlay'></div>
        </div>
        <div className='divider'></div>
        <div className='purchase-info'>
          <div className='price'>{`${this.item.currency}${Number.parseInt(this.item.price).toFixed(2)}`}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

ShopItemClass.propTypes = {
  item: PropTypes.object.isRequired,
};
