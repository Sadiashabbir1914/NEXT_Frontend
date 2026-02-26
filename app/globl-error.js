// app/global-error.js
"use client";

import { useEffect, useState } from "react";

export default function GlobalError({ error, reset }) {
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    console.error("Global Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-4">
        Oops! Something went wrong.
      </h1>
      <p className="text-gray-700 mb-4">
        We're having trouble loading the page. You can try refreshing or going back to the homepage.
      </p>

      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => reset()}
        >
          Try Again
        </button>
        <button
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>

      {showDetails && (
        <pre className="mt-4 p-4 bg-gray-100 text-left text-sm rounded overflow-x-auto">
          {error.message}
          {"\n"}
          {error.stack}
        </pre>
      )}
    </div>
  );
}