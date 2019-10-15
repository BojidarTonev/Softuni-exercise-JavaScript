const mongoose = require('mongoose');

const cubicSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Cant be nameless, sry']
    },
    description:{
        type: String,
        required: true,
        minlength: [5, "Description length must be between 5 and 200 characters."],
        maxlength: [200, 'Description length must be between 5 and 200 characters.']
    },
    imageUrl: {
        type: String,
        required: [true, 'ImageUrl is required'],
        correctUrl: {
            validator: function(value){
                return value.startsWith('http') || value.startsWith('https')
            },
            message: props => `${props.value} is not a valid url.`
        }
    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: [1, 'Not valid number, sry'],
        max: [6, 'Not valid number, sry']
    },
    accessories: [{ type: mongoose.Types.ObjectId, ref: 'accessories' }],
    creatorId: {
        type: mongoose.Types.ObjectId,
        ref: 'users',
        required: [true, 'The cube must have creator']
    }
});

module.exports = mongoose.model('Cubic', cubicSchema, 'cubes');