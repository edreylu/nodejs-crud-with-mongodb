import mongoose from 'mongoose';

let userSchema = mongoose.Schema({
    name: {
        type:String,
        required: true},
    lastName: {
        type:String,
        required: true},
    age: {
        type:Number,
        required: true}
});

export default mongoose.model('User', userSchema);