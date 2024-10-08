import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    city: {
        type: String,
    },
    fullName: {
        type: String,
    },
    fatherName: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    phone: {
        type: String,
    },
    cnic: {
        type: String,
        required: true
    },
    father_cnic: {
        type: String,
    },
    date_of_birth: {
        type: String,
    },
    gender: {
        type: String,
    },
    address: {
        type: String,
    },
    lastQualification: {
        type: String,
    },
    laptop: {
        type: Boolean,
    },
    marks:{
        type:Number,
        default:0
    },
    result:{
        type:Boolean,
        default:false
    },
    img:{
        type:[String],
        required:false
    }

});

const userModel = mongoose.model("user", userSchema);
export default userModel;