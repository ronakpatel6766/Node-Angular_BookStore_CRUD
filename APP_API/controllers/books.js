const mongoose = require("mongoose");
const Book = mongoose.model("Book")

const BookList =(req,res) =>{
    Book.find().exec(function(err,Bookdata){
        if(err){
            res.status(404).json(err);
        return;    
        }
        res.status(200).json(Bookdata)
        
    });

}
const creatBooksList = (req,res)=>{
    Book.create({
        name : req.body.name,
        author : req.body.author,
        price : req.body.price,
        category : req.body.category,
        rating : req.body.rating

    }, (err,Bookdata) => {
        if(err) {
            res.status(400).json(err);
        }
        else{
            res.status(201).json(Bookdata);
        }

    });
};

const bookReadOne =(req,res) => {
    Book.findById(req.params.bookid).exec((err, Bookdata) => {
        if (!Bookdata) {
          return res.status(404).json({"message": "Book not found"});
        } 
        else if (err) {
          return res.status(404).json(err);
        }
        res.status(200).json(Bookdata);
       });
};
const updateBooklist = (req,res) => {
    if(!req.params.bookid){
        res.status(404).json({"message":"not found,bookid is required" 
    });

    }
    Book.findById(req.params.bookid).exec((err,Bookdata)=>{
        if(!Bookdata){
            res.status(404).json({"massage":"Bookid is not found"});
            return;
        }else if(err){
            res.status(400).json(err);
            return;
        }
        
        Bookdata.name = req.body.name,
        Bookdata.author = req.body.author,
        Bookdata.price = req.body.price,
        Bookdata.category = req.body.category,
        Bookdata.rating = req.body.rating
        Bookdata.save((err,Bookdata) =>{
            if(err){
                res.status(404).json(err);

            }else{
                res.status(200).json(Bookdata);
            }
        });
    }
);
};
const deleteBook =(req,res) => {
    const bookid = req.params.bookid;
    if(bookid){
        Book.findByIdAndRemove(bookid)
        .exec((err,Bookdata)=>{
            if(err){
                res.status(404).json(err);
              return;  
            }res.status(204).json(null);
        });
    }else{
        res.status(404).json({"message":"no Bookid"});
};
};

module.exports={
    BookList,
    creatBooksList,
    bookReadOne,
    updateBooklist,
    deleteBook

};