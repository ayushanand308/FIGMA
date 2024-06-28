import React from 'react';
import NavBar from './NavBar';
import './App.css';
import SubNavBar from './SubNavBar';
import MainSection from './MainSection';

function App() {
  return (
    <div className="h-screen overflow-y-auto">
      <NavBar />
      <SubNavBar />
      <MainSection />
    </div>
  );
}

export default App;
