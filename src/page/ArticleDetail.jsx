import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import RequestPDFForm from "../components/RequestPDFForm";

const ArticleDetail = () => {
  const { id } = useParams(); // Get article ID from the URL
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        // const response = await axios.get(`http://127.0.0.1:8000/api/articles/${id}/`);
        const response = await axios.get(`https://spns-magazine-backend.onrender.com/api/articles/${id}/`);
        setArticle(response.data);
      } catch (err) {
        setError("Failed to fetch article. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!article) return <p>Article not found.</p>;

  return (
    <div className="mt-16 container mx-auto p-4">
      {/* Article Header */}
      <div className="text-center mb-8">
        {/* Image Section */}
        <div className="flex justify-center mb-6">
          {article.image ? (
            <img
              src={article.image} // Assuming article.image is the image URL
              alt={article.title}
              className="w-full h-72 object-cover rounded-lg shadow-md"
            />
          ) : (
            <span className="text-gray-400">Image Placeholder</span>
          )}
        </div>

        {/* Article Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{article.title}</h1>
      </div>

      {/* Article Description */}
      {/* <p className="text-lg text-gray-600 mb-6">
        {article.content || "No description available."}
      </p> */}
      <p
        className="text-lg text-gray-600 mb-6 text-center"
        dangerouslySetInnerHTML={{ __html: article.content || "No description available." }}
      ></p>

      {/* Download PDF Button
      {article.pdf_file && (
        <div className="flex justify-center mt-8">
          <a
            href={article.pdf_file}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#b3976b] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#724f17] transition duration-300"
          >
            Download PDF
          </a>
        </div>
      )} */}

      {/* Download PDF Section */}
      {article.pdf_file && (
        <div className="flex flex-col justify-center items-center mt-8">
          <button
            onClick={() => setFormVisible(!formVisible)}
            className="bg-[#b3976b] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#724f17] transition duration-300"
          >
            Request PDF
          </button>
          {formVisible && (
            <RequestPDFForm articleId={id} onSuccess={() => setFormVisible(false)} />
          )}
        </div>
      )}
    </div>

  );
};

export default ArticleDetail;
