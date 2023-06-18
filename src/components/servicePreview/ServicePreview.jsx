import React from 'react';
import Feature from './feature/Feature';
import './servicePreview.css';

const ServicePreview = ({ data, img }) => (
  <div className="service">
    <h1 className="gradient__text">{data.heading}</h1>
    <div className="service-content">
      <div className="image-container">
        <img src={img} alt="prev" />
      </div> 
      <div className="features-container">
        {data.features.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  </div>
);

export default ServicePreview;
