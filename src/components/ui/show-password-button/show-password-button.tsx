export const ShowPasswordButton = () => {
  // TODO -> adicionar lógica de mostrar/ocultar senha
  return (
    <div className="flex items-center justify-center">
      <button
        className="flex h-10 w-20 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-tr-md rounded-br-md border-soft border-t border-r border-b bg-white p-2"
        type="button"
      >
        Mostrar
      </button>
    </div>
  );
};
