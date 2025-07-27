import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
        },
        Address:{
            type: String,
            required: true,
        },
        BusinessName: {
            type: String,
            required: true,
        },
        Phone:{
            type: Number,
            required: true,
        },
        Email: {
            type: String,
            required: true,
        }
    }
)   
export const Enquiry = mongoose.model("Enquiry", enquirySchema);

