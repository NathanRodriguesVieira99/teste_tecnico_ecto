import z from "zod";

// Armazena os valores mínimos, máximos etc na validação (evita números mágicos)
const MIN_CHARACTERS_NAME = 3;
const MAX_CHARACTERS_NAME = 100;
const MAX_PASSWORD_CHARACTERS = 8;

export const signUpSchema = z
  .object({
    name: z
      .string()
      .nonempty({ message: "Campo obrigatório!" })
      .min(MIN_CHARACTERS_NAME, {
        message: "O nome deve ter ao menos 3 caracteres!",
      })
      .max(MAX_CHARACTERS_NAME, { message: "Número de caracteres excedido!" }),

    last_name: z
      .string()
      .nonempty({ message: "Campo obrigatório!" })
      .min(MIN_CHARACTERS_NAME, {
        message: "O sobrenome deve ter ao menos 3 caracteres!",
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
      .string()
      .nonempty({ message: "Campo obrigatório!" })
      .regex(/^\+55 \(\d{2}\) \d{5}-\d{4}$/, { message: "Telefone inválido!" }),

    password: z
      .string()
      .nonempty({ message: "Campo obrigatório!" })
      .min(MAX_PASSWORD_CHARACTERS, {
        message: "A senha deve ter ao menos 8 caracteres!",
      })
      .regex(/[A-Z]/, {
        message: "A senha deve ter ao menos uma letra maiúscula!",
      })
      .regex(/[a-z]/, {
        message: "A senha deve ter ao menos uma letra minúscula!",
      })
      .regex(/[0-9]/, { message: "A senha deve ter ao menos um número!" })
      .regex(/[!@#$%^&*(),.?":{}|<>]/, {
        message: "A senha deve ter ao menos um caractere especial!",
      }),

    confirm_password: z
      .string()
      .nonempty({ message: "Campo obrigatório!" })
      .min(MAX_PASSWORD_CHARACTERS, {
        message: "A senha deve ter ao menos 8 caracteres!",
      }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "As senhas não coincidem",
    path: ["confirm_password"],
  });

export type SignUpSchema = z.infer<typeof signUpSchema>;
