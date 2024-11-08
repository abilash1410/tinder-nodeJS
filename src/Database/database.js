const mongoose = require('mongoose');
const connectDB = async () => {
    mongoose.connect('mongodb+srv://<username>:<password>@nodejs.otezc.mongodb.net/nodeJS');
}
module.exports = {connectDB}



