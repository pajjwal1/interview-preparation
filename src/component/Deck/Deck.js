import React, { useState, useEffect } from "react";
import "./Deck.css";
import Card from "./Card";

const DECK_API = "https://deckofcardsapi.com/api/deck/";

const Deck = () => {
  const [deck, setDeck] = useState(null);
  const [drawn, setDrawn] = useState([]);
  const [autoDraw, setAutoDraw] = useState(false);

  useEffect(() => {
    async function getRes() {
      let data = await fetch(`${DECK_API}/new/shuffle/`);
      let res = await data.json();
      setDeck(res);
    }
    getRes();
  }, []);

  async function getCard() {
    let { deck_id } = deck;

    try {
      let response = await fetch(`${DECK_API}/${deck_id}/draw/`);
      let cardRes = await response.json();
      if (cardRes.remaining === 0) {
        setAutoDraw(false);
        throw new Error("No cards remaining!");
      }
      const card = cardRes.cards[0];

      setDrawn((drawn) => [
        ...drawn,
        {
          id: card.code,
          name: card.suit + " " + card.value,
          image: card.image,
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    let interval;

    if (autoDraw) {
      interval = setInterval(async () => {
        await getCard();
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [autoDraw, deck]);

  const drawCard = async () => {
    if (deck && deck.remaining > 0) {
      await getCard();
    }
  };

  const sortDrawnCards = () => {
    const customSortOrder = {
      CLUBS: 0,
      SPADES: 1,
      HEARTS: 2,
      DIAMONDS: 3,
    };

    const sortedDrawn = [...drawn].sort((a, b) => {
      const suitA = a.name.split(" ")[0];
      const suitB = b.name.split(" ")[0];
      console.log("a.name console log", a.name);
      console.log("b.name console log", b.name);
      // console of a.name = [Suit like clubs, spades  &&& value like ACE, 2,3,4,5,6,7];

      if (customSortOrder[suitA] < customSortOrder[suitB]) {
        return -1;
      } else if (customSortOrder[suitA] > customSortOrder[suitB]) {
        return 1;
      } else {
        const valueOrder = ["ACE","2","3","4","5","6","7","8","9","10","JACK","QUEEN","KING",];
        return (
          valueOrder.indexOf(a.name.split(" ")[1]) -
          valueOrder.indexOf(b.name.split(" ")[1])
        );
      }
    });

    setDrawn(sortedDrawn);
  };

  const toggleDraw = () => {
    setAutoDraw((auto) => !auto);
  };

  const cards = drawn.map((card) => (
    <Card name={card.name} image={card.image} key={card.id} />
  ));

  return (
    <div className="Deck">
      {deck ? (
        <div>
          <button className="DeckBtn" onClick={drawCard}>
            Draw a Card
          </button>
          <button className="DeckBtn" onClick={sortDrawnCards}>
            Sort Drawn Cards
          </button>
          <button className="DeckBtn" onClick={toggleDraw}>
            {autoDraw ? "Stop " : "Continue "}Drawing Cards
          </button>
        </div>
      ) : null}
      <div className="DeckCards">{cards}</div>
    </div>
  );
};

export default Deck;
