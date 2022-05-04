const router = require('express').Router();
const{
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReactionById
} = require('../../controllers/thought-controller');

// /api/thoughts
router
    .route('/')
    .get(getAllThought)

// /api/thoughts/:userId
router
    .route('/:userId')
    .post(createThought)

// /api/thoughts/:thoughtId
router 
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;