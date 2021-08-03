import React, { useState } from "react";
import AuthAPIService from "../../services/auth-api-service";

function CardTable() {
  const { deal, setDeal } = useState([]);

  const dealCards = () => {};
  return (
    <div>
      <button>Draw</button>
    </div>
  );
}

export default CardTable;
