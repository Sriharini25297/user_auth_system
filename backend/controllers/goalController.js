//Get goals
//@route GET /api/goals
//@access Private
const Goal = require('../model/goalmodel');
const User = require('../model/userModel');
const asyncHandler = require('express-async-handler');
const getGoals = asyncHandler(async (req,res)=>{
    const goals = await Goal.find({user:req.user.id});
    res.status(200).send(goals);
});
const setGoals = asyncHandler(async (req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
}
const goal = await Goal.create({
    text:req.body.text,
    user:req.user.id
});
    res.status(200).send(goal);
});
const UpdateGoals = asyncHandler(async (req,res)=>{
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400)
        throw new Error('Goal not found');
    }
    const user = await User.findById(req.user.id);
    if(!user){
        res.status(401)
        throw new Error("User not found");
    }
    //make sure the logged in user matches the goal user
    if(goal.user.toString() !== user.id){
        res.status(401);
        throw new Error("User not authorized");
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{returnDocument : 'after'});
    res.status(200).send(updatedGoal);
});
const DeleteGoals = asyncHandler(async (req,res)=>{
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400)
        throw new Error('Goal not found');
    }
     const user = await User.findById(req.user.id);
    if(!user){
        res.status(401)
        throw new Error("User not found");
    }
    //make sure the logged in user matches the goal user
    if(goal.user.toString() !== user.id){
        res.status(401);
        throw new Error("User not authorized");
    }
    await Goal.findByIdAndDelete(req.params.id);
    res.status(200).send({id:req.params.id});
});
module.exports = {
    getGoals,
    setGoals,
    UpdateGoals,
    DeleteGoals
};