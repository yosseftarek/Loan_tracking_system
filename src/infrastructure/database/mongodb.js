import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI_ONLINE);
//     console.log(`MongoDB connected ON ${process.env.MONGO_URI_ONLINE}`);
//   } catch (error) {
//     console.error('MongoDB connection failed:', error.message);
//     process.exit(1);
//   }
// };


const MONGO_URI_ONLINE = process.env.MONGO_URI_ONLINE;
const MONGO_URI = process.env.MONGO_URI;

const connectionDB = async () => {
    return await mongoose.connect(MONGO_URI)
        .then(() => {
            console.log(`connected to database on ${MONGO_URI}`)
        }).catch((err) => {
            console.log({ msg: "fail to connect", err })
        })
}
export default connectionDB
