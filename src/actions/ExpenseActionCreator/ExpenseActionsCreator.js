import { ADD_TRANSACTION } from "./Types";

// EXPENSE ACTIONS CREATOR

// ADD TRANSACTION
export const addTransaction = (data, date) => {
  data.amount = parseFloat(data.amount);
  return {
    type: ADD_TRANSACTION,
    transaction: data,
    date: date,
  };
};
