import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex w-96 relative justify-between h-5 pt-6 items-center p-6">
      <div className="flex items-center justify-center">
        <Image
          src="/Logotipos.svg"
          alt="Logotipo da Ecto"
          width={96}
          height={28}
        />
      </div>
      <span className="text-sm font-semibold leading-tight">
        Falar com um especialista
      </span>
    </header>
  );
};
