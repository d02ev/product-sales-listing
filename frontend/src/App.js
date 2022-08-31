import './App.css';
import { AddSalesRecord } from './components/AddSalesRecord';
import { DisplayTopSales } from './components/DisplayTopSales';
import { DisplayRecentRevenue } from './components/DisplayRecentRevenue';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            < AddSalesRecord />
          </div>
          <div className="col">
            < DisplayTopSales />
          </div>
          <div className="col">
            < DisplayRecentRevenue />
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default App;
