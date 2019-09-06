import React from 'react'
import AmazonCard from './AmazonCard'
import EbayCard from './EbayCard'





function CardComponent() {
  return (
    <div className="c">
        <header>
        <AmazonCard/>
        <EbayCard/>
       </header>
    </div>
  );
}

export default CardComponent
