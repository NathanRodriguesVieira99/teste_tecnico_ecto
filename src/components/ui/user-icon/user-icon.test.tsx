import { render, screen } from "@testing-library/react";
import { UserIcon } from "./user-icon";

describe("<UserIcon/>", () => {
  it("should render user icon", () => {
    render(<UserIcon />);

    const userIcon = screen.getByAltText("Ícone de usuário");

    expect(userIcon).toBeInTheDocument();
  });
});
