import mongoose from "mongoose";

const idadeSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    titulo:{type: String, required: true},
    raca:{type: String}
}, {versionKey:false}
);

const idade = mongoose.model("idade", idadeSchema);

export default idade;