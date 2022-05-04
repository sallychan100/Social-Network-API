const {Thought, User} = require('../models')

const thoughtController = {
    getAllThought(req, res){
        Thought.find({})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },
    getThoughtById({params}, res) {
        Thought.findOne({ _id: params.thoughtId})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });

    },
    createThought({ params, body }, res) {
        console.log(params);
        Thought.create(body)
          .then(({ _id }) => {
            return User.findOneAndUpdate(
              { _id: params.userId },
              { $push: { thoughts: _id } },
              { new: true }
            );
          })
          .then(dbUserData => {
            console.log(dbUserData);
            if (!dbUserData) {
              res.status(404).json({ message: 'No user found with this id!' });
              return;
            }
            res.json({dbUserData, message: 'Thought created'});
          })
          .catch(err => res.json(err));
      },
      updateThought({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId }, 
            body, 
            { new: true, runValidators: true })
          .then(dbThoughtData => {
            if (!dbThoughtData) {
              res.status(404).json({ message: 'No thought found with this id!' });
              return;
            }
            res.json(dbThoughtData);
          })
          .catch(err => res.json(err));
      },
      deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.thoughtId })
          .then(deletedThought => {
            if (!deletedThought) {
              return res.status(404).json({ message: 'No thought found with this id!' });
            }
            return User.findOneAndUpdate(
              { thoughts: params.thoughtId },
              { $pull: { thought: params.thoughtId } },
              { new: true }
            );
          })
          .then(dbUserData => {
            if (!dbUserData) {
              res.status(404).json({ message: 'No user found with this id!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.json(err));
      },

        createReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
          { _id: params.thoughtId },
          //addeing to array
          { $push: { reactions: body} },
          { new: true}
        )
          .then(dbUserData => {
            if (!dbUserData) {
              res.status(404).json({ message: 'No reaction found with this id!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.json(err));
    },
    deleteReactionById (req, res) {
        Thought.findOneAndUpdate(
          { _id: req.thoughtId },
          //addeing to array
          { $pull: { reactions: {reactionId:req.params.reactionId }} },
          { new: true}
        )
          .then(dbReactionData => {
            if (!dbReactionData) {
              res.status(404).json({ message: 'No reaction found with this id!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.json(err));
    }
};

module.exports = thoughtController