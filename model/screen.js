const mongoose = require("mongoose");

const screenSchema = new mongoose.Schema({
  screenNumber: {
    type: Number,
    required: true,
  },
  rows: [
    {
      row_id: {
        type: String,
        required: true
      },
      seats: [
        {
            type: Number,
            requied: true
        }
      ]
    },
  ],
});
module.exports = mongoose.model("screen", screenSchema);
