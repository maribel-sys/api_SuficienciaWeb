const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL,{useUnifiedTopology: true, useNewUrlParser: true}, () => {
    console.log("Connect DB Success");
});


