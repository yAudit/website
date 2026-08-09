import Link from "next/link";
import Header from "@/modules/Navbar/Header";
import Footer from "@/modules/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col bg-white text-black w-full min-h-screen font-default">
      <Header />
      <div className="flex flex-col items-center justify-center flex-1 py-24 px-6 text-center">
        <h1 className="text-5xl font-bold text-deepblue mb-4">404</h1>
        <p className="text-zinc-500 mb-8">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="px-8 py-3 text-white font-bold bg-deepblue hover:bg-white hover:text-deepblue hover:border hover:border-deepblue duration-700"
        >
          Back to homepage
        </Link>
      </div>
      <Footer />
    </div>
  );
}
