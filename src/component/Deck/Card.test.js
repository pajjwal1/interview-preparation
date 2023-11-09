import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

describe("Card component", () => {
  it("renders a card with the provided image and name", () => {
    const cardName = "Ace Clubs";
    const cardImage = "https://www.google.com";

    const { getByAltText } = render(<Card name={cardName} image={cardImage} />);

    const cardImageElement = getByAltText(cardName);
    expect(cardImageElement).toBeInTheDocument();
    expect(cardImageElement).toHaveAttribute("src", cardImage);
  });
});
