import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as any;
  const user = await getUserById(userId);
  return (
    <div className="flex h-screen flex-col">
      <Header userPosition={user.position} />
      <main className="flex-1">
        {user.position === "User" ? (
          <>
            <div className="w-full flex-center">
              <p>
                Your not allowed to go here. Please go back to{" "}
                <Link
                  href="/"
                  className="p-bold-16 underline underline-offset-8"
                >
                  Homepage
                </Link>
              </p>
            </div>
          </>
        ) : (
          children
        )}
      </main>
      <Footer />
    </div>
  );
}
