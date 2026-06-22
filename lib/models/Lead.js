import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, default: "" },
    service: { type: String, default: "General Enquiry" },
    message: { type: String, required: true },
    status: { type: String, enum: ["new", "contacted", "converted", "closed"], default: "new" },
    source: { type: String, default: "website" },
  },
  { timestamps: true }
);

export default mongoose.models.Lead || mongoose.model("Lead", LeadSchema);
