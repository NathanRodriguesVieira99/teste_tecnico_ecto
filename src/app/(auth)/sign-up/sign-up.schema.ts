import z from "zod";

export const signUpSchema = z.object({
  name: z.string().min(3).max(100),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
