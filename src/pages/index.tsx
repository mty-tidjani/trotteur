import React from 'react';
import { MarketItem } from '../components/MarketItem';
import { marketItems } from '../_utils/faker';
import './index.scss';


const IndexPage: React.FC = () => {
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
