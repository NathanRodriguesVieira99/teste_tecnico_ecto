export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {children}
    </div>
  );
};
