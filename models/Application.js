const mongoose = require('mongoose')
const Schema = mongoose.Schema
const applicationSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  replicas: {
    type: Number
  },
  url: {
    type: String,
  },
  version: {
    type: String,
  },
  user: {
    type: String,
  },
  status: {
    type: String,
  },
  provider: {
    type: String,
  }
})

module.exports = mongoose.model('application', applicationSchema)


