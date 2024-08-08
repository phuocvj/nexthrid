// components/Layout.js
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen sm:flex-row">
      <Head>
        <title>Responsive Layout with Tailwind CSS</title>
        <meta name="description" content="Responsive layout with Tailwind CSS sidebar and bottom navbar" />
      </Head>

      {/* Sidebar for larger screens, bottom navbar for smaller screens */}
      <nav className="flex items-center sm:gap-6 sm:flex-col max-sm:justify-center max-sm:gap-20 max-sm:pt-1.5 max-sm:pb-2 max-sm:border-t sm:w-14 bg-gray-100 p-5  sm:border-r">
        <a href="/" className="flex items-center sm:flex-col sm:w-full py-2 text-gray-700 hover:bg-gray-200 rounded transition-colors duration-300">
          <span className="text-sm sm:text-base font-semibold">❌</span>
        </a>
        <a href="/about" className="flex items-center sm:flex-col sm:w-full py-2 text-gray-700 hover:bg-gray-200 rounded transition-colors duration-300">
          <span className="text-sm sm:text-base font-semibold">💥</span>
        </a>
        <a href="/contact" className="flex items-center sm:flex-col sm:w-full py-2 text-gray-700 hover:bg-gray-200 rounded transition-colors duration-300">
          <span className="text-sm sm:text-base font-semibold">🛐</span>
        </a>
      </nav>

      {/* Main content area */}
      <main className="flex-1 p-6">
        {children}
      </main>


    </div>
  );
}
