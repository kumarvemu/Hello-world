import './App.css';
import Search from './Components/Payments-UI/Search';
import Transactions from './Components/Payments-UI/Transactions';
import PageHeader from './Components/Payments-UI/PageHeader';
import FindATransaction from './Components/Payments-UI/FindATransaction';
import NewTransaction from './Components/Payments-UI/NewTransaction';
import { useState } from 'react';

function App() {

  const [selectedPage, setSelectedPage] = useState("find");

  return (
    <div className="App">
      <PageHeader setSelectedPage={setSelectedPage} />
      {selectedPage === "find" && <FindATransaction />}
      {selectedPage === "new" && <NewTransaction />}
    </div>
  );
}

export default App;