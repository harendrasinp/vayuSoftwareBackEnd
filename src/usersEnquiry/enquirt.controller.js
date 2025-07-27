import { EnquiryRepository } from "./enquiry.repository.js";
export class EnquiryController {
    constructor() {
        this.enquiryRepository = new EnquiryRepository();
    }
    async createEnquiry(req, res) {
        try {
            const {fullname,Address,BusinessName,Phone,Email} = req.body;
            const newEnquiry = await this.enquiryRepository.addEnquiry(fullname,Address,BusinessName,Phone,Email);
            if(newEnquiry.success) {
                res.status(201).send(newEnquiry.message);
            }
        } catch (error) {
            res.status(500).send("Error creating enquiry");
        }   
    }
}