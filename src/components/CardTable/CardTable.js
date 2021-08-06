import { findAllByDisplayValue } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import AuthAPIService from "../../services/auth-api-service";

function CardTable(props) {
  const [deckId, setDeckId] = useState("");
  const [deckAmount, setDeckAmount] = useState("");
  const [cards, setCards] = useState({});
  const [playerCard, setPlayerCard] = useState({});
  const [dealerCard, setDealerCard] = useState({});
  const [bank, playerBank] = useState(500);
  const [bet, setBet] = useState(0);
  const [placeBet, setPlaceBet] = useState(false);
  const [dealShow, setDealShow] = useState(false);
  const [revealShow, setRevealShow] = useState(false);
  const [dealerScore, setDealerScore] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [hand, setHand] = useState(false);

  const shuffleCards = () => {
    setPlayerScore(0);
    setDealerScore(0);
    AuthAPIService.shuffleCards()
      .then((deck) => {
        console.log(deck.deck_id);
        setDeckId(deck.deck_id);
        setDeckAmount(deck.remaining);
        setPlayerCard(null);
        setDealerCard(null);
        setPlaceBet(true);
        setDealShow(true);
        setHand(false);
        setBet(0);
        console.log(deck);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dealCards = () => {
    AuthAPIService.dealCards(deckId)
      .then((hand) => {
        setPlayerCard(hand.cards[0]);
        setDealerCard(hand.cards[1]);
        setDealShow(false);
        setRevealShow(false);
        setHand(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (playerCard !== null) {
      setPlayerValue();
      console.log("useEffect player working");
    }
  }, [playerCard]);

  useEffect(() => {
    if (dealerCard !== null) {
      setDealerValue();
      console.log("useEffect dealer working");
    }
  }, [dealerCard]);

  useEffect(() => {
    if (hand === true) {
      setWinner();
    }
  }, [hand]);

  const betTen = () => {
    setBet(bet + 10);
  };
  const betFifty = () => {
    setBet(bet + 50);
  };
  const betHundred = () => {
    setBet(bet + 100);
  };

  const clearBet = () => {
    setBet(0);
  };

  const placeBets = () => {
    setPlaceBet(false);
    setRevealShow(true);
  };

  const setPlayerValue = () => {
    if (playerCard.value === "JACK") {
      setPlayerScore(11);
    } else if (playerCard.value === "QUEEN") {
      setPlayerScore(12);
    } else if (playerCard.value === "KING") {
      setPlayerScore(13);
    } else if (playerCard.value === "ACE") {
      setPlayerScore(14);
    } else {
      setPlayerScore(playerCard.value);
    }
  };

  const setDealerValue = () => {
    if (dealerCard.value === "JACK") {
      setDealerScore(11);
    }
    if (dealerCard.value === "QUEEN") {
      setDealerScore(12);
    }
    if (dealerCard.value === "KING") {
      setDealerScore(13);
    }
    if (dealerCard.value === "ACE") {
      setDealerScore(14);
    }
    if (dealerCard.value > 0) {
      setDealerScore(dealerCard.value);
    }
  };

  const setWinner = () => {
    if (dealerScore > playerScore) {
      console.log("Dealer Wins");
    }
    if (playerScore > dealerScore) {
      console.log("You Win!");
    }
    if (playerScore === dealerScore) {
      console.log("time to go to war");
    }
  };

  const handleHand = () => {
    dealCards();
  };
  return (
    <div>
      {playerCard !== null ? (
        <img src={playerCard.image} width="200" heigh="400" />
      ) : (
        <img
          src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_1024x1024.png?v=1535755695"
          width="200"
          heigh="400"
        />
      )}
      <br />
      {dealerCard !== null ? (
        <img src={dealerCard.image} width="200" heigh="400" />
      ) : (
        <img
          src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_1024x1024.png?v=1535755695"
          width="200"
          heigh="400"
        />
      )}
      <br />
      {dealShow === false ? (
        <button onClick={shuffleCards}>Deal Cards</button>
      ) : null}
      {revealShow === false ? null : (
        <button onClick={handleHand}>Reveal Cards</button>
      )}
      <br />
      {placeBet === false ? null : (
        <>
          <button onClick={placeBets}>Place Bet</button>
          <button onClick={clearBet}>Clear Bet</button>
          <br />
          <img
            src="https://cdn.shopify.com/s/files/1/0098/5160/0947/products/semicustomhighroller_1024x1024@2x.png?v=1582673667"
            width="100"
            heigh="100"
            onClick={betTen}
          />
          <p>Bet $10</p>
          <img
            src="https://cdn.shopify.com/s/files/1/0098/5160/0947/products/semicustomtropicoasis_1024x1024@2x.png?v=1582761957"
            width="100"
            heigh="100"
            onClick={betFifty}
          />
          <p>Bet $50</p>
          <img
            src="https://cdn.shopify.com/s/files/1/0098/5160/0947/products/tropicoasis_1024x1024@2x.png?v=1581634067"
            width="100"
            heigh="100"
            onClick={betHundred}
          />
          <p>Bet $100</p>
        </>
      )}
      <br />

      <p>Current Bet: ${bet}</p>

      <p>Current Bank ${bank}</p>
    </div>
  );
}

export default CardTable;
