import mongoose from 'mongoose';
const Schema = mongoose.Schema;
// Help with login process
import passportLocalMongoose from 'passport-local-mongoose';

let Account = new Schema({
	email: {
		type: String
	},
	password: {
		type: String
	}
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);
