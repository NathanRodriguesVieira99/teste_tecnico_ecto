import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ShowPasswordButton } from "./show-password-button";

describe("<ShowPasswordButton/>", () => {
  const onClick = vi.fn();

  it("should show 'Mostrar' text when password is invisible", async () => {
    const user = userEvent.setup();

    render(<ShowPasswordButton isVisible={false} onClick={onClick} />);

    const showPasswordButton = screen.getByRole("button", { name: "Mostrar" });
    await user.click(showPasswordButton);

    expect(showPasswordButton).toBeInTheDocument();
    expect(screen.getByText("Mostrar"));
    expect(onClick).toHaveBeenCalled();
  });

  it("should show 'Esconder' text when password is visible", async () => {
    const user = userEvent.setup();

    render(<ShowPasswordButton isVisible={true} onClick={onClick} />);

    const showPasswordButton = screen.getByRole("button", { name: "Esconder" });
    await user.click(showPasswordButton);

    expect(showPasswordButton).toBeInTheDocument();
    expect(screen.getByText("Esconder"));
    expect(onClick).toHaveBeenCalled();
  });
});
