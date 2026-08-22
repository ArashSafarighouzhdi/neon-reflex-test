import Header from "@/app/components/Header";
import Container from "./components/Container";

export default function Home() {
  return (
    <main className="min-h-screen bg-black px-4 py-6">
      <Header />
      <Container />
    </main>
  );
}
