import React from 'react'
import AmazonCard from './AmazonCard'
import EbayCard from './EbayCard'
import CromaCard from './CromaCard'
import Flipkart from './FlipkartCard'
import InfibeamCard from './InfibeamCard'
import TataCliq from './TataCliqCard'
import ShopCluesCard from './ShopCluesCard'



function CardComponent() {
  return (
    <div className="Card">
        <header>
        <AmazonCard/>
        <EbayCard/>
        <CromaCard/>
        <Flipkart/>
        <InfibeamCard/>
        <TataCliq/>
        <ShopCluesCard/>
       </header>
    </div>
  );
}

export default CardComponent
