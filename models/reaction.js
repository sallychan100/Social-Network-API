// const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

// const ReactionSchema = new Schema(
//     {
//         reactionId:{
//             type: Schema.Types.ObjectId,
//             default: () => new Types.ObjectId()
//         },
//         username:{
//             type: String,
//             required: true
//         },
//         reactionBody:{
//             type: String,
//             required: true,
//             maxlength: 280
//         },
//         createdAt:{
//             type: Date,
//             default: Date.now,
//             get: createdAtVal => dateFormat(createdAtVal)
//         }
//     },
//     {
//         toJSON: {
//           getters: true
//         },
//         id:false
//     }
// );

// module.exports = ReactionSchema;