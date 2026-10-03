import express from "express";
import helmet from "helmet";
import authRoutes from "./routes/auth.js";

import watchlistRoutes from "./routes/watchlist.js";

const PORT = process.env.PORT;
const app = express();

app.use(helmet());
app.use(express.json());
app.use("/api/watchlist", watchlistRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Family Movie Watchlist API");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
