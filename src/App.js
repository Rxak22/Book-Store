import React from 'react'
import Nav from './component/Nav';
import Containt from './component/Containt';
import Footer from './component/Footer';
import { CardProvider } from './context/CardContext';

function App() {
  return (
    <>
      <CardProvider>
        <Nav />
        <Containt />
        <Footer />
      </CardProvider>
    </>
  );
}

export default App;
