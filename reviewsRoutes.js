const express = require('express');

const reviewsController = require('../controllers/reviewsController.js');

const reviewRouter = express.Router();

reviewRouter.route('/')
.get(reviewsController.getReviews)
.post(reviewsController.addReview)

reviewRouter.route('/:id')
.put(reviewsController.replaceReview)
.delete(reviewsController.removeReview)

module.exports = reviewRouter;