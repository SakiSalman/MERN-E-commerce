import mongoose from "mongoose";



const connectDtabase = async () => {

    try {
        const connection = await mongoose.connect(process.env.MONGO_STRING)

        console.log(`mongodb connection success`.bgCyan.black);

    } catch (error) {
        console.log(`error on mongo db database ${error}`.bgRed);
    }

}


export default connectDtabase