import { useEffect, useState } from "react";
import "./ReviewHistory.css"; 

export default function ReviewHistory() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/stories/all")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data);
        setSubmissions(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to load reviews");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="admin-loading">Loading reviews...</div>;
  }

  if (error) {
    return <div className="admin-error">{error}</div>;
  }

  return (
    <div className="admin-panel">
      <h2 className="admin-title"> Visitors Reviews </h2>

      {submissions.length === 0 ? (
        <p className="admin-empty">No reviews found.</p>
      ) : (
        submissions.map((story) => (
          <div key={story._id} className="admin-card">
            <h4 className="admin-name">{story.name}</h4>
            <p className="admin-description">{story.description}</p>
            <p className="admin-meta"><strong>Email:</strong> {story.email}</p>
            <p className="admin-meta"><strong>Location:</strong> {story.locationVisited}</p>
            <p className="admin-meta"><strong>Visit Date:</strong> {new Date(story.visitDate).toLocaleDateString()}</p>
            <p className="admin-meta"><strong>Rating:</strong> {story.rating} ⭐</p>
            <p className="admin-meta"><strong>Status:</strong> {story.status}</p>
          </div>
        ))
      )}
    </div>
  );
}
