import React from 'react';
import NavBar from './components/NavBar';
import './index.css';
import Header from './components/Header';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <NavBar />
      <Header />

      {/* <!-- Page content --> */}
      <div className="paliwal-content" style={{ maxWidth: '1100px' }}>
        <About />
        <Menu />
        <Contact />  
      </div>
    </>
  );
};

export default App;
