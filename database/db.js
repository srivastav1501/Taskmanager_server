import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();



const Connection = () => {
    const MONGODB_URI = process.env.DATABASE_URI;

    mongoose.connect(MONGODB_URI);

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', (error) => {
        console.log('Error while connecting with the database ', error.message);
    })
}

export default Connection;