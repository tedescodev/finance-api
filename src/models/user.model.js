const mongoose = require("mongoose");
const { Schema } = mongoose;

const validator = require("validator");
const { compareSync, hashSync, genSaltSync } = require("bcryptjs");

const UserSchema = new Schema({
  name: { type: String, required: true },
  username: {
    type: String,
    required: true,
    validate: (value) => {
      const regexp =
        /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;

      return regexp.test(value);
    },
  },
  email: {
    type: String,
    required: true,
    validate: (value) => validator.isEmail(value),
  },
  password: { type: String, required: true },
  imgUser: { type: String, required: false },
  requestedBy: { type: String, required: true },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

UserSchema.methods.toJSON = function () {
  let user = this.toObject();
  delete user.password;
  return user;
};

UserSchema.methods.comparePasswords = function (password) {
  return compareSync(password, this.password);
};

UserSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  const salt = genSaltSync(10);
  const hashedPassword = hashSync(user.password, salt);
  user.password = hashedPassword;
  next();
});

module.exports = mongoose.model("user", UserSchema);
