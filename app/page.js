import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200">
      
      {/* HERO SECTION */}
      <section className="grid grid-cols-2 h-[60vh]">
        
        <div className="flex flex-col gap-6 items-center justify-center">
          <p className="text-4xl font-extrabold text-purple-800">
            The Best URL Shortener in the Market
          </p>

          <p className="px-32 text-center text-purple-700 text-lg">
            We are the most straightforward URL shortener in the world —
            fast, reliable, and built for simplicity.
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

          {/* TRUST LINE */}
          <p className="text-sm text-purple-600 mt-2">
            Trusted by developers, students, and creators
          </p>
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

      {/* FEATURES SECTION */}
      <section className="px-20 py-16 grid grid-cols-3 gap-10 text-center">
        
        <div className="bg-white/80 rounded-2xl p-6 shadow-md">
          <h3 className="text-xl font-bold text-purple-800 mb-2">
            ⚡ Fast Redirects+
          </h3>
          <p className="text-purple-700">
            Lightning-fast redirection using server-side routing for the best performance.
          </p>
        </div>

        <div className="bg-white/80 rounded-2xl p-6 shadow-md">
          <h3 className="text-xl font-bold text-purple-800 mb-2">
            🔐 Secure & Reliable
          </h3>
          <p className="text-purple-700">
            Your links are safely stored with secure database handling and validation.
          </p>
        </div>

        <div className="bg-white/80 rounded-2xl p-6 shadow-md">
          <h3 className="text-xl font-bold text-purple-800 mb-2">
            🎯 Simple & Clean
          </h3>
          <p className="text-purple-700">
            No clutter, no ads — just shorten your URL and share it instantly.
          </p>
        </div>

      </section>

      {/* CTA FOOTER */}
      <section className="text-center pb-16">
        <p className="text-2xl font-extrabold text-purple-800 mb-4">
          Start shortening links in seconds
        </p>

        <Link href="/shorten">
          <button className="bg-purple-600 hover:bg-purple-700 transition-all rounded-xl shadow-lg px-8 py-3 font-bold text-white active:scale-95">
            Get Started
          </button>
        </Link>
      </section>

    </main>
  );
}
