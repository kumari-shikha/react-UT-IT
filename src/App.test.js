import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Todo test suite", () => {
  test("input field and button are present", () => {
    render(<App/>);
    const inputNode = screen.getByRole("textbox");
    const buttonNode = screen.getByRole("button");

    expect(inputNode).toBeInTheDocument();
    expect(buttonNode).toBeInTheDocument();
  })

  test("success on adding a new to-do", async () => {
    render(<App/>);
    const inputNode = screen.getByRole("textbox");
    const buttonNode = screen.getByRole("button");

    expect(inputNode).toBeInTheDocument();
    expect(buttonNode).toBeInTheDocument();

    fireEvent.change(inputNode, {
      target: {value: "Go to cafe"}
    })

    fireEvent.click(buttonNode);

    const notification = await screen.findByText("Create Success");
    expect(notification).toBeInTheDocument();
    expect(screen.getByText("Go to cafe")).toBeInTheDocument();
  })

  test("failure on adding a new to-do without a text", async () => {
    render(<App/>);
    const inputNode = screen.getByRole("textbox");
    const buttonNode = screen.getByRole("button");

    expect(inputNode).toBeInTheDocument();
    expect(buttonNode).toBeInTheDocument();

    fireEvent.change(inputNode, {
      target: {value: ""}
    })

    fireEvent.click(buttonNode);

    const notification = await screen.findByText("Error");
    expect(notification).toBeInTheDocument();
  })

  test("deleing a todo on click of delete icon", async () => {
    render(<App/>);
    const inputNode = screen.getByRole("textbox");
    const buttonNode = screen.getByRole("button");
    expect(inputNode).toBeInTheDocument();
    expect(buttonNode).toBeInTheDocument();

    fireEvent.change(inputNode, {
      target: {value: "Go to cafe"}
    })

    fireEvent.click(buttonNode);
    expect(screen.getByText("Go to cafe")).toBeInTheDocument();

    const deleteNode = screen.getByTestId("delete-btn");
    expect(deleteNode).toBeInTheDocument();

    fireEvent.click(deleteNode);
    const deleteNotification = await screen.findByText("deleted todo named Go to cafe");
    expect(deleteNotification).toBeInTheDocument();
    expect(screen.queryByText("Go to cafe")).toBeFalsy();
  })
});

/*
    check if elements renders and button, input box is present
    stimulate add todo
    on success assert on notification and check if inserted data present in ui
    if failure assert failure notification and new row should not be created
    if delete button clicked assert on notification and check if deleted data is not present in ui
  */