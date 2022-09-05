import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';

const DefaultLayout = () => {

  return (
    <>
        <div id="layout-wrapper">
            <Header />
            <Content />
            <Footer />
        </div>
    </>
  )
}

export default DefaultLayout
