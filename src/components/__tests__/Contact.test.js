import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("Contact Us page Test Case", () => {
it("Should load contact us component", () => {
    render(<Contact />);

   const heading = screen.getByRole("heading");

   expect(heading).toBeInTheDocument();
});

it("Should load button inside Contact component", () => {
    render(<Contact />);

   const button = screen.getByRole("button");

   expect(button).toBeInTheDocument();
});

it("Should load input inside Contact component", () => {
    render(<Contact />);

   const inputName = screen.getByPlaceholderText("name");

   expect(inputName).toBeInTheDocument();
});

it("Should load 2 input boxes on the contact component", () => {
    render(<Contact />);

   const inputBoxes = screen.getAllByRole("textbox");

   expect(inputBoxes.length).toBe(2);
});

});