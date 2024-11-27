import React, { useState, useEffect } from "react";
import axios from "axios";

const ContributorCards = () => {
  const [contributors, setContributors] = useState([]);
  const [selectedContributor, setSelectedContributor] = useState(null); // Contributor for the modal
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
//   const [currentPage, setCurrentPage] = useState("http://127.0.0.1:8000/api/contributors/");
  const [currentPage, setCurrentPage] = useState("https://spns-magazine.onrender.com/api/contributors/");
  const [pagination, setPagination] = useState({ next: null, previous: null });

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        setLoading(true);
        const response = await axios.get(currentPage);
        setContributors(response.data.results); // Use `results` from paginated API
        setPagination({ next: response.data.next, previous: response.data.previous }); // Update pagination links
      } catch (err) {
        setError("Failed to fetch contributors. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchContributors();
  }, [currentPage]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4 mt-16">
      <h1 className="text-2xl font-bold mb-4">Contributors</h1>

      {/* Contributor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {contributors.map((contributor) => (
          <div
            key={contributor.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4 cursor-pointer"
            onClick={() => setSelectedContributor(contributor)} // Open modal
          >
            {/* Profile Picture */}
            <div className="h-64 bg-gray-100 rounded-t-lg flex items-center justify-center">
              {contributor.profile_picture ? (
                <img
                  src={contributor.profile_picture}
                  alt={contributor.full_name || contributor.user}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              ) : (
                <span className="text-gray-400">No Profile Picture</span>
              )}
            </div>

            {/* Contributor Info */}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                {contributor.full_name || "No Name Available"}
              </h2>
              {/* <p className="text-sm text-gray-500">Name: {contributor.full_name}</p> */}
            </div>
            {/* View Button */}
            <button
            className="mt-2 bg-[#b3976b] text-white px-4 py-2 rounded-full hover:bg-[#b3976b] transition"
            onClick={() => setSelectedContributor(contributor)} // Open modal
            >
            View
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-between items-center mt-6">
        <button
          className="bg-gray-200 text-gray-600 px-4 py-2 rounded disabled:opacity-50"
          onClick={() => setCurrentPage(pagination.previous)}
          disabled={!pagination.previous}
        >
          Previous
        </button>
        <button
          className="bg-gray-200 text-gray-600 px-4 py-2 rounded disabled:opacity-50"
          onClick={() => setCurrentPage(pagination.next)}
          disabled={!pagination.next}
        >
          Next
        </button>
      </div>

      {/* Modal for Contributor Details */}
      {selectedContributor && (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedContributor(null)} // Close modal on outside click
        >
            <div
            className="bg-white rounded-lg shadow-lg w-3/4 md:w-1/2 p-6 flex"
            onClick={(e) => e.stopPropagation()} // Prevent close on modal click
            >
            {/* Contributor Image - Left side */}
            <div className="flex-shrink-0 mr-6">
                {selectedContributor.profile_picture ? (
                <img
                    src={selectedContributor.profile_picture}
                    alt={selectedContributor.full_name || selectedContributor.user}
                    className="w-48 h-60 object-cover rounded-lg"
                />
                ) : (
                <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">No Profile Picture</span>
                </div>
                )}
            </div>

            {/* Contributor Info - Right side */}
            <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">
                {selectedContributor.full_name || "No Name Available"}
                </h2>
                <p className="mb-4">
                <strong>Bio:</strong> {selectedContributor.bio || "No Bio Available"}
                </p>
                <button
                className="bg-red-500 text-white px-4 py-2 rounded-full"
                onClick={() => setSelectedContributor(null)} // Close modal
                >
                Close
                </button>
            </div>
            </div>
        </div>
        )}

    </div>
  );
};

export default ContributorCards;
