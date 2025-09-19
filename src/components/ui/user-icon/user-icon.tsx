import Image from "next/image";

export const UserIcon = () => {
  return (
    <div className="p-4 bg-gradient-to-b from-zinc-200/50 via-stone-50/0 to-zinc-200/0 rounded-[96px] gap-4 items-start justify-start  outline-1 outline-offset-[-1px] outline-zinc-200">
      <Image
        src="/custom_icon.svg"
        alt="Ícone de usuário"
        width={56}
        height={56}
      />
    </div>
  );
};
