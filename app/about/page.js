import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-purple-100 flex flex-col justify-between px-6">

      {/* MAIN CONTENT */}
      <section className="flex items-center justify-center py-16">
        <div className="max-w-5xl w-full bg-white shadow-md rounded-xl p-12">
          
          {/* Header */}
          <div className="mb-12 border-l-4 border-purple-600 pl-6">
            <h1 className="text-3xl font-semibold text-gray-800">
              About Bitlinks
            </h1>
            <p className="text-gray-500 mt-2">
              Simple links. Strong performance.
            </p>
          </div>

          {/* Intro */}
          <p className="text-gray-700 text-lg mb-10 leading-relaxed max-w-3xl">
            Bitlinks is a modern URL shortener built for people who value speed,
            simplicity, and reliability. We remove friction from sharing links
            so you can focus on what truly matters.
          </p>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700 leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Built for Speed
              </h3>
              <p>
                Bitlinks uses optimized server-side redirection to ensure
                lightning-fast performance, even at scale.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Clean by Design
              </h3>
              <p>
                No clutter. No distractions. Every feature exists to make link
                sharing as simple and efficient as possible.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Reliable & Secure
              </h3>
              <p>
                Links are safely stored and handled with modern security
                practices to ensure reliability you can trust.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Scalable Foundation
              </h3>
              <p>
                Built with modern web technologies, Bitlinks is designed to grow
                without compromising speed or stability.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-14 bg-purple-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Our Philosophy
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We believe tools should feel invisible — easy to use, fast to
              respond, and powerful without being complicated. Bitlinks is our
              take on building software that respects your time.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-purple-200 py-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-gray-600">
          
          <p className="text-sm">
            © {new Date().getFullYear()} Bitlinks. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/" className="hover:text-purple-600 transition">
              Home
            </Link>
            <Link href="/contact" className="hover:text-purple-600 transition">
              Contact
            </Link>
            <Link href="/shorten" className="hover:text-purple-600 transition">
              Shorten URL
            </Link>
          </div>

        </div>
      </footer>

    </main>
  );
}
