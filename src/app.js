const express = require("express");
const PORT_NUMBER = 4003;
const app = express();
const { connectDB } = require("./Database/database");
const {User} = require('./model/User')

app.post('/signup', async (req,res) => {
  const obj = {
    firstName: "Abilash",
    lastName: "Chandrapal",
    emailId: "abilash1410@gmail.com",
    password: "abilash@234",
    Age: 31,
    Gender: "Male",
  }
  const user = new User(obj);
  await user.save();
   res.send('User data saved successfully');
})
connectDB()
  .then(() => {
    console.log("Connected to Database successfully !!!");
    app.listen(PORT_NUMBER, () => {
        console.log("server is up and listening on port " + PORT_NUMBER);
      }); //created a web server on port 4003
  })
  .catch((err) => {
    console.error("Error connecting to Database...TRY AGAIN");
  });


console.log("starting TINDER project !!");
