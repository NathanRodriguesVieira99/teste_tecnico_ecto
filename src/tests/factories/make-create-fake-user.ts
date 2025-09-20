import { faker } from "@faker-js/faker/locale/pt_BR";
import type { SignUpServiceBody } from "@/services/sign-up";

export const MakeCreateFakeUser = (): SignUpServiceBody => {
  const password = faker.internet.password();
  return {
    name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    password,
    confirm_password: password,
  };
};

export const MakeCreateWrongFakeUser = (): SignUpServiceBody => {
  return {
    name: "",
    last_name: "",
    email: "email inválido",
    phone: faker.phone.number(),
    password: "",
    confirm_password: "",
  };
};
