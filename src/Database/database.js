const mongoose = require('mongoose');
const connectDB = async () => {
    mongoose.connect('mongodb+srv://abilash1410:Abilash@OCT@nodejs.otezc.mongodb.net/nodeJS');
}
module.exports = {connectDB}



