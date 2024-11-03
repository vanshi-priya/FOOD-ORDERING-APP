import {  fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";


it("Should render Header component with a login buttton", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
        </BrowserRouter>
      
    );

    const loginButton = screen.getByRole("button");

    expect(loginButton).toBeInTheDocument();
});

it("Should render Header component with a Cart items 0", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
        </BrowserRouter>
      
    );

    const cartItems = screen.getByText("Cart🛒- (0 items)");

    expect(cartItems).toBeInTheDocument();
});


it("Should render Header component with Cart item", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
        </BrowserRouter>
      
    );

    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
});


it("Should change Login button to Logout", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
        </BrowserRouter>
      
    );

    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);

    expect(loginButton).toBeInTheDocument();

    const logoutButton = screen.getByRole("button", {name: "Logout"});
    expect(logoutButton).toBeInTheDocument();
});