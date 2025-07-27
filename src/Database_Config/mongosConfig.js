import mongoose from "mongoose";
const URL="mongodb+srv://haren111990:G9QIDfqjG8q9H7AI@vayusoftwares.46yw2j0.mongodb.net/?retryWrites=true&w=majority&appName=VayuSoftwares";

const connectToDatabase = async () => {
     try{
        await mongoose.connect(URL);
        console.log("Connected to MongoDB succesfully....");
    }
    catch(err){
        console.log("Something Wrong to Connecting to Database..........");
    }   
};

export default connectToDatabase;