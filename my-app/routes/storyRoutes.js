const express = require("express");
const Story = require("../models/Story");
const router = express.Router();


router.get("/all", async (req, res) => {
  try {
    const stories = await Story.find(); 
    res.json(stories); 
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch stories" });
  }
});


router.post("/", async (req, res) => {
  try {
    const newStory = new Story({ ...req.body, status: "approved" }); 
    await newStory.save(); 
    res.status(201).json(newStory); 
  } catch (err) {
    res.status(400).json({ message: "Failed to submit story" });
  }
});

module.exports = router;
