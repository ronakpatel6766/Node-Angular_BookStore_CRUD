const express = require('express');
const router =express.Router();
const ctrlBooks = require('../controllers/books');


router.route('/books').get(ctrlBooks.BookList).post(ctrlBooks.creatBooksList);
router.route('/books/:bookid').get(ctrlBooks.bookReadOne).put(ctrlBooks.updateBooklist).delete(ctrlBooks.deleteBook);
router.route('/books/delete/:bookid').get(ctrlBooks.deleteBook);


module.exports = router;