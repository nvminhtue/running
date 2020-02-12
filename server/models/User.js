var bcrypt = require('bcrypt');

var { mongoose } = require('../index');

const SALT_WORK_FACTOR = 10;

var UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
        index: { unique: true },
    },
    password: {
        type: String,
        require: true,
    }
})

UserSchema.pre('save', function (next) {
    var user = this;
    if(!user.isModified('password')) return next();

    user.password = bcrypt.hashSync(user.password, SALT_WORK_FACTOR);
    next();
})

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    console.log('cur', candidatePassword)
    console.log('this', this.password)
    return cb(null, bcrypt.compareSync(candidatePassword, this.password));
}

exports.mongooseUser = mongoose.model('User', UserSchema);
