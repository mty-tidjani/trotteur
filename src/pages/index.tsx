import React, { useEffect } from 'react';
import { MarketItem } from '../components/MarketItem';
import { marketItems } from '../_utils/faker';
import './index.scss';


const IndexPage: React.FC = () => {
  useEffect(() => {
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
    
    window.addEventListener('click', evnt );

    return window.removeEventListener('click', evnt);
  }, []);

  return (
    <main id="index_main_">
      <title>Home Page</title>
      <ul className="items_list">
        {marketItems.map((link, i) =>  <MarketItem key={i} marketItem={link} /> )}
      </ul>
    </main>
  );
};

export default IndexPage;
