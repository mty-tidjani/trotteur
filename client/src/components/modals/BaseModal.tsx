import React, { useEffect } from 'react';
import { MarketItemType } from '../../_types/model';
import './BaseModal.scss';

type BaseModalProps = {
  edit?: MarketItemType;
  show: boolean;
  onClose: () => void;
  static?: boolean;
  title?: string;
  className?: string;
};

export const BaseModal: React.FC<BaseModalProps> = ({
  show,
  onClose,
  children,
  title,
  className,
}) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add('modal');
    } else {
      document.body.classList.remove('modal');
    }
  }, [show]);

  if (!show) return <></>;

  return (
    <div className={'modal_base ' + (className ? className : '')}>
      <div className="back_drop" onClick={onClose} />
      <div className="modal_content">
        <div className="modal_header">
          <h3 className="title">{title}</h3>
          <button className="close_btn" onClick={onClose}>
            x
          </button>
        </div>
        <div className="modal_body">{children}</div>
      </div>
    </div>
  );
};
