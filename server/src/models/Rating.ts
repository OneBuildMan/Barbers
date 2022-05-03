import {model, Schema } from 'mongoose';

const RatingSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    rezId: {
        type: String,
        required: true,
    }
})

const Rating = model("Review", RatingSchema);

export default Rating;