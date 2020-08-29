import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function IncomeExpenses() {
  const { transactionList } = useSelector((state) => state.expenseReducer);

  const amounts = transactionList.map((transaction) => transaction[0].amount);

  const incomes = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expenses = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="income-expenses-tracker">
      <div className="total total-income">
        <h5 className="total-income-title">Income</h5>
        <p id="total-income">{incomes} &euro;</p>
      </div>
      <div className="total total-expense">
        <h5 className="total-expense-title">Expense</h5>
        <p id="total-expense">{expenses} &euro;</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
