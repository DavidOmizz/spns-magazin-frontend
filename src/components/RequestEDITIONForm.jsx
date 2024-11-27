import React, { useState } from "react";

const RequestEditionForm = ({ editionId, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    company: "",
    job_title: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch(
        // `http://127.0.0.1:8000/api/editions/${editionId}/request_pdf/`, // Update the URL to match your API
        `https://spns-magazine.onrender.com/api/editions/${editionId}/request_pdf/`, // Update the URL to match your API
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setMessage("Edition request submitted! Check your email for the PDF.");
        setFormData({ name: "", email: "", phone_number: "", company: "", job_title: "" });
        onSuccess && onSuccess(); // Hide the form after success
      } else {
        const errorData = await response.json();
        console.log(errorData);
        setMessage(`Error: ${errorData.error || "Unable to process request."}`);
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-6">
      <form onSubmit={handleSubmit} className="space-y-4 w-[30%] mx-auto">
        <div>
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone Number:</label>
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Company:</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Job Title:</label>
          <input
            type="text"
            name="job_title"
            value={formData.job_title}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#b3976b] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#724f17] transition duration-300"
        >
          {isSubmitting ? "Submitting..." : "Request Edition"}
        </button>
      </form>
      {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
    </div>
  );
};

export default RequestEditionForm;
