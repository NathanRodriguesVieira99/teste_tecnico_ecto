export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" gap-2 items-center justify-center flex flex-col ">
      {children}
    </div>
  );
};
