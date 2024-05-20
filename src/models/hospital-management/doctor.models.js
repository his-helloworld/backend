import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        default: 0,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        default: 0
    },
    worksInHospitals: {
        type: [{
            type:mongoose.schema.Types.ObjectId,
            ref: "Hospital"
        }]
    }
}, {timestamps: true})

export const Doctor = mongoose.model("Doctor", doctorSchema)