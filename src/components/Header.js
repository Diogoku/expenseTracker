import React from "react";

// FONT AWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <h2 className="expense-tracker-title">
      Expense Tracker <FontAwesomeIcon icon="file-invoice-dollar" />
    </h2>
  );
}

export default Header;
