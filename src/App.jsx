import React from 'react';
import NavBar from './assets/Components/NavBar';
import './App.css';
import SubNavBar from './assets/Components/SubNavBar';
import MainSection from './assets/Components/MainSection';

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
