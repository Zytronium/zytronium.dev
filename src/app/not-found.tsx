
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="pt-20 px-4">
      <div className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-6">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist in this universe.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
