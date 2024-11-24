import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [hasNextPage, setHasNextPage] = useState(false); // Check for next page
  const [hasPreviousPage, setHasPreviousPage] = useState(false); // Check for previous page

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        // const response = await axios.get(`http://127.0.0.1:8000/api/articles/?page=${currentPage}`);
        const response = await axios.get(`https://spns-magazine.onrender.com/api/articles/?page=${currentPage}`);
        setArticles(response.data.results); // Assuming `results` contains paginated data
        setHasNextPage(!!response.data.next); // `next` contains the next page URL or is null
        setHasPreviousPage(!!response.data.previous); // `previous` contains the previous page URL or is null
      } catch (err) {
        setError("Failed to fetch articles. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [currentPage]); // Refetch articles when currentPage changes

  const handleNext = () => {
    if (hasNextPage) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (hasPreviousPage) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4 mt-16">
      {articles.length === 0 ? (
        <p className="text-center text-gray-500">No articles available.</p>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">All Articles</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4"
              >
                {/* Image section */}
                <div className="h-40 bg-gray-100 rounded-t-lg flex items-center justify-center">
                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  ) : (
                    <span className="text-gray-400">Image Placeholder</span>
                  )}
                </div>

                {/* Article content */}
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-700 mb-2">{article.title}</h2>
                  <p className="text-sm text-gray-500 mb-4 font-bold">
                    Editor: {article.contributor?.full_name || "No description available."}
                  </p>
                  <Link
                    to={`/articles/${article.id}`}
                    className="text-blue-500 underline hover:text-blue-700"
                  >
                    View Article Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handlePrevious}
              disabled={!hasPreviousPage}
              className={`px-4 py-2 mr-2 border rounded ${
                hasPreviousPage ? "bg-[#b3976b] text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={!hasNextPage}
              className={`px-4 py-2 ml-2 border rounded ${
                hasNextPage ? "bg-[#b3976b] text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Articles;
