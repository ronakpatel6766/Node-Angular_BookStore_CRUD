const express = require('express');
const router = express.Router();


const ctrlBook = require('../controllers/book');
const ctrlAbout = require('../controllers/about');
const ctrlMain = require('../controllers/main');

router.get('/',ctrlMain.welcome);
router.get('/display',ctrlMain.display);

router.get('/about',ctrlAbout.about_book);

router.get('/list',ctrlBook.Booklist);
router.get('/books/:bookid',ctrlBook.bookInfo);
router.route('/new').get(ctrlBook.addNewBook).post(ctrlBook.doAddNewBook);

module.exports = router;
