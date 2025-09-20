import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("<Button/>", () => {
  it("Should", () => {
    render(<Button type="button">Cadastrar conta</Button>);

    const buttonText = screen.getByText("Cadastrar conta");

    expect(buttonText).toBeInTheDocument();
  });
});
