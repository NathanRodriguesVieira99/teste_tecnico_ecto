import z from "zod";

export const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.url().startsWith("https://flow.ecto.tools"),
  NEXT_PUBLIC_API_TOKEN: z.string(),
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
});

const _env = envSchema.safeParse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_API_TOKEN: process.env.NEXT_PUBLIC_API_TOKEN,
  NODE_ENV: process.env.NODE_ENV,
});

if (_env.success === false) {
  if (process.env.NODE_ENV === "development") {
    // biome-ignore lint/suspicious/noConsole: log apenas no ambiente de dev
    console.error(_env.error);
  }
  throw new Error(`❌ Invalid environment variables: ${_env.error}`);
}

export const env = _env.data;
