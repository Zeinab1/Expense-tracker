import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomExpense from './components/IncomExpense';
import TransactionList from "./components/TransactionList";
import AddTransction from "./components/AddTransction";

import {GlobalProvider} from './context/GlobalState'
import './App.css';

const App = () => {
  // intial state
// const [initialState] = useState ( {
//   transactions : [
//         { id: 1, text: 'Flower', amount: -20 },
//         { id: 2, text: 'Salary', amount: 300 },
//         { id: 3, text: 'Book', amount: -10 },
//         { id: 4, text: 'Camera', amount: 150 }
//       ] 
// }
// );
//create context
 //const GlobalContext = createContext(initialState);
  return (
    <GlobalProvider>
      <Header/>

      <div className="container">
        <Balance/>
        <IncomExpense/>
        <TransactionList/>
        <AddTransction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
