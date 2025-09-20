import { render, screen } from "@testing-library/react";
import { Header } from "./header";

describe("<Header/>", () => {
  it("should render the logo image", () => {
    render(<Header />);

    const imageAltText = screen.getByAltText("Logotipo da Ecto");

    expect(imageAltText).toBeInTheDocument();
  });

  it('should render "Falar com um especialista" text', () => {
    render(<Header />);

    const text = screen.getByText("Falar com um especialista");

    expect(text).toBeInTheDocument();
  });
});
