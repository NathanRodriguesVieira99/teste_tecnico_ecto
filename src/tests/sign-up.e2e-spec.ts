import { expect, test } from "@playwright/test";

test("SignUp correctly", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.getByRole("textbox", { name: "Nome", exact: true }).fill("Nathan");
  await page.getByRole("textbox", { name: "Sobrenome" }).fill("Vieira");
  await page.getByRole("textbox", { name: "E-mail" }).fill("nathan@email.com");
  await page
    .getByRole("textbox", { name: "Telefone" })
    .fill("+55 (21) 99999-9999");
  await page
    .getByRole("textbox", { name: "Senha", exact: true })
    .fill("Senha12345!");
  await page
    .getByRole("textbox", { name: "Confirme sua senha" })
    .fill("Senha12345!");

  await page.getByRole("button", { name: "Cadastrar conta" }).click();

  await page.waitForLoadState("networkidle");

  await expect(
    page.getByRole("button", { name: "Cadastrando..." })
  ).toBeVisible();
});

test("SignUp with empty Credentials", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  // Não preenche nenhum campo, apenas tenta submeter direto
  await page.getByRole("button", { name: "Cadastrar conta" }).click();

  // Espera que todos os campos mostrem a mensagem "Campo obrigatório!"
  const ERROR_MESSAGE_COUNT = 6;
  await expect(page.getByText("Campo obrigatório!")).toHaveCount(
    ERROR_MESSAGE_COUNT
  );
});
