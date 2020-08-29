import { ADD_TRANSACTION } from "../actions/ExpenseActionCreator/Types";

const initialState = { transactionList: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactionList: [
          [action.transaction, action.date],
          ...state.transactionList,
        ],
      };
    default:
      return state;
  }
};
