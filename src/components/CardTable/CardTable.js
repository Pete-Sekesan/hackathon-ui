import { findAllByDisplayValue } from "@testing-library/react";
import React, { useState } from "react";
import AuthAPIService from "../../services/auth-api-service";

function CardTable(props) {
  const [deal, setDeal] = useState([]);
  const [deckId, setDeckId] = useState("");
  const [deckAmount, setDeckAmount] = useState("");
  const [cards, setCards] = useState({});
  const [playerCard, setPlayerCard] = useState({});
  const [dealerCard, setDealerCard] = useState({});
  const [bank, playerBank] = useState(500);
  const [bet, setBet] = useState(0);
  const [placeBet, setPlaceBet] = useState(false);

  const shuffleCards = () => {
    AuthAPIService.shuffleCards()
      .then((deck) => {
        console.log(deck.deck_id);
        setDeckId(deck.deck_id);
        setDeckAmount(deck.remaining);
        setPlayerCard(null);
        setDealerCard(null);
        setBet("");
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

  const betTen = () => {
    setBet(bet + 10);
  };
  const betFifty = () => {
    setBet(bet + 50);
  };
  const betHundred = () => {
    setBet(bet + 100);
  };

  return (
    <div>
      <button onClick={shuffleCards}>Deal Cards</button>
      <button>Place Bet</button>
      {placeBet === false ? (
        <>
          <button onClick={betTen}>$10</button>
          <button onClick={betFifty}>$50</button>
          <button onClick={betHundred}>$100</button>
        </>
      ) : (
        <button onClick={dealCards}>Reveal Cards</button>
      )}

      {playerCard !== null ? (
        <img src={playerCard.image} width="200" heigh="400" />
      ) : (
        <img
          src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_1024x1024.png?v=1535755695"
          width="200"
          heigh="400"
        />
      )}
      {dealerCard !== null ? (
        <img src={dealerCard.image} width="200" heigh="400" />
      ) : (
        <img
          src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_1024x1024.png?v=1535755695"
          width="200"
          heigh="400"
        />
      )}
      {bet === 0 ? <p>Current Bet: $0</p> : <p>Current Bet: ${bet}</p>}
      <p>Current Bet Test: ${bet}</p>

      {bank}
    </div>
  );
}

export default CardTable;
