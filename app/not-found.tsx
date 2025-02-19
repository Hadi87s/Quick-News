import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="relative w-full max-w-lg">
        <img
          src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg"
          alt="Not Found Illustration"
          width={500}
          height={500}
          className="mx-auto bg-blend-multiply rounded"
        />
      </div>
      <h1 className="text-4xl font-bold text-gray-200 mt-6">Page Not Found</h1>
      <p className="text-gray-400 mt-2 text-lg">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
