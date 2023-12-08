import mongoose from "mongoose";


async function connectDataBase(){
    mongoose.connect("mongodb+srv://raysacarla:Carlos1969@ray.7fzbxn6.mongodb.net/filiadosnk?retryWrites=true&w=majority");

    return mongoose.connection;
}

export default connectDataBase;

