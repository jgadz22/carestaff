import UserFooter from "@/components/shared/UserFooter";
import UserHeader from "@/components/shared/UserHeader";

export default async function Home() {
  return (
    <div className="flex h-screen flex-col">
      <UserHeader />
      <main className="flex-1">
        <section>Homepage</section>
      </main>
      <UserFooter />
    </div>
  );
}
