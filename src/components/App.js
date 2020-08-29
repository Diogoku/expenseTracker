import React from "react";

// REDUX
import { Provider } from "react-redux";
import store from "../store";

// COMPONENTS
import Header from "./Header";
import Balance from "./Balance";
import IncomeExpenses from "./IncomeExpenses";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";

// CSS
import "../css/default.css";

// FONT AWESOME ICONS
import "../FontAwesomeIcons";

function App() {
  return (
    <Provider store={store}>
      <div className="expense-tracker-wrapper">
        <Header />
        <IncomeExpenses />
        <Balance />
        <TransactionList />
        <AddTransaction />
      </div>
    </Provider>
  );
}

export default App;
