const mongoose = require('mongoose')

mongoose.Promise = global.Promise
const url = 'mongod://'

mongoose.connect(url)


class Model extends mongoose.Model{

}


