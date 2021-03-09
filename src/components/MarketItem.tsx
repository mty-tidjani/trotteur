import React from 'react';
import { MarketItemType } from '../_types/model';
import { strRandom } from '../_utils/helpers';
import './MarketItem.scss';

type MarketItemProps = {
  marketItem: MarketItemType;
  onEdit: () => void
  onDelete: () => void
};

export const MarketItem: React.FC<MarketItemProps> = ({
  marketItem,
  onEdit,
  onDelete
}) => {
  const id = strRandom(5);
  return (
    <div className="market_item_i">
      <a>
        <div className="img_container">
          <div className="drop_down" id={id}>
            <button
              className="menu_toggle"
              onClick={(e) => {
                setTimeout(() => {
                  document.getElementById(id)?.classList.toggle('show');
                }, 100);
                
              }}
            >
              <img src="/cog.svg" alt="" />
            </button>
            <div className="dropdown_menu">
              <a href="#" onClick={onEdit}>
                <img src="/pen.svg" alt="" /> Modifier
              </a>
              <a href="#" onClick={onDelete}>
                <img src="/delete.svg" alt="" /> Supprimer deffinitivement
              </a>
            </div>
          </div>
          <div className="img_overlay" />
          {/* <img src={marketItem.image} alt=""/> */}
          <img src={'/braaaa.jpeg'} alt="" />
        </div>
        <div className="texts">
          <h2 className="wrap_tittle">{marketItem.title}</h2>
          <h3>
            <strong>€ </strong>
            {marketItem.price} €
          </h3>
        </div>
      </a>
    </div>
  );
};
