import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-96">
      <Header />
      <main className="flex-1 bg-white">{children}</main>
      <Footer />
    </div>
  );
}
