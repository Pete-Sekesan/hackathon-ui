import React, { useState } from "react";
import AuthAPIService from "../../services/auth-api-service";

function CardTable(props) {
  const [deal, setDeal] = useState([]);
  const [deckId, setDeckId] = useState("");
  const [deckAmount, setDeckAmount] = useState("");

  const shuffleCards = () => {
    AuthAPIService.dealCards()
      .then((deck) => {
        console.log(deck.deck_id);
        setDeckId(deck.deck_id);
        setDeckAmount(deck.remaining);
        console.log(deck);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dealCards = () => {
    AuthAPIService.dealCards()
      .then((deck) => {
        console.log(deck.deck_id);
        setDeckId(deck.deck_id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={shuffleCards}>Shuffle Cards</button>
      <button onClick={dealCards}>Deal Cards</button>
    </div>
  );
}

export default CardTable;
