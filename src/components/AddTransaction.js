import React, { Fragment, useState } from "react";

// REDUX
import { useDispatch } from "react-redux";

// ACTION CREATOR
import { addTransaction } from "../actions/ExpenseActionCreator/ExpenseActionsCreator";

// REACT HOOK FORM
import { useForm } from "react-hook-form";

// COMPONENTS
import SubHeader from "./SubHeader";

// MOTION
import { motion } from "framer-motion";

// FONT AWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AddTransaction() {
  const [transactionStatus, setTransactionStatus] = useState(false);
  const [transactionMessage, setTransactionMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (data.amount[0] == "-" || data.amount[0] == "+") {
      dispatch(addTransaction(data, new Date()));
      setTransactionMessage("Successful Transaction");
      setTransactionStatus(true);
    } else {
      setTransactionMessage(
        `Transaction Error: Amount should have - or + before the amount`
      );
      setTransactionStatus(false);
    }
  };

  return (
    <Fragment>
      <SubHeader title={"add transation"} />
      <form onSubmit={handleSubmit(onSubmit)} id="add-transaction-form">
        <label htmlFor="transactionText" className="label">
          Text
        </label>
        <input
          type="text"
          name="transactionText"
          id="transactionText"
          className="input"
          ref={register({ required: true })}
        />
        {errors.transactionText && (
          <span className="error-message">
            <FontAwesomeIcon icon="exclamation-triangle" />
            This field is required
          </span>
        )}
        <div className="amount-wrapper">
          <label htmlFor="amount" className="label">
            Amount
          </label>
          <span className="amount-span">
            (Negative - expense, positive + income)
          </span>
        </div>
        <input
          type="text"
          name="amount"
          id="amount"
          className="input"
          ref={register({ required: true })}
        />
        {errors.amount && (
          <span className="error-message">
            <FontAwesomeIcon icon="exclamation-triangle" />
            This field is required
          </span>
        )}
        {transactionStatus ? (
          <p className="successfull-message">
            {transactionMessage ? <FontAwesomeIcon icon="check" /> : null}{" "}
            {transactionMessage}
          </p>
        ) : (
          <p className="error-message">
            {transactionMessage ? (
              <FontAwesomeIcon icon="exclamation-triangle" />
            ) : null}{" "}
            {transactionMessage}
          </p>
        )}

        <motion.input
          type="submit"
          value="Add Transaction"
          id="submit-add-transaction"
          whileHover={{ scaleY: 1.05 }}
        />
      </form>
    </Fragment>
  );
}

export default AddTransaction;
