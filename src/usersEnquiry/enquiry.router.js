import express from "express";
import { EnquiryController } from "./enquirt.controller.js";
const enquiryRouter  = express.Router();
const enquiryController = new EnquiryController();

enquiryRouter.post("/enquiry", (req, res) => {
    enquiryController.createEnquiry(req, res);
});   

export default enquiryRouter;