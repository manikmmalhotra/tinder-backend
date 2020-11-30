import mongoose from 'mongoose';

const cardSchemas = mongoose.Schema({
    name: String,
    imgUrl: String,
});

export default mongoose.model("cards", cardSchemas);