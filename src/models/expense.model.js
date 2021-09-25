const mongoose = require("mongoose");
const { Schema } = mongoose;

const ExpenseSchema = new Schema({
  amount: { type: String, required: true },
  description: { type: String, required: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
    autopopulate: true
  },
  category: [
    {
      type: Schema.Types.ObjectId,
      ref: "category_expense",
      required: true,
      autopopulate: true
    }
  ],
  requestedBy: { type: String, required: true },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

ExpenseSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("expense", ExpenseSchema);
