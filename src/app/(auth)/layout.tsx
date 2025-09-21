import Image from "next/image";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="mr-8 h-full w-96 overflow-hidden lg:w-[832px] lg:flex-col lg:py-12 lg:pl-28">
        <Header />
        <main className="flex-1 bg-white">{children}</main>
        <Footer />
      </div>

      <div className="lg:p-4">
        <div className="hidden lg:block lg:min-h-screen">
          <Image
            alt=""
            className=""
            height={992}
            src="/Illustration.svg"
            width={912}
          />
        </div>
      </div>
    </div>
  );
}
