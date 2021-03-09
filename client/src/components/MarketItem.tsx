import React from 'react';
import { assets } from '../assets';
import { MarketItemType } from '../_types/model';
import { strRandom } from '../_utils/helpers';
import { baseUrl } from '../_utils/end.points';
import Lnk from './Lnk';
import './MarketItem.scss';

type MarketItemProps = {
  marketItem: MarketItemType;
  onEdit: () => void;
  onDelete: () => void;
  onView: () => void;
};

export const MarketItem: React.FC<MarketItemProps> = ({
  marketItem,
  onEdit,
  onDelete,
  onView,
}) => {
  const id = strRandom(5);
  return (
    <div className="market_item_i">
      <div className="drop_down" id={id}>
        <button
          className="menu_toggle"
          onClick={(e) => {
            setTimeout(() => {
              document.getElementById(id)?.classList.toggle('show');
            }, 100);
          }}
        >
          <img src={assets.cog} alt="" />
        </button>
        <div className="dropdown_menu">
          <Lnk onClick={onEdit}>
            <img src={assets.pen} alt="" /> Modifier
          </Lnk>
          <Lnk onClick={onDelete}>
            <img src={assets.delet} alt="" /> Supprimer deffinitivement
          </Lnk>
        </div>
      </div>
      <Lnk onClick={onView}>
        <div className="img_container">
          <div className="img_overlay" />
          <img src={marketItem.image ? marketItem.image : baseUrl + marketItem.url} alt=""/>
        </div>
        <div className="texts">
          <h2 className="wrap_tittle">{marketItem.title}</h2>
          <h3>
            <strong>€ </strong>
            {marketItem.price} €
          </h3>
        </div>
      </Lnk>
    </div>
  );
};
