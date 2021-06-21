const mongoose =require('mongoose');
const bookSchema = new mongoose.Schema({
    name:
        {
            type:String,
            required:true
        },

        
    author:
        {
            type:String,
            required:true
             
        },
    price:
        {
            type:String,
            required:true
        },
        
    category:
    {
        type:String,
        required:true
    },
    rating:
    {
        type:Number,
        required:true,
        min:0,
        max:5
    }
});
mongoose.model('Book',bookSchema);