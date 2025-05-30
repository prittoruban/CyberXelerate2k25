import Footer from "@/components/Footer";
import Header from "@/app/events/components/Header";
import { Pencil } from "lucide-react";
import Pencilvania from "../components/Event7";

const page = () => {
  return (
    <main className="flex flex-col items-center px-4 overflow-hidden">
      <Header />
      <Pencilvania />
      <Footer />
    </main>
  );
};

export default page;
