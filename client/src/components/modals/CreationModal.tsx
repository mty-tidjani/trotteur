import React, { useEffect, useState } from 'react';
import { MarketItemType } from '../../_types/model';
import { BaseModal } from './BaseModal';
import { http } from '../../_utils/http';

import './CreationModal.scss';
import { baseUrl, MARKET_ITEMS } from '../../_utils/end.points';

type CreationModalProps = {
  edit?: MarketItemType;
  show: boolean;
  onClose: () => void;
  onDone: (item: MarketItemType) => void;
};

type CreateState = {
  title: string,
  price: number,
}
export const CreationModal: React.FC<CreationModalProps> = ({
  show,
  onClose,
  edit,
  onDone,
}) => {
  const [state, setState] = useState<CreateState>({ title: '', price: 0});

  const [file, setFile] = useState<{
    file: File|null|undefined,
    src: string|undefined
  }>();
  const [errors, setErrors] = useState({
    price: false,
    title: false,
    file: false
  })

  useEffect(() => {
    setState({
      title: edit?.title ? edit.title : '',
      price: edit?.price ? edit.price : 0
    })
  }, [edit])

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price } = state;
    const errs: any = {}; 
    errs.price = !price || price < 0;
    errs.title = !title.trim();
    errs.file = !file?.src && !edit?.url;

    setErrors(errs);

    if (errs.file || errs.title || errs.price) return;

    sendData();
    //Validate data
  }


  const sendData = () => {
    const fd = new FormData();
    if (file?.file) {
      const f: any = file.file;
      fd.append('file', f, f.filename)
    }
    fd.append('price', String(state.price))
    fd.append('title', state.title );
    fd.append('_id', edit?._id || '');

    if (edit?._id) {
      // put
      http.put(MARKET_ITEMS, fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      }).then(res => {
        onDone(res.data.result);
      }).catch(err => {
        // Todo do semthing with this error
      })
    }else{
      http.post(MARKET_ITEMS, fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      }).then(res => {
        onDone(res.data.result);
      }).catch(err => {
        // Todo do semthing with this error
      });
    }
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
            value={state.title}
            onChange={(e) => setState({...state, title: e.target.value})}
            type="text"
            id="title2"
            name="title2"
            autoComplete="off"
          />
          {errors.title && <span className="danger">You must give a title</span>}
        </div>

        <div className="input_group">
          <label htmlFor="price">Price *</label>
          <input
            value={state.price}
            onChange={(e) => setState({...state, price: Number(e.target.value)})}
            type="number"
            id="price"
            name="price"
            autoComplete="off"
          />
          {errors.price && <span className="danger">You must give it a price</span>}
        </div>

        <div className="form_group">
          <div className="image_preview">
            {file?.src && <img src={file.src} alt="" />}
            {!file?.src && edit?.url && <img src={baseUrl + edit.url} alt="" />}
          </div>
          <input type="file" name="images" id="img_up" hidden
          accept="image/x-png,image/gif,image/jpeg"
          onChange={(e) => {
            const src = URL.createObjectURL(e.target.files?.item(0))
            setFile({ file: e.target.files?.item(0), src})
          }} />
          <button
            type="button"
            className="file_btn"
            onClick={() => document.getElementById('img_up')?.click()}
          >
            Upload Image
          </button>
          {errors.file && <span className="danger"> {"<-"} Click here to upload an image</span>}
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
