"use client";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex max-h-screen min-h-full w-96 flex-col items-center justify-start gap-6 pt-10 lg:w-auto lg:flex-row lg:justify-between">
      <div className="flex items-center justify-start gap-6">
        {" "}
        <Link
          className="font-semibold text-main text-sm leading-tight"
          href="#"
        >
          {" "}
          <span>Políticas de privacidade</span>
        </Link>
        <Link
          className="font-semibold text-main text-sm leading-tight"
          href="#"
        >
          <span>Termos de uso</span>
        </Link>
      </div>
      <span className="font-semibold text-sm text-soft">
        Teste de estágio {new Date().getFullYear()}
      </span>
    </footer>
  );
};
