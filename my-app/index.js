const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const storyRoutes = require("./routes/storyRoutes"); 

const app = express();


app.use(express.json());

app.use(cors());


mongoose.connect("mongodb://localhost:27017/heritage-explorer", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error: ", err));


app.use("/api/stories", storyRoutes);

app.use('/uploads', express.static('uploads'));


app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
