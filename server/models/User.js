var bcrypt = require('bcrypt');

var { mongoose } = require('../index');

const SALT_WORK_FACTOR = 10;

var UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  username: {
    type: String,
    require: true,
    unique: true,
    validate: {
      validator: async function(v) {
        const foundUser = await this.model('User').findOne({ username: v });
        if (!foundUser) {
          return true;
        }
      },
      message: props => `${props.value} is already exist`
    }
  },
  password: {
    type: String,
    require: true
  },
  role: {
    type: String,
    enum: ['admin', 'member'],
    default: 'member'
  }
});

UserSchema.pre('save', function(next) {
  var user = this;
  if (user.isModified('records')) return next();
  if (!user.isModified('password')) return next();

  user.password = bcrypt.hashSync(user.password, SALT_WORK_FACTOR);
  next();
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  return cb(null, bcrypt.compareSync(candidatePassword, this.password));
};

exports.mongooseUser = mongoose.model('User', UserSchema);
