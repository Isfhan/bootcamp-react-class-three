import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header itemOne="Home" itemTwo="News" itemThree="About" />
      <Content heading="Welcome To React-News App" />
      <Footer copyright="2020" founder="Isfhan Ahmed" />
    </div>
  );
}

export default App;
