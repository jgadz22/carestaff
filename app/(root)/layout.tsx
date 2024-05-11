import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import TranslateWithGoogle from "@/components/shared/TranslateWithGoogle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <TranslateWithGoogle />
    </div>
  );
}
