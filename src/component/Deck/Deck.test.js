import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import Deck from "./Deck";

const mockDeckResponse = {
  deck_id: "mocked-deck-id",
  remaining: 52,
};

const mockDrawResponse = {
  cards: [
    {
      code: "C1",
      suit: "Clubs",
      value: "Ace",
      image: "image-url",
    },
  ],
  remaining: 51,
};

beforeAll(() => {
  global.fetch = jest.fn();
});

afterAll(() => {
  global.fetch.mockRestore();
});

describe("Deck component", () => {
  beforeEach(() => {
    global.fetch.mockReset();
  });

  it("renders the component", async () => {
    global.fetch.mockResolvedValueOnce({
      json: async () => mockDeckResponse,
    });

    await act(async () => {
      render(<Deck />);
    });

    await waitFor(() => {
      expect(screen.getByText("Draw a Card")).toBeInTheDocument();
      expect(screen.getByText("Sort Drawn Cards")).toBeInTheDocument();
    });
  });

  it("can draw a card and sort drawn cards", async () => {
    global.fetch
      .mockResolvedValueOnce({
        json: async () => mockDeckResponse,
      })
      .mockResolvedValueOnce({
        json: async () => mockDrawResponse,
      });
    await act(async () => {
      render(<Deck />);
    });

    const drawCardButton = screen.getByText("Draw a Card");
    const sortButton = screen.getByText("Sort Drawn Cards");
    fireEvent.click(drawCardButton);
    await waitFor(() => {
      expect(screen.getByAltText("Clubs Ace")).toBeInTheDocument();
    });

    fireEvent.click(sortButton);
  });

  it("handles no cards remaining error", async () => {
    global.fetch
      .mockResolvedValueOnce({
        json: async () => mockDeckResponse,
      })
      .mockResolvedValueOnce({
        json: async () => ({ remaining: 0 }),
      });

    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    await act(async () => {
      render(<Deck />);
    });

    const drawCardButton = screen.getByText("Draw a Card");

    fireEvent.click(drawCardButton);

    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        Error("No cards remaining!")
      );
    });

    consoleErrorSpy.mockRestore();
  });
});
