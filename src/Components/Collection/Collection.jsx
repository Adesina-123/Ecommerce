import React from 'react';
import './Collection.scss';

const Collection = ({id, imageUrl, price, name}) => (
  <div className="collection-item">
    <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);
export default Collection;
