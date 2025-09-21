import Image from "next/image";

export const Header = () => {
  return (
    <header className="relative mb-6 flex h-5 w-96 items-center justify-between px-6 py-6 pt-6 lg:w-auto">
      <div className="flex items-center justify-center lg:justify-between">
        <Image
          alt="Logotipo da Ecto"
          height={28}
          src="/Logotipos.svg"
          width={96}
        />
      </div>
      <span className="cursor-pointer font-semibold text-sm leading-tight">
        Falar com um especialista
      </span>
    </header>
  );
};
