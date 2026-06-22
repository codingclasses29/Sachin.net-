import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, default: "" },
    content: [{ type: String }],
    category: { type: String, default: "General" },
    readTime: { type: String, default: "5 min read" },
    gradient: { type: String, default: "from-blue-600 to-indigo-700" },
    published: { type: Boolean, default: true },
    author: { type: String, default: "Sachin Kumar" },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
