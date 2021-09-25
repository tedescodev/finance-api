const mongoose = require("mongoose");
const { Schema } = mongoose;

const CategoryExpenseSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  requestedBy: { type: String, required: true },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

CategoryExpenseSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("category_expense", CategoryExpenseSchema);
