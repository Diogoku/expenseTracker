import React, { Fragment } from "react";
import { useSelector } from "react-redux";

function Balance() {
  const { transactionList } = useSelector((state) => state.expenseReducer);

  let balance = 0.0;
  const amounts = transactionList.map((transaction) => transaction[0].amount);
  balance = amounts.reduce((acc, amount) => (acc += amount), 0).toFixed(2);

  return (
    <Fragment>
      <div className="balance-wrapper">
        <h4 className="balance-title">Your Balance</h4>
        <h4
          id="balance"
          className={
            balance == 0.0
              ? "neutral-amount"
              : balance > 0
              ? "positive-amount"
              : "negative-amount"
          }
        >
          {balance} &euro;
        </h4>
      </div>
    </Fragment>
  );
}

export default Balance;
