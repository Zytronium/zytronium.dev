
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="page-shell">
      <div className="content-wrap max-w-4xl text-center py-20">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-6">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist in this universe.
        </p>
        <Link
          href="/"
          className="button button-primary"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
