const asyncHandler = require('express-async-handler');

// @desc Get goals
//@route GET /api/goals
//@access private
const getGoals = asyncHandler(async (req,res) => {
    res.status(200).json({message:'get goals'})
})

// @desc Set goal
//@route POST /api/goals
//@access private
const setGoal = asyncHandler(async (req,res) => {
    if(!req.body.text){
        res.status(400)
        throw Error('Please add a text filed')
    }

    res.status(200).json({message:'set goals'})
})

// @desc Update goal
//@route PUT /api/goals/:id
//@access private
const updateGoal = asyncHandler(async (req,res) => {
    res.status(200).json({message:`update goals ${req.params.id}`})
})

// @desc Delete goal
//@route DELETE /api/goals/:id
//@access private
const deleteGoal = asyncHandler(async (req,res) => {
    res.status(200).json({message:`delete goals ${req.params.id}`})
})


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}