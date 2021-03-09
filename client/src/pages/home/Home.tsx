import React, { useEffect, useState } from 'react';
import { CreationModal } from '../../components/modals/CreationModal';
import { MarketItem } from '../../components/MarketItem';
import { MarketItemType } from '../../_types/model';

import './Home.scss';
import ViewItemModal from '../../components/modals/ViewItemModal';
import Lnk from '../../components/Lnk';
import { http } from '../../_utils/http';
import { MARKET_ITEMS } from '../../_utils/end.points';

const HomePage: React.FC = () => {
  const [modal, setModal] = useState<{ show: boolean; edit?: MarketItemType }>({
    show: false,
  });
  const [view, setView] = useState<{ show: boolean; item?: MarketItemType }>({
    show: false,
  });
  const [items, setItems] = useState<MarketItemType[]>([]);

  const getItems = () => {
    fetch('http://localhost:4040/api/marketitems')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setItems(res.result);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getItems();

    const evnt = () => {
      const dropdowns = document.getElementsByClassName('drop_down');
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    };

    window.addEventListener('click', evnt);

    return () => window.removeEventListener('click', evnt);
  }, []);

  const deleteItem = (_id: string) => {
      http.delete(MARKET_ITEMS + '/' + _id).then(res => {
          if (res.data.success) {
            setItems(items.filter((x) => x._id !== _id));
          }
      })
  }

  return (
    <>
      <main id="index_main_">
        <title>Home Page</title>
        <ul className="items_list">
          <div className="market_item_i">
            <div className="add_new">
            <Lnk onClick={() => setModal({ show: true })}>
              <span>+ Créer une nouvelle offre</span>
            </Lnk>
            </div>
          </div>
          {items.map((item, i) => (
            <MarketItem
              key={i}
              marketItem={item}
              onEdit={() => setModal({ edit: item, show: true })}
              onDelete={() => deleteItem(item._id)}
              onView={() => {
                setView({ show: true, item });
              }}
            />
          ))}
        </ul>
      </main>

      <CreationModal
        onClose={() => setModal({ show: false, edit: undefined })}
        onDone={(item) =>  {
            const index = items.findIndex(x => x._id == item._id);
            if (index >= 0) {
                items[index] = item;
            }else{
                items.push(item);
            }
            setItems(items);
            setModal({ show: false, edit: undefined })
        }}
        show={modal.show}
        edit={modal.edit}
      />
      <ViewItemModal
        show={view.show}
        onClose={() => setView({ show: false, item: undefined })}
        marketItem={view.item}
      />
    </>
  );
};

export default HomePage;
