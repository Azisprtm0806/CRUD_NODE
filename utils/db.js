const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/contact", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Membuat Schema
// const Contact = mongoose.model("Contact", {
//   nama: {
//     type: String,
//     required: true,
//   },
//   noHp: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//   },
// });

// menambah 1 data
// const contact1 = new Contact({
//   nama: "Erik",
//   noHp: "0895349139250",
//   email: "erik08@gmail.com",
// });

// // simpan ke collection
// contact1.save().then((contact) => console.log(contact));
