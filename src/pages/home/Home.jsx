import React from 'react'

import { Articles, Header, ServicesPreview, Subscribe } from '../../containers';

import './home.css';

const Home = () => (
  <>
    <div className="header__bg">
      <Header />
    </div>
    
    <div className='page-container'>
      <Articles />
      <Subscribe />
      <ServicesPreview />
    </div>
  </>
)

export default Home