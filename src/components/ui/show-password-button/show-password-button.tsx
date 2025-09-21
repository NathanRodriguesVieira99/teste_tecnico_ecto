type ShowPasswordButtonProps = {
  isVisible: boolean; // armazena o valor do estado da senha (true(visível) ou false(oculto))
  onClick: () => void; // função que altera o estado de visibilidade
};

export const ShowPasswordButton = ({
  isVisible,
  onClick,
}: ShowPasswordButtonProps) => {
  return (
    <div className="flex items-center justify-center">
      <button
        aria-label={isVisible ? "Esconder" : "Mostrar"}
        className="flex h-10 w-20 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-tr-md rounded-br-md border-soft border-t border-r border-b bg-white p-2 lg:w-[72px]"
        onClick={onClick}
        type="button"
      >
        {isVisible ? "Esconder" : "Mostrar"}
      </button>
    </div>
  );
};
