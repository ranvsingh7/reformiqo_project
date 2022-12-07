
import './App.css';

import Footer from './components/Footer/Footer';
import SearchBar from './components/SearchBar/SearchBar';
import Sidebar from './components/Sidebar/Sidebar';
import Customers from "./components/Customers/Customer"
import {Routes ,Route } from 'react-router-dom'

function App() {
  return (
    
      <div className="App">

          
          <div className='main'>
          <Sidebar/>
          <div className='rightScreen'>
          <SearchBar />

          <Routes>
            <Route path='customers' element={<Customers/>} />
          </Routes>
          <Footer />
          </div>
          </div>
          
         
      </div>    
  );
}

export default App;
