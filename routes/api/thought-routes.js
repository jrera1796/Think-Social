const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtByID,
  updateThoughtByID,
  addThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getAllThoughts);
  
router
.route('/:thoughtId')
.get(getThoughtByID)
.put(updateThoughtByID);

router.route('/:userId').post(addThought);

router
  .route('/:userId/:thoughtId')
  .post(addReaction)
  .delete(removeThought)

router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;