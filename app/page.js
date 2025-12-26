import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200">
      <section className="grid grid-cols-2 h-[60vh]">
        
        <div className="flex flex-col gap-6 items-center justify-center">
          <p className="text-4xl font-extrabold text-purple-800">
            The Best URL Shortener in the Market
          </p>

          <p className="px-32 text-center text-purple-700 text-lg">
            We are the most straightforward URL shortener in the world
          </p>

          <div className="flex gap-4">
            <Link href="/shorten">
              <button className="bg-purple-600 hover:bg-purple-700 transition-all rounded-xl shadow-lg px-6 py-2 font-bold text-white active:scale-95">
                Try Now
              </button>
            </Link>

            <Link href="/github">
              <button className="bg-purple-600 hover:bg-purple-700 transition-all rounded-xl shadow-lg px-6 py-2 font-bold text-white active:scale-95">
                GitHub
              </button>
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center relative">
          <Image
            className="mix-blend-darken"
            alt="an image of a vector"
            src={"/vector.jpg"}
            fill={true}
          />
        </div>

      </section>
    </main>
  );
}
