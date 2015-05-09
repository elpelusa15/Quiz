//GET  /quizes/question
var models = require ('../models/models.js');


exports.index = function(req, res){
         models.Quiz.findAll().then(function (quiz)  {
          res.render('quizes/index.ejs', { quizes: quizes});
})
};

exports.show = function(req, res){
         models.Quiz.findAll().then(function (quiz)  {
          res.render('quizes/show', {pregunta: quiz[0].pregunta})
})
};


//GET  /quizes/answer

exports.answer = function(req, res){
    models.Quiz.findAll().then(function (quiz)  {
          if (req.query.respuesta === quiz[0].respuesta){
          res.render('quizes/answer', {respuesta: 'Correcto'});
           }
         else{
           res.render('quizes/answer', {respuesta: 'Incorrecto'});
}
})
};

exports.author=function(req,res){
                 res.render('quizes/author', {autores: 'Autores'});
};