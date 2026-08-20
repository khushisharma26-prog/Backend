import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.get("/jokes", (req, res) => {
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
  ];
  res.json(jokes

  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});