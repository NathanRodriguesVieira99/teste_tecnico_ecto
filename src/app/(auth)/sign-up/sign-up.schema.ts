import z from "zod";

// Armazena os valores mínimos, máximos etc na validação (evita números mágicos)
const MIN_CHARACTERS_NAME = 3;
const MAX_CHARACTERS_NAME = 100;
const MAX_PASSWORD_CHARACTERS = 8;

export const signUpSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "Campo obrigatório!" })
    .min(MIN_CHARACTERS_NAME, {
      message: "O nome deve ter ao menos 3 caracteres!",
    })
    .max(MAX_CHARACTERS_NAME, { message: "Número de caracteres excedido!" }),

  /*
   z.string() + z.email() está depreceado o zod recomenda usar z.email,  só assim funciona a validação "Campo obrigatório"
   */
  email: z
    .string()
    .nonempty({ message: "Campo obrigatório!" })
    .email({ message: "E-mail inválido!" }),

  phone: z
    .string({ message: "Campo obrigatório!" })
    .nonempty({ message: "Campo obrigatório!" })
    .regex(/^\+55 \(\d{2}\) \d{5}-\d{4}$/, { message: "Telefone inválido!" }),

  password: z
    .string({ message: "Campo obrigatório!" })
    .nonempty({ message: "Campo obrigatório!" })
    .min(MAX_PASSWORD_CHARACTERS, {
      message: "A senha deve ter ao menos 8 caracteres!",
    }),

  confirmPassword: z
    .string({ message: "Campo obrigatório!" })
    .nonempty({ message: "Campo obrigatório!" })
    .min(MAX_PASSWORD_CHARACTERS, {
      message: "A senha deve ter ao menos 8 caracteres!",
    }),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
