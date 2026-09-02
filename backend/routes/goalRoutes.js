const express = require('express');
const router = express.Router();
const {getGoals,setGoals,UpdateGoals,DeleteGoals} = require('../controllers/goalController');
const {protect} = require('../middleware/authMiddleware')
router.route('/').get(protect,getGoals).post(protect,setGoals);
router.route('/:id').put(protect,UpdateGoals).delete(protect,DeleteGoals);
/*router.get('/',getGoals);
router.post('/',setGoals);
router.put('/:id',UpdateGoals);
router.delete('/:id',DeleteGoals);*/


module.exports = router;