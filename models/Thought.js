const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
    {
        // thoughts properties
    },
    {
        toJSON: {
            virtuals: true,
          },
          // prevents virtuals from creating duplicate of _id as `id`
          id: false
    }
);

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;