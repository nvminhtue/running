var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 10;

var UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    userName: {
        type: String,
        require: true,
        index: { unique: true },
    },
    password: {
        type: String,
        require: true,
    }
})

UserSchema.pre('save', (next) => {
    var user = this;

    if(!user.isModified('password')) return next();

    user.password = bcrypt.hashSync(user.password, SALT_WORK_FACTOR);
    next();

    // bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    //     if (err) return next(err);

    //     bcrypt.hash(user.password, salt, (err, hash) => {
    //         if (err) return next(err);

    //         user.password = hash;
    //         next();
    //     })
    // })
})

UserSchema.methods.comparePassword = (candidatePassword, cb) => {
    return bcrypt.compareSync(candidatePassword, this.password, (err, isMatch) => err ? cb(err) : cb(null, isMatch)
)}

module.exports = mongoose.model('User', UserSchema);