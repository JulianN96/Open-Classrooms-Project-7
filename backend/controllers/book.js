const Book = require('../models/book')

exports.createBook = (req, res, next) => {
  const book = new Book({
    title: req.body.title,
    userId: req.body.userId,
    author: req.body.author,
    imageURL: req.body.imageURL,
    year: req.body.year,
    genre: req.body.genre,
    ratings: req.body.ratings
  });
  book.save().then(
    () => {
      res.status(201).json({
        message: 'Book created Succesfully'
      })
    .catch(
      (error) => {
        res.status(400).json({
          error: error
        })
      }
    )
    }
  )
}

exports.getOneBook = (req, res, next) => {
  Book.findOne({
    _id: req.params.id
  }).then(
    (book) => {
      res.status(200).json(book);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      })
    }
  )
}

exports.modifyBook = (req, res, next) => {
  const book = new Book({
    _id: req.params.id,
    title: req.body.title,
    userId: req.body.userId,
    author: req.body.author,
    imageURL: req.body.imageURL,
    year: req.body.year,
    genre: req.body.genre,
    ratings: req.body.ratings
  });
  Book.updateOne({_id: req.params.id, book}.then(
    ()=> {
      res.status(201).json({
        message: 'Book updated Successfully'
      });
    }
  )).catch(
    (error) => {
      res.status(400).json({
        error: error
      })
    }
  )
}

exports.deleteBook = (req,res,next) => {
  Book.deleteOne({_id: req.params.id}.then(
    ()=> {
      res.status(200).json({
        message: 'Deleted'
      })
    }
  )).catch(
    (error)=>{
      res.status(400).json({
        error: error
      })
    }
  )
}

exports.getAllBooks = (req, res, next) => {
  Book.find().then(
    (books) => {
      res.status(200).json(
        books
      );
      console.log(books)
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      })
    }
  )
}