const mongoose = require("mongoose");
const { Schema } = mongoose;

const IncomeSchema = new Schema({
  amount: { type: String, required: true },
  description: { type: String, required: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
    autopopulate: true
  },
  requestedBy: { type: String, required: true },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

IncomeSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("income", IncomeSchema);
