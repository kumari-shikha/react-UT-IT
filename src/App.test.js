import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Counter UI testing", () => {
  test("Initial count is 0 on render", () => {
    render(<App />);
    const counterElement = screen.getByText("Count 0");
    expect(counterElement).toBeInTheDocument();
  });

  test("increment & decrement buttons are present", () => {
    render(<App />);
    const incButton = screen.getByText("Increment counter");
    expect(incButton).toBeInTheDocument();

    const decButton = screen.getByText("Decrement counter");
    expect(decButton).toBeInTheDocument();
  });

  test("count values and counter button dependency", () => {
    render(<App />);

    const incButton = screen.getByText("Increment counter");
    const decButton = screen.getByText("Decrement counter");
    fireEvent.click(incButton);
    fireEvent.click(incButton);
    expect(screen.getByRole("heading")).toHaveTextContent("2");

    fireEvent.click(decButton);
    expect(screen.getByRole("heading")).toHaveTextContent("1");

    fireEvent.click(decButton);
    expect(screen.getByRole("heading")).toHaveTextContent("0");

    fireEvent.click(decButton);
    expect(screen.getByRole("heading")).toHaveTextContent("0");
  });
});

/*
  TODO:
    assert if initial count value is 0 on render
    assert if increment button is present
    assert if decrement button is present
    click increment button twice
    assert if count value is 2
    click decrement button once
    assert if count value is 1
    click decrement button once
    assert if count value is 0
    click decrement button once
    assert if count value is 0 if below 0 it wont decrement

    hints:
    for getting dom elements use getBy/queryBy from screen
    use getByRole/findByRole query to find 'increment' button
    use fireevent or user event to click
    make assertions using expect with screen.getBy or queryBy
    repeat the above steps dependent on test case requirement in todo
  */
