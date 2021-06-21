const welcome = function(req,res){
    res.render('index', {title:'Ronak book Store'});
  };
  
const display = function(req,res){
    res.render('display',{title:'Still Not implemented'})
};

  module.exports = {
    welcome,
    display
    
  };
  
  