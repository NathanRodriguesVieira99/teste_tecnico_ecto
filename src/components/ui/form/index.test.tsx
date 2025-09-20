import { screen } from "@testing-library/react";
import {
  FormProviderCustomRender,
  userEvent,
} from "@/tests/utils/FormProvider-custom-render";
import { Form } from "./index";

describe("<Form/>", () => {
  it("should render complete form", () => {
    FormProviderCustomRender(
      <Form.Container>
        <Form.Root>
          <Form.Field>
            <Form.Label>Label</Form.Label>
            <Form.Input name="name" placeholder="placeholder" />
          </Form.Field>
        </Form.Root>
      </Form.Container>
    );
  });

  it("should type on input", async () => {
    const user = userEvent.setup();

    FormProviderCustomRender(
      <Form.Field>
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Input id="name" name="name" placeholder="placeholder" />
      </Form.Field>
    );

    const input = screen.getByRole("textbox", {
      name: "Name",
    }) as HTMLInputElement;

    await user.type(input, "Texto digitado");

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("Texto digitado");
  });
});
