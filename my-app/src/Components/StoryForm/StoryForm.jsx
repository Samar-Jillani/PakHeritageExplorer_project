import { useState } from "react";
import styles  from "./../StoryForm/StoryForm.module.css";

export default function StoryForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    email: "",
    visitDate: "",
    locationVisited: "",
    rating: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/stories", {  
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert("Story submitted successfully!");
  };

  return (
    <div>
      <div>
        <h2 className={styles.headers}>
          Show Your Own Reviews
        </h2>
      </div>
    <form onSubmit={handleSubmit} className={styles.formContainer}>
  <div>
    <input
      placeholder="Your Name"
      className={styles.inputField}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    />
  </div>
  <div>
    <textarea
      placeholder="Your Experience"
      className={styles.inputField}
      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
    />
  </div>
  <div>
    <input
      type="email"
      placeholder="Your Email (optional)"
      className={styles.inputField}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    />
  </div>
  <div>
    <input
      type="date"
      className={styles.inputField}
      onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
    />
  </div>
  <div>
    <input
      type="text"
      placeholder="Place You Visited"
      className={styles.inputField}
      onChange={(e) => setFormData({ ...formData, locationVisited: e.target.value })}
    />
  </div>
  <div>
   <select
    className={styles.inputField}
    onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
  >
    <option value="">Rate Your Visit</option>
    <option value="1">⭐ </option>
    <option value="2">⭐⭐ </option>
    <option value="3">⭐⭐⭐ </option>
    <option value="4">⭐⭐⭐⭐ </option>
    <option value="5">⭐⭐⭐⭐⭐ </option>
   </select>
  </div>
  <div>
    <button type="submit" className={styles.submitButton}>
      Submit
    </button>
  </div>
  <br />
  <br />
</form>
</div>
  );
}
