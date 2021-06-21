const request = require('request');

const apiOptions = {
    server:'http://localhost:3000'
};


const _renderHomepage = function(req,res,responseBody){
    res.render('list-display',{
        books:responseBody
    })
}

const Booklist = function(req,res){

    const path = '/api/books';
    const requestOptions = {
        url : apiOptions.server + path,
        method :'GET',
        json :{}
    };
    request(
        requestOptions,
        (err, response, body) => {
        _renderHomepage(req,res,body);
        }
   );
};

const _renderDetailPage = function(req,res,responseBody){
    res.render('book-info',{
        currentbook : responseBody
    });
};

const bookInfo = function(req,res){
    const path = `/api/books/${req.params.bookid}`;
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {}

    };

    request(
        requestOptions,
        (err,response,body) => {
            _renderDetailPage(req,res,body);
        }
    );
};
const _renderCreatePage =function(req,res){
    res.render('create-new-book',{
        title:"Create New book"

    });
};
const addNewBook = function(req,res){
    _renderCreatePage(req,res);
};
const doAddNewBook = function(req,res){
    const path = '/api/books';
    const postdata = {
        name:req.body.name,
        author:req.body.author,
        price:req.body.price,
        category:req.body.category,
        rating:req.body.rating
    };
    const requestOptions ={
        url:apiOptions.server + path,
        method:'POST',
        json:postdata
  };
    request(
        requestOptions,
        (err,response,body) => {
            if (response.statusCode===201){
                res.redirect('/list');
            }
        }
    
    );
}; 


module.exports = {
   bookInfo,
   Booklist,
   doAddNewBook,
   addNewBook
    
};