import { useEffect, useState } from "react";

export default function StoryList() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/stories/approved")
      .then((res) => res.json())
      .then(setStories);
  }, []);

  return (
    <div>
      {stories.map((story) => (
        <div key={story._id} className="border p-4 m-2">
          <h3>{story.name}</h3>
          <p>{story.description}</p>
          {story.email && <p><strong>Email:</strong> {story.email}</p>}
          {story.locationVisited && <p><strong>Visited:</strong> {story.locationVisited}</p>}
          {story.visitDate && <p><strong>Date:</strong> {new Date(story.visitDate).toLocaleDateString()}</p>}
          {story.rating && <p><strong>Rating:</strong> {story.rating} ⭐</p>}
        </div>
      ))}
    </div>
  );
}
