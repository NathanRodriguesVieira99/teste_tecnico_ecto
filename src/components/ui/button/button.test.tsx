import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("<Button/>", () => {
  it("should render button component text", () => {
    render(<Button type="button">Cadastrar conta</Button>);

    const buttonText = screen.getByText("Cadastrar conta");

    expect(buttonText).toBeInTheDocument();
  });
  it("should show text when disabled", () => {
    render(
      <Button disabled={true} type="submit">
        Cadastrando...
      </Button>
    );

    const disabledButton = screen.getByRole("button", {
      name: "Cadastrando...",
    });

    expect(disabledButton).toHaveProperty("disabled");
    expect(disabledButton).toHaveTextContent("Cadastrando...");
    expect(disabledButton).toBeDisabled();
  });
});
