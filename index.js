import express from "express"
import enquiryRouter from "./src/usersEnquiry/enquiry.router.js";
import cors from "cors";

const server= express();

server.use(cors({
  origin: "http://localhost:3000", 
  credentials: true                
}));
server.use(express.json());

server.use("/VayuApi",enquiryRouter);
export default server;