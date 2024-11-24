// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { useParams, Link } from "react-router-dom";

// // const EditionArticles = () => {
// //   const { id } = useParams(); // Get edition ID from the URL
// //   const [articles, setArticles] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");

// //   useEffect(() => {
// //     const fetchArticles = async () => {
// //       try {
// //         const response = await axios.get(`http://127.0.0.1:8000/api/articles/?edition=${id}`);
// //         setArticles(response.data);
// //       } catch (err) {
// //         setError("Failed to fetch articles. Please try again later.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchArticles();
// //   }, [id]);

// //   if (loading) return <p>Loading...</p>;
// //   if (error) return <p>{error}</p>;

// //   return (
// //     <div>
// //       <h1>Articles for Edition {id}</h1>
// //       {articles.length === 0 ? (
// //         <p>No articles available for this edition.</p>
// //       ) : (
// //         articles.map((article) => (
// //           <div
// //             key={article.id}
// //             style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
// //           >
// //             <h2>{article.title}</h2>
// //             <p>{article.description || "No description available."}</p>
// //             <Link to={`/articles/${article.id}`}>View Article Details</Link>
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // };

// // export default EditionArticles;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams, Link } from "react-router-dom";

// const EditionArticles = () => {
//   const { id } = useParams(); // Get edition ID from the URL
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         // Use the correct URL structure to get articles for the specific edition
//         const response = await axios.get(`http://127.0.0.1:8000/api/editions/${id}/articles/`);
//         setArticles(response.data);
//       } catch (err) {
//         setError("Failed to fetch articles. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArticles();
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="container mx-auto p-4 mt-16">
//       {articles.length === 0 ? (
//         <p className="text-center text-gray-500">No articles available for this edition.</p>
//       ) : (
//         <>
//           <h1 className="text-2xl font-bold mb-4">Articles for Edition {}</h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {articles.map((article) => (
//               <div
//                 key={article.id}
//                 className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4"
//               >
//                 {/* Image section */}
//                 <div className="h-40 bg-gray-100 rounded-t-lg flex items-center justify-center">
//                   {article.image ? (
//                     <img
//                       src={article.image} // Assuming `article.image` is the URL to the image
//                       alt={article.title}
//                       className="w-full h-full object-cover rounded-t-lg"
//                     />
//                   ) : (
//                     <span className="text-gray-400">Image Placeholder</span>
//                   )}
//                 </div>

//                 {/* Article content */}
//                 <div className="p-4">
//                   <h2 className="text-xl font-semibold text-gray-700 mb-2">{article.title}</h2>
//                   <p className="text-sm text-gray-500 mb-4 font-bold">
//                     Editor: {article.contributor?.full_name  || "No description available."}
//                   </p>
//                   <Link
//                     to={`/articles/${article.id}`}
//                     className="text-blue-500 underline hover:text-blue-700"
//                   >
//                     View Article Details
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </>
//       )}
//     </div>

//   );
// };

// export default EditionArticles;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

// const EditionArticles = () => {
//   const { id } = useParams(); // Get edition ID from the URL
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [nextPage, setNextPage] = useState(null); // Track the next page for pagination
//   const [loadingMore, setLoadingMore] = useState(false); // Loading state for "Load More"

//   useEffect(() => {
//     // Fetch the initial articles
//     const fetchArticles = async () => {
//       try {
//         const response = await axios.get(`http://127.0.0.1:8000/api/editions/${id}/articles/`);
//         setArticles(response.data.results); // Set the articles from the first page
//         setNextPage(response.data.next); // Store the next page URL
//       } catch (err) {
//         setError("Failed to fetch articles. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArticles();
//   }, [id]);

//   // Function to load more articles
//   const loadMoreArticles = async () => {
//     if (!nextPage) return; // If no next page, exit
//     setLoadingMore(true);
//     try {
//       const response = await axios.get(nextPage); // Fetch the next page
//       setArticles((prevArticles) => [...prevArticles, ...response.data.results]); // Append new articles
//       setNextPage(response.data.next); // Update the next page URL
//     } catch (err) {
//       setError("Failed to load more articles. Please try again later.");
//     } finally {
//       setLoadingMore(false);
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="container mx-auto p-4 mt-16">
//       {articles.length === 0 ? (
//         <p className="text-center text-gray-500">No articles available for this edition.</p>
//       ) : (
//         <>
//           <h1 className="text-2xl font-bold mb-4">Articles for Edition {id}</h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {articles.map((article) => (
//               <div
//                 key={article.id}
//                 className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4"
//               >
//                 {/* Image section */}
//                 <div className="h-40 bg-gray-100 rounded-t-lg flex items-center justify-center">
//                   {article.image ? (
//                     <img
//                       src={article.image} // Assuming `article.image` is the URL to the image
//                       alt={article.title}
//                       className="w-full h-full object-cover rounded-t-lg"
//                     />
//                   ) : (
//                     <span className="text-gray-400">Image Placeholder</span>
//                   )}
//                 </div>

//                 {/* Article content */}
//                 <div className="p-4">
//                   <h2 className="text-xl font-semibold text-gray-700 mb-2">{article.title}</h2>
//                   <p className="text-sm text-gray-500 mb-4">
//                     {article.description || "No description available."}
//                   </p>
//                   <Link
//                     to={`/articles/${article.id}`}
//                     className="text-blue-500 underline hover:text-blue-700"
//                   >
//                     View Article Details
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//           {nextPage && (
//             <div className="text-center mt-6">
//               <button
//                 onClick={loadMoreArticles}
//                 className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                 disabled={loadingMore}
//               >
//                 {loadingMore ? "Loading..." : "Load More Articles"}
//               </button>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default EditionArticles;



const EditionArticles = () => {
  const { id } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [nextPage, setNextPage] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/editions/${id}/articles/`);
        console.log("API Response:", response.data); // Debugging
        setArticles(response.data.results || response.data);
        setNextPage(response.data.next);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch articles. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [id]);

  const loadMoreArticles = async () => {
    if (!nextPage) return;
    setLoadingMore(true);
    try {
      const response = await axios.get(nextPage);
      setArticles((prevArticles) => [...prevArticles, ...(response.data.results || [])]);
      setNextPage(response.data.next);
    } catch (err) {
      console.error(err);
      setError("Failed to load more articles.");
    } finally {
      setLoadingMore(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4 mt-16">
      {Array.isArray(articles) && articles.length === 0 ? (
        <p className="text-center text-gray-500">No articles available for this edition.</p>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">Articles for Edition {id}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.isArray(articles) &&
              articles.map((article) => (
                <div key={article.id} className="bg-white rounded-lg shadow-md p-4">
                  <div className="h-40 bg-gray-100 rounded-t-lg">
                    {article.image ? (
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-gray-400">Image Placeholder</span>
                    )}
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold">{article.title}</h2>
                    <p>{article.description || "No description available."}</p>
                    <Link to={`/articles/${article.id}`} className="text-blue-500">View Details</Link>
                  </div>
                </div>
              ))}
          </div>
          {nextPage && (
            <div className="text-center mt-6">
              <button onClick={loadMoreArticles} className="px-6 py-2 bg-[] text-white rounded">
                {loadingMore ? "Loading..." : "Load More Articles"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default EditionArticles;