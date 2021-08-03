import React, { useState } from "react";
import AuthAPIService from "../../services/auth-api-service";

function CardTable(props) {
  const [deal, setDeal] = useState([]);
  const [deckId, setDeckId] = useState("");
  const [deckAmount, setDeckAmount] = useState("");
  const [cards, setCards] = useState({});
  const [playerCard, setPlayerCard] = useState({});
  const [dealerCard, setDealerCard] = useState({});

  const shuffleCards = () => {
    AuthAPIService.shuffleCards()
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
    AuthAPIService.dealCards(deckId)
      .then((hand) => {
        console.log(hand);
        console.log(hand.cards[0]);
        setPlayerCard(hand.cards[0]);
        setDealerCard(hand.cards[1]);
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
