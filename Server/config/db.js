import mongoose from 'mongoose';
import colors from 'colors';

const connectDB= async () => {
    try{
        const connec = await mongoose.connect(process.env.MONGO_URI, {
           useUnifiedTopology: true,
           useNewUrlParser: true,
        });

        console.log(`MongoDB connected: ${connec.connection.host}`.cyan.underline);
    } catch(error){
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }

}

export default connectDB;