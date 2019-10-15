const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        unique: true
    },
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
    cubes: {
        type: Array
    }
});

const Accessory = mongoose.model('Accessory', accessorySchema, 'accessories');

module.exports = Accessory;