export const ShowPasswordButton = () => {
  // TODO -> adicionar lógica de mostrar/ocultar senha
  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        className="w-20 h-10 p-2 cursor-pointer bg-white rounded-tr-md rounded-br-md border-r border-t border-b border-soft flex justify-center items-center gap-2 overflow-hidden "
      >
        Mostrar
      </button>
    </div>
  );
};
