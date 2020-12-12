const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
	email: String,
	passwordHash: String,
	googleId: String,
	facebookId: String,
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
