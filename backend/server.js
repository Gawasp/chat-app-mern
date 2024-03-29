import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello, World!!');
  });

app.get('/api/auth/signup',(req,res) => {
  console.log("signup route");
});


app.listen(PORT, () =>  console.log(`Server is running on port ${PORT}`));