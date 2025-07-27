
import { Enquiry } from "./enquiry.schema.js";
export class EnquiryRepository {
    async addEnquiry(fullname,Address,BusinessName,Phone,Email) {
        try {
            const newEnquiry = {
                fullname,
                Address,
                BusinessName,
                Phone,
                Email
            };
            const enquiryData = new Enquiry(newEnquiry);
            await enquiryData.save();
            return {success: true, message:"Your Enquiry has been created successfully"};
        } catch (error) {
            throw new Error("Error creating enquiry");
        }       
    }
}