// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const [editions, setEditions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch editions and their related articles
//     const fetchEditions = async () => {
//       try {
//         const response = await axios.get("http://localhost:8000/api/editions/");
//         setEditions(response.data);
//       } catch (err) {
//         setError("Failed to fetch editions. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEditions();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         {/* Circular Spinner Loader */}
//         <div className="w-16 h-16 border-4 border-t-4 border-b-4 border-brown-500 border-solid rounded-full animate-spin"></div>
//       </div>
//     );
//   }
  
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="mt-16">
//       <div className="container mx-auto p-4">
//         {editions.length === 0 ? (
//           <p className="text-center text-gray-500">No editions available.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {editions.map((edition) => (
//               <div
//                 key={edition.id}
//                 className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
//               >
//                 <div className="h-40 bg-gray-100 rounded-t-lg flex items-center justify-center">
//                   {/* Display the cover image if it exists */}
//                   {edition.coverimage ? (
//                     <img
//                       src={edition.coverimage} // Assuming coverimage is a URL
//                       alt={`${edition.name} cover`}
//                       className="h-full w-full object-cover rounded-t-lg"
//                     />
//                   ) : (
//                     <span className="text-gray-400">Image Placeholder</span>
//                   )}
//                 </div>
//                 <div className="p-4">
//                   <h2 className="text-lg font-bold text-gray-700">{edition.name}</h2>
//                   <p className="text-sm text-gray-500">
//                     <strong>Publication Date:</strong> {edition.release_date}
//                   </p>
//                   <div className="mt-4">
//                     <a
//                       // href={edition.download_url}
//                       href={edition.pdf_file}
//                       className="block text-blue-500 underline hover:text-blue-700"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Download All Articles
//                     </a>
//                     <button
//                       onClick={() => navigate(`/editions/${edition.id}/articles`)}
//                       className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//                     >
//                       View All Articles
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;


// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // const Home = () => {
// //   const [editions, setEditions] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     // Fetch editions and their related articles
// //     const fetchEditions = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:8000/api/editions/");
// //         setEditions(response.data);
// //       } catch (err) {
// //         setError("Failed to fetch editions. Please try again later.");
// //       } finally {
// //         // Simulate a 3-second delay before setting loading to false
// //         setTimeout(() => {
// //           setLoading(false);
// //         }, 3000); // Delay of 3 seconds
// //       }
// //     };

// //     fetchEditions();
// //   }, []);

// //   if (loading) {
// //     return (
// //       <div className="flex justify-center items-center h-screen">
// //         {/* Circular Spinner Loader */}
// //         <div className="w-16 h-16 border-4 border-t-4 border-b-4 border-brown-500 border-solid rounded-full animate-spin"></div>
// //       </div>
// //     );
// //   }

// //   if (error) return <p>{error}</p>;

// //   return (
// //     <div className="mt-16">
// //       <div className="container mx-auto p-4">
// //         {editions.length === 0 ? (
// //           <p className="text-center text-gray-500">No editions available.</p>
// //         ) : (
// //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //             {editions.map((edition) => (
// //               <div
// //                 key={edition.id}
// //                 className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
// //               >
// //                 <div className="h-40 bg-gray-100 rounded-t-lg flex items-center justify-center">
// //                   {/* Display the cover image if it exists */}
// //                   {edition.coverimage ? (
// //                     <img
// //                       src={edition.coverimage} // Assuming coverimage is a URL
// //                       alt={`${edition.name} cover`}
// //                       className="h-full w-full object-cover rounded-t-lg"
// //                     />
// //                   ) : (
// //                     <span className="text-gray-400">Image Placeholder</span>
// //                   )}
// //                 </div>
// //                 <div className="p-4">
// //                   <h2 className="text-lg font-bold text-gray-700">{edition.name}</h2>
// //                   <p className="text-sm text-gray-500">
// //                     <strong>Publication Date:</strong> {edition.release_date}
// //                   </p>
// //                   <div className="mt-4">
// //                     <a
// //                       href={edition.download_url}
// //                       className="block text-blue-500 underline hover:text-blue-700"
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                     >
// //                       Download All Articles
// //                     </a>
// //                     <button
// //                       onClick={() => navigate(`/editions/${edition.id}/articles`)}
// //                       className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
// //                     >
// //                       View All Articles
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";

const Home = () => {
  const [editions, setEditions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1); // Current page
  const [hasMore, setHasMore] = useState(true); // Whether more editions exist
  const navigate = useNavigate();

  const fetchEditions = async (currentPage) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/editions/?page=${currentPage}`
        // `https://spns-magazine-backend.onrender.com/api/editions/?page=${currentPage}`
      );
      // Append new editions to the existing list
      // setEditions((prevEditions) => [...prevEditions, ...response.data.results]);
      setEditions((prevEditions) => {
        const newEditions = response.data.results;
        const uniqueEditions = [
          ...prevEditions,
          ...newEditions.filter(
            (edition) => !prevEditions.some((e) => e.id === edition.id)
          ),
        ];
        return uniqueEditions;
      });

      // Check if there are more pages
      setHasMore(response.data.next !== null);
    } catch (err) {
      setError("Failed to fetch editions. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Fetching page:", page);
    fetchEditions(page);
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (loading && page === 1) {
    return (
      <div className="flex justify-center items-center h-screen">
        {/* Circular Spinner Loader */}
        <div className="w-16 h-16 border-4 border-t-4 border-b-4 border-brown-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) return <p>{error}</p>;

  return (
    <div className="mt-16">
      <div>
        <Slider/>
      </div>
      <div className="container mx-auto p-4">
        {editions.length === 0 ? (
          <p className="text-center text-gray-500">No editions available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {editions.map((edition) => (
              <div
                key={edition.id}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
              >
                <div className="h-40 bg-gray-100 rounded-t-lg flex items-center justify-center">
                  {/* Display the cover image if it exists */}
                  {edition.coverimage ? (
                    <img
                      src={edition.coverimage} // Assuming coverimage is a URL
                      alt={`${edition.name} cover`}
                      className="h-full w-full object-cover rounded-t-lg"
                    />
                  ) : (
                    <span className="text-gray-400">Image Placeholder</span>
                  )}
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-700">
                    {edition.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    <strong>Publication Date:</strong> {edition.release_date}
                  </p>
                  <div className="mt-4">
                    {/* <a
                      href={edition.pdf_file}
                      className="block text-blue-500 underline hover:text-blue-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download All Articles
                    </a> */}
                    <button
                      onClick={() => 
                        navigate(`/editions/${edition.id}/articles`, {
                          state: { description: edition.description }, // Pass the description as state
                        })
                      }
                      className="mt-2 bg-[#b3976b] text-white px-4 py-2 rounded hover:bg-[#b3976b] transition"
                    >
                      View All Articles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {hasMore && !loading && (
          <div className="flex justify-center mt-6">
            <button
              onClick={loadMore}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Load More
            </button>
          </div>
        )}

        {/* Show loading spinner when fetching more */}
        {loading && page > 1 && (
          <div className="flex justify-center mt-6">
            <div className="w-8 h-8 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
