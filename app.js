const express = require("express");
require("dotenv").config();
const userRouters = require("./routes/users-router");
const authRouter = require("./routes/auth-router");
const hostRouter = require("./routes/host-router");
const adminRouter= require('./routes/admin-router')

const cors = require("cors");

const app = express();
const { DEV_PORT } = process.env;

// Middlewares
app.use(cors()); // This middleware allows CROSS ORIGIN RESOURCE SHARING
app.use(express.json()); // This middleware parses incoming requests with JSON payloads

app.use((req, res, next) => {
  // module for debugging
  console.log("Request arrived to backend server");
  next();
});

app.use("/api/users", userRouters); // All incoming request on /api/users, will be handled by userRouters

app.use("/api/auth", authRouter);

app.use("/api/hosts", hostRouter);

app.use('/api/admin', adminRouter)

// app.use('/api/landing-page', )

app.listen(DEV_PORT, () => {
  console.log(`Listening on port: ${DEV_PORT}`);
});
