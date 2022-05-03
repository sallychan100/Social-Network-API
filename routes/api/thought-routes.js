const router = require('express').Router();
const{
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought    
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThought)

router
    .route('/:userId')
    .post(createThought)


router 
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// router
//     .route('/:id/friends/:friendId')
//     .post()
//     .delete()






module.exports = router;