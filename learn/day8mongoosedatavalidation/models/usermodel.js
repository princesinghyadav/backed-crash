//  basic exaple of mongoose b

// const mongoose = require("mongoose");

// Define a schema
// const userSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
// });

// // Compile the model
// const User = mongoose.model("User", userSchema);

// // Create a new user
// const user = new User({ name: "Alice", age: 30 });
// user.save().then(() => console.log("User saved!"));

// // Find a user
// User.find({ name: "Alice" }).then((users) => console.log(users));



//  validation types in mongoose
// Validation Types in Mongoose:
// Required: Ensures a field is present in the document.
// Default: Provides a default value if none is specified.
// Min and Max: Restrict numeric fields to a range of values.
// Enum: Limits the field values to a predefined set.
// Custom Validators: Allow custom logic to validate field values.




// Examples: Schema with Validation  this is why we use data validation 
// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   age: { type: Number, min: 18, max: 99 },
//   email: { type: String, required: true, match: /.+\@.+\..+/ },
// });

// const User = mongoose.model("User", userSchema);

// // Valid data
// const user = new User({ name: "Alice", age: 30, email: "alice@example.com" });
// user.save().then(() => console.log("User saved!"));

// // Invalid data
// const invalidUser = new User({ name: "Bob", age: 150, email: "invalid-email" });
// invalidUser
//   .save()
//   .catch((err) => console.log("Validation error:", err.message));






// 5. Segregation of Code, Folder Structure, and Standard Coding Practices
// Introduction
// Organizing Your Code: Proper folder structure and coding practices are crucial for maintaining a clean, manageable codebase.
// Recommended Project Structure
// Models Directory: Contains all Mongoose schemas and models.
// models/userModel.js
// Controllers Directory: Holds business logic and interacts with models.
// controllers/userController.js
// Routes Directory: Defines API routes and maps them to controller functions.
// routes/userRoutes.js
// Utils Directory: Contains utility functions and helpers.
// utils/validation.js
// Example: Project Structure
// project-root/
// │
// ├── models/
// │   └── userModel.js
// │
// ├── controllers/
// │   └── userController.js
// │
// ├── routes/
// │   └── userRoutes.js
// │
// ├── utils/
// │   └── validation.js
// │
// ├── app.js
// └── package.json