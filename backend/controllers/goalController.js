//Get goals
//@route GET /api/goals
//@access Private
const asyncHandler = require('express-async-handler');
const getGoals = asyncHandler(async (req,res)=>{
    res.status(200).send('Get goals');
});
const setGoals = asyncHandler(async (req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
}
    res.status(200).send('Set goals');
});
const UpdateGoals = asyncHandler(async (req,res)=>{
    res.status(200).send('Update goals');
});
const DeleteGoals = asyncHandler(async (req,res)=>{
    res.status(200).send('Delete goals');
});
module.exports = {
    getGoals,
    setGoals,
    UpdateGoals,
    DeleteGoals
};