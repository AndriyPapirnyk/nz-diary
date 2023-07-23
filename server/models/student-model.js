const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: String,
    surname: String,
    age: Number,
    class: String,
    password: String,
    status: String,
    subjects: {
        math: {
          type: [Number],
          default: [],
        },
        ukrainian: {
            type: [Number],
            default: [],
        },
        english: {
            type: [Number],
            default: [],
        },
        physics: {
            type: [Number],
            default: [],
        },
    }
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
