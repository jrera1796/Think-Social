const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: 'Please enter a username!',
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: 'Email is required',
    match: [/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/, 'Please enter a valid email']
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
}, {
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
});

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('Pizza', userSchema);

module.exports = User;