const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const ReactionSchema = require('./reaction')

const ThoughtSchema = new Schema(
    {
        thoughtText:{
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        username:{
            type: String,
            required: true
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
          },
          // prevents virtuals from creating duplicate of _id as `id`
          id: false
    }
);

//reaction count 
ThoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length
})

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;