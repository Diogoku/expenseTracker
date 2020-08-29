import React, { Fragment } from "react";
import { useSelector } from "react-redux";

// COMPONENTS
import SubHeader from "./SubHeader";

// TRANSITION GROUP
import { CSSTransition, TransitionGroup } from "react-transition-group";

// MOTION
import { motion } from "framer-motion";

const transactionListVariants = {
  hidden: {
    opacity: 0,
    x: -5,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      stiffness: 200,
      staggerChildren: 2,
    },
  },
};

function TransactionList() {
  const { transactionList } = useSelector((state) => state.expenseReducer);

  return (
    <Fragment>
      <SubHeader title={"history"} />
      <motion.div
        className="transaction-list-wrapper"
        variants={transactionListVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ top: 0 }}
      >
        <TransitionGroup>
          {transactionList.reverse().map((transaction, index) => {
            return (
              <CSSTransition
                key={index}
                timeout={500}
                classNames="transaction"
                className={
                  transaction[0].amount > 0
                    ? "single-transaction-income"
                    : "single-transaction-expense"
                }
              >
                <div>
                  <p
                    key={"transactionText-" + index}
                    className="transaction-data"
                  >
                    {transaction[0].transactionText +
                      " " +
                      transaction[1].toLocaleString()}
                  </p>
                  {parseInt(transaction[0].amount) > 0 ? (
                    <span
                      key={"transaction-amount-" + index}
                      className="transaction-data positive-amount"
                    >
                      {"+" + transaction[0].amount}
                    </span>
                  ) : (
                    <span
                      key={"transaction-amount-" + index}
                      className="transaction-data negative-amount"
                    >
                      {transaction[0].amount}
                    </span>
                  )}
                </div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </motion.div>
    </Fragment>
  );
}

export default TransactionList;
