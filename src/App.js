import './App.css';
import Search from './Components/Payments-UI/Search';
import Transactions from './Components/Payments-UI/Transactions';
import PageHeader from './Components/Payments-UI/PageHeader';
import FindATransaction from './Components/Payments-UI/FindATransaction';
import NewTransaction from './Components/Payments-UI/NewTransaction';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './Components/Payments-UI/PageNotFound';
import { Provider } from 'react-redux';
import paymentsStore from './Components/Payments-UI/store';
import ViewTransaction from './Components/Payments-UI/ViewTransaction';


function App() {

  return (
    <Provider store={paymentsStore}>
    <BrowserRouter>
    <div className="App">
      
      <PageHeader/>
    
        <Routes>
        
          <Route path="/find" element = {<FindATransaction />} />
          <Route path="/find/:orderId" element = {<FindATransaction />} />
          <Route path="/view/:id" element = {<ViewTransaction />} />
          <Route path="/find" element = {<FindATransaction />} />
          <Route path="/new" element={<NewTransaction />} />
          <Route path="/" element={<h1>Welcome to the application</h1>} />
          <Route path="*" element={<PageNotFound />} />  
        </Routes>
        
      </div>
      </BrowserRouter>
      </Provider>
  );
}

export default App;