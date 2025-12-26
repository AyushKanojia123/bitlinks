export default function About() {
  return (
    <main className="min-h-screen bg-purple-100 flex items-center justify-center px-6">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-xl p-12">
        
        {/* Header */}
        <div className="mb-10 border-l-4 border-purple-600 pl-6">
          <h1 className="text-3xl font-semibold text-gray-800">
            About Bitlinks
          </h1>
          <p className="text-gray-500 mt-2">
            Simple links. Strong performance.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700 leading-relaxed">
          <p>
            Bitlinks is a lightweight URL shortener built for speed and clarity.
            It removes unnecessary steps and lets you focus on sharing links
            quickly and efficiently.
          </p>

          <p>
            Whether you're sending links in chats, emails, or social media,
            Bitlinks ensures your URLs stay short, clean, and reliable every time.
          </p>

          <p>
            We believe tools should feel invisible — no clutter, no confusion,
            just results.
          </p>

          <p>
            Powered by modern web technologies, Bitlinks is designed to scale
            while staying fast and dependable.
          </p>
        </div>

      </div>
    </main>
  );
}
