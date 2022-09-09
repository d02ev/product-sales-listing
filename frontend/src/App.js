import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { AddSales } from './components/AddSales';
import { TopSales } from './components/TopSales';
import { SalesRevenue } from './components/SalesRevenue';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/addSales" element={ <AddSales/> } />
        <Route path="topSales" element={ <TopSales/> } />
        <Route path="/salesRevenue" element={ <SalesRevenue/> } />
      </Routes>
    </div>
  );
}

export default App;
