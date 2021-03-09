import React from 'react';
import './ViewItemModal.scss';
import { MarketItemType } from '../../_types/model';
import { BaseModal } from './BaseModal';

type ViewItemModalProps = {
  marketItem?: MarketItemType;
  show: boolean;
  onClose: () => void;
};

const ViewItemModal: React.FC<ViewItemModalProps> = ({
  marketItem,
  show,
  onClose,
}) => {
  return (
    <BaseModal show={show} onClose={onClose} className="item_viewer">
      <div className="">
        
        <div className="img_holder">
          <img src={marketItem?.image} alt=""/>
        </div>
        <div className="item_body">
          <div className="title">{marketItem?.title}</div>
          <div className="price">
            <strong>€ </strong>
            {marketItem?.price} €
          </div>
        </div>
      </div>
    </BaseModal>
  );
};

export default ViewItemModal;
