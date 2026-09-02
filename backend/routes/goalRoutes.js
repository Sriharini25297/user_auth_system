const express = require('express');
const router = express.Router();
const {getGoals,setGoals,UpdateGoals,DeleteGoals} = require('../controllers/goalController');

router.route('/').get(getGoals).post(setGoals);
router.route('/:id').put(UpdateGoals).delete(DeleteGoals);
/*router.get('/',getGoals);
router.post('/',setGoals);
router.put('/:id',UpdateGoals);
router.delete('/:id',DeleteGoals);*/


module.exports = router;