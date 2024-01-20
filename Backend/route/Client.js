const mongoose = require("mongoose");
const express = require("express")
const Blog = require("../Models/Blog")
const router = express.Router();

router.post("/BlogPost", async (req, res) => {
    try {
        const { title, description } = req.body;
        console.log(req.body)
        if (!req.body || !req.body.title || !req.body.description) {
            return res.status(400).json({ error: 'Please enter title and description' });
        }
        const newBlog = new Blog(req.body);
        const savedBlog = await newBlog.save();
        res.status(201).json(savedBlog);
    } catch (error) {
        console.error('Error creating contractor:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



router.get("/getPost", async (req, res) => {
    try {
        const blog = await Blog.find();
        if (!blog || blog.length === 0) {
            return res.status(404).json({ message: "No Blog found" });
        };
        const totalblog = await Blog.countDocuments();
        res.status(200).json({ message: "Successfully retrieved contractors", blog, totalblog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.get("/getPost1/:id", async (req, res) => {
    const blogId = req.params.id;
  
    try {
      const blog = await Blog.findById(blogId);
  
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
  
      res.status(200).json({ message: "Successfully retrieved blog by ID", blog });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

router.delete("/deleteBlog/:blogId", async (req, res) => {
    try {
        const blogId = req.params.blogId; // Corrected parameter name
        // Use the findById method to find a blog by ID
        const totalblog = await Blog.findById(blogId);
        console.log(totalblog);

        if (!totalblog) {
            return res.status(404).json({ message: "Blog Not Found for Delete" });
        }

        // Assuming you want to actually delete the blog from the database
        await Blog.findByIdAndDelete(blogId);

        res.status(200).json({ message: "Blog deleted Successfully", totalblog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.put("/UpdateBlog/:blogId", async (req, res) => {
    const blogId = req.params.blogId; // Corrected parameter name
    try {
        // Check if the provided blog ID is valid
        if (!blogId || !mongoose.Types.ObjectId.isValid(blogId)) {
            return res.status(400).json({ error: 'Invalid Blog ID' });
        }
        // Find the blog by ID
        const blog = await Blog.findById(blogId);

        // Check if the blog exists
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        // Update the blog properties based on the request body
        const { title, description } = req.body;
        console.log(req.body)
        blog.title = title || blog.title;
        blog.description = description || blog.description;

        // Save the updated blog
        const updatedBlog = await blog.save();

        res.status(200).json({ message: 'Blog updated successfully', blog: updatedBlog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});




module.exports = router