var mongoose = require( 'mongoose' );

var rsvpSchema = new mongoose.Schema({
  fullname: { type: String, unique: true },
  plusOne: String,
  isComing: Boolean
});

module.exports = {
  schema: rsvpSchema,
  model: mongoose.model( 'Rsvp', rsvpSchema )
};
