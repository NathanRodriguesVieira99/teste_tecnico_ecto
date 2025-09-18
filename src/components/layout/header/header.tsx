import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex justify-between items-center pb-10 p-6">
      <Image
        src="/Logotipos.svg"
        alt="Logotipo da Ecto"
        width={96}
        height={28}
      />
      <span className="text-sm font-semibold leading-tight">
        Falar com um especialista
      </span>
    </header>
  );
};
