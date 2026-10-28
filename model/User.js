// import mongoose from 'mongoose'

// const userSchema =new mongoose.Schema({
//     name:String,
//     email:String
// })
// module.exports = mongoose.model('User', userSchema)
// ex



// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: {type: String, unique: true},
//   password:String

// });
// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// // Method to compare password
// userSchema.methods.comparePassword = function (inputPassword) {
//   return bcrypt.compare(inputPassword, this.password);
// };

// const User = mongoose.model('User', userSchema);

// export default User;









import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  name: String,
  email: {type: String, unique: true},
  password:String,
  role: {
type:String,

enum:["user","admin"],

default:"user"

  }

});

// Hash password before saving
userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare password during login
userSchema.methods.comparePassword = function (inputPassword) {
  return bcrypt.compare(inputPassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;
