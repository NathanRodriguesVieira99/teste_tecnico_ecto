import Image from "next/image";

export const UserIcon = () => {
  return (
    <div className="items-start justify-start gap-4 rounded-[96px] bg-gradient-to-b from-zinc-200/50 via-stone-50/0 to-zinc-200/0 p-4 outline-1 outline-zinc-200 outline-offset-[-1px]">
      <Image
        alt="Ícone de usuário"
        height={56}
        src="/custom_icon.svg"
        width={56}
      />
    </div>
  );
};
