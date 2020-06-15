const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true

    },
    time:{
        type: String,
        required: true
    },
    duration:{
        type: String,
        required: true
    },
    today:{
        type:Boolean
    },
    lastDay1:{
        type:Boolean
    },
    lastDay2:{
        type:Boolean
    },
    lastDay3:{
        type:Boolean
    },
    lastDay4:{
        type:Boolean
    },
    lastDay5:{
        type:Boolean
    },
    lastDay6:{
        type:Boolean
    },
});

const Habit = mongoose.model('Habit',habitSchema);

module.exports = Habit;