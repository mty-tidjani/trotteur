import React from 'react';
import { MarketItemType } from '../_types/model';
import './MarketItem.scss';

type MarketItemProps = {
    marketItem: MarketItemType,
}

export const MarketItem: React.FC<MarketItemProps> = ({ marketItem }) => {
  return (
    <div className="market_item_i">
      <a>
        <div className="img_container">
          <div className="img_overlay" />
          {/* <img src={marketItem.image} alt=""/> */}
          <img src={'/braaaa.jpeg'} alt=""/>
        </div>
        <div className="texts">
          <h2 className="wrap_tittle">{marketItem.title}</h2>
          <h3><strong>€ </strong>{marketItem.price} €</h3>
        </div>
      </a>
    </div>
  );
};
