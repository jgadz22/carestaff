import TranslateWithGoogle from "@/components/shared/TranslateWithGoogle";
import { Toaster } from "@/components/ui/toaster";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <main className="flex-1">{children}</main>

      <Toaster />
      <TranslateWithGoogle />
    </div>
  );
}
