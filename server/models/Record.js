var { mongoose } = require('../index');

var RecordSchema = mongoose.Schema({
  isOffToday: {
    type: Boolean,
    default: false,
    require: true
  },
  isLateToday: {
    type: Boolean,
    default: false,
    require: true,
  },
  inlateTime: {
    type: Number,
    default: 0,
    validate: {
      validator: function(value) {
        return this.isOffToday === true ? true : value >=0
      },
      message: 'Positive value only'
    },
    requrie: true,
  },
  actualInlate: {
    type: Number,
    default: 0,
    validate: {
      validator: function(value) {
        return this.isOffToday === true ? true : value >=0
      },
      message: 'Positive value only'
    },
  },
  runner: { type: mongoose.Schema.ObjectId, ref: 'User' },
  runnerName: { type: mongoose.Schema.Types.String, ref: 'User' }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

exports.mongooseRecord = mongoose.model('Record', RecordSchema);
