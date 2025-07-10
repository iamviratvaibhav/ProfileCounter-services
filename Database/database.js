const mongoose=require('mongoose');

const connectDB = async()=>{
    try {
        const mongoURI = process.env.MONGO_URI;
        await mongoose.connect(mongoURI,{
            useNewUrlParser: true,
            useUnifiedTopology:true,

        })
        console.log('MongoDB connected');

    } catch (error) {
        console.log("MongoDb connection failed", error);
        process.exit(1) //exit process with failure
    }

}

module.exports=connectDB;