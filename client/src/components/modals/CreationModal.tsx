import React, { useState } from 'react';
import { MarketItemType } from '../../_types/model';
import { BaseModal } from './BaseModal';
import { http } from '../../_utils/http';

import './CreationModal.scss';
import { MARKET_ITEMS } from '../../_utils/end.points';

type CreationModalProps = {
  edit?: MarketItemType;
  show: boolean;
  onClose: () => void;
};

type CreateState = {
  title: string,
  price: number,
}
export const CreationModal: React.FC<CreationModalProps> = ({
  show,
  onClose,
  edit,
}) => {

  const [state, setState] = useState<CreateState>({
    title: edit ? edit.title : '',
    price: edit ? edit.price : 0
  });
  const [file, setFile] = useState<File|undefined>();

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Validate data
  }


  const sendData = () => {
    http.post(MARKET_ITEMS)
  }

  return (
    <BaseModal
      show={show}
      onClose={onClose}
      title={edit ? 'Edit Item' : 'Add Item'}
      className=""
    >
      <form
        action="#"
        onSubmit={submitForm}
        className="modal_create_edit"
      >
        <div className="input_group">
          <label htmlFor="title2">Title *</label>
          <input
            defaultValue={edit?.title}
            type="text"
            id="title2"
            name="title2"
            autoComplete="off"
          />
        </div>

        <div className="input_group">
          <label htmlFor="price">Price *</label>
          <input
            defaultValue={edit?.price}
            type="number"
            id="price"
            name="price"
            autoComplete="off"
          />
        </div>

        <div className="form_group">
          <div className="image_preview">
            {edit?.image && <img src={edit.image} alt="" />}
          </div>
          <input type="file" name="images" id="img_up" hidden />
          <button
            type="button"
            className="file_btn"
            onClick={() => document.getElementById('img_up')?.click()}
          >
            Upload Image
          </button>
        </div>

        <div className="form_group center">
          <button className="send_btn" type="submit">
            {edit ? 'Edit Item' : 'Add Item'}
          </button>
        </div>
      </form>
    </BaseModal>
  );
};
