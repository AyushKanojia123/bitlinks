export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 flex items-center justify-center px-6">
      <div className="max-w-xl w-full bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-10 border border-purple-100">

        <h1 className="text-4xl font-extrabold text-purple-700 mb-4 text-center tracking-tight">
          Contact Us
        </h1>

        <p className="text-gray-600 text-center mb-10 text-lg">
          Have questions or feedback? We’d love to hear from you.
        </p>

        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="px-5 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition shadow-sm"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="px-5 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition shadow-sm"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="px-5 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition shadow-sm resize-none"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transition-all text-white font-bold py-3 rounded-2xl shadow-lg active:scale-95 tracking-wide"
          >
            Send Message
          </button>
        </form>

      </div>
    </main>
  );
}
