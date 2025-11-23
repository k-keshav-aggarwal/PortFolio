import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b1120] to-[#0f172a] text-white px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-7xl font-extrabold text-blue-400 drop-shadow-md mb-4">
          404
        </h1>

        <p className="text-xl text-gray-300 mb-10">
          Looks like this page doesn't exist.
        </p>

        <div className="bg-[#1a2335] border border-blue-700/30 px-6 py-4 rounded-lg text-left mb-10 shadow-lg">
          <code className="text-blue-300">
            {`const error = 'Page Not Found';`}
          </code>
        </div>

        <a
          href="/"
          className="inline-block px-6 py-3 rounded-md bg-blue-500 text-black font-semibold hover:bg-blue-400 transition"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;