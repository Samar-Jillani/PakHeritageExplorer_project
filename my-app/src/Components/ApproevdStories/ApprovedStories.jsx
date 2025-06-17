import { useEffect, useState } from "react";

export default function ApprovedStories() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/stories/all")
      .then((res) => res.json())
      .then(setSubmissions);
  }, []);

  return (
    <div>
      <h2>Submitted Stories</h2>
      {submissions.map((story) => (
        <div key={story._id} className="story-card">
          <h3>{story.name}</h3>
          <p>{story.description}</p>
          <p><strong>Email:</strong> {story.email}</p>
          <p><strong>Location:</strong> {story.locationVisited}</p>
          <p><strong>Visit Date:</strong> {story.visitDate}</p>
          <p><strong>Rating:</strong> {story.rating} ⭐</p>
          <p><strong>Status:</strong> {story.status}</p>
        </div>
      ))}
    </div>
  );
}
