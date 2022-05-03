import {model, Schema } from 'mongoose';

const BarberUser = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    freeHours: {
        type: String,
        required: true,
    },
});

const Barber = model('Barber', BarberUser);


export default Barber;