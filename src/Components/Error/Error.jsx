import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-6 text-center">
      <h1 className="text-7xl md:text-8xl font-bold text-red-500">
        404
      </h1>

      <h2 className="text-3xl md:text-4xl font-semibold text-white mt-6">
        Page Not Found
      </h2>

      <p className="text-gray-400 mt-4 max-w-md">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-200"
      >
        Go Back Task Page
      </Link>
    </div>
  );
}

export default ErrorPage;