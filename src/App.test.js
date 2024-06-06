import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Form UT tests", () => {
  test("filling username and passwords fields", () => {
    render(<App />);
    const userNameNode = screen.getByLabelText("Username");
    const passwordNode = screen.getByLabelText("Password");

    expect(userNameNode).toBeInTheDocument();
    expect(passwordNode).toBeInTheDocument();

    fireEvent.change(userNameNode, {
      target: { value: "Test User" },
    });
    fireEvent.change(passwordNode, {
      target: { value: "1234" },
    });

    expect(userNameNode.value).toBe("Test User");
    expect(passwordNode.value).toBe("1234");
  });

  test("find submit button", () => {
    render(<App />);
    const buttonNode = screen.getByRole("button");
    expect(buttonNode).toBeInTheDocument();
  });

  test("test form submit with currect input values", () => {
    const mockSubmit = jest.fn();

    render(<App onSubmit={mockSubmit} />);

    const buttonNode = screen.getByRole("button");
    expect(buttonNode).toBeInTheDocument();

    const userNameNode = screen.getByLabelText("Username");
    const passwordNode = screen.getByLabelText("Password");

    expect(userNameNode).toBeInTheDocument();
    expect(passwordNode).toBeInTheDocument();

    fireEvent.change(userNameNode, {
      target: { value: "Test User" },
    });
    fireEvent.change(passwordNode, {
      target: { value: "1234" },
    });

    fireEvent.click(buttonNode);
    expect(mockSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        username: "Test User",
        password: "1234"
      })
    );
  });
});

/*
   TODO:
    1. Fill in the username and password fields getByLabelText
    2. type user name and password - fireEvent.change or userEvent.type
    3. find the submit button - getByRole/findByRole
    4. click the submit button - fireEvent.click or userEvent.click
    5. add a assertion to check if submitted data is correct
    6. mock onSubmit function to the App component and check if its getting called with correct username and password
  */
