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
        unique: true,
        validate: {
            validator: function(v) {
                if (!this.isModified('records')) {
                    return this.model('User').findOne({ username: v })
                        .then(user => {
                            console.log('VALIDATE USER', user);
                            return !user
                        })
                }
                return true;
            },
            message: props => `${props.value} is already exist`
        }
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        enum: ['admin', 'member'],
        default: 'member'
    },
    records: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Record' }],
})

UserSchema.pre('save', function (next) {
    var user = this;
    console.log('THIS', this)
    if(user.isModified('records')) return next();
    if(!user.isModified('password')) return next();

    user.password = bcrypt.hashSync(user.password, SALT_WORK_FACTOR);
    next();
})

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    console.log('cur', candidatePassword)
    console.log('this', this)
    console.log('this', this.password)
    return cb(null, bcrypt.compareSync(candidatePassword, this.password));
}

exports.mongooseUser = mongoose.model('User', UserSchema);
