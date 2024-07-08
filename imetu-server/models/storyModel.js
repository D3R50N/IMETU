const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
  title: {
    type: String,
  },
  story : {
    type: String,
    required:true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },

});

storySchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Story = mongoose.model("story", storySchema);

module.exports = Story;
