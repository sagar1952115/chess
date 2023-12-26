import mongoose from "mongoose";
// mongoose
//   .connect(
//     "mongodb+srv://chess:chess@cluster0.asowzfi.mongodb.net/?retryWrites=true&w=majority",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then((res) => {
//     console.log("DB Connected!");
//   })
//   .catch((err) => {
//     console.log("Error while connecting to DB", err.message);
//   });

const connectDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://chess:chess@cluster0.asowzfi.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("connected to database");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDatabase();
