
import './App.css';

import Footer from './components/Footer/Footer';
import SearchBar from './components/SearchBar/SearchBar';
import Sidebar from './components/Sidebar/Sidebar';
import Customers from "./components/Customers/Customer"
import {Routes ,Route } from 'react-router-dom'
import Page_heading from './components/Page_Heading/Page_heading';
import Dashboard from './components/Dashboard/Dashboard';
import AddNewCustomer from './components/Customers/AddNewCustomer';

function App() {
  return (
    
      <div className="App">

          
          <div className='main'>
          <Sidebar/>
          <div className='rightScreen'>
          <SearchBar />
          

          <Routes>
          <Route path='/' element={<Dashboard/>} />
            <Route path='customers' element={<Customers/>} />
            <Route path='addcustomers' element={<AddNewCustomer/>} />
          </Routes>
          <Footer />
          </div>
          </div>
          
         
      </div>    
  );
}

export default App;
