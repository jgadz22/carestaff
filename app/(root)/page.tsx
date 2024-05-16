import Header from "@/components/shared/Header";
import UserFooter from "@/components/shared/UserFooter";
import UserHeader from "@/components/shared/UserHeader";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as any;
  const user = await getUserById(userId);
  return (
    <>
      <UserHeader />
      <section className="">Homepage</section>
      <UserFooter />
    </>
  );
}
