"use client";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="pt-10 w-96 gap-6 min-h-full  max-h-screen flex flex-col justify-start items-center ">
      <div className="  inline-flex items-center justify-start gap-6">
        {" "}
        <Link
          href="#"
          className="text-sm font-semibold  leading-tight text-main"
        >
          {" "}
          <span>Políticas de privacidade</span>
        </Link>
        <Link
          href="#"
          className="text-sm font-semibold leading-tight text-main"
        >
          <span>Termos de uso</span>
        </Link>
      </div>
      <span className="text-sm font-semibold text-soft">
        Teste de estágio {new Date().getFullYear()}
      </span>
    </footer>
  );
};
