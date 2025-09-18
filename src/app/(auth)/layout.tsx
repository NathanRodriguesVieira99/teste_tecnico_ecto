import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-96 bg-white justify-center items-center gap-10 p-6">
      <Header />
      <main className="bg-white h-screen">{children}</main>
      <Footer />
    </div>
  );
}
