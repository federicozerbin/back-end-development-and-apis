import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.sendFile(import.meta.dirname + "/views/index.html");
});

// Do not change code above this line

app.get("/api{/:date}", (req, res) => { //route path is now "/api{/:date}" with Express 5 instead of "/api/:date?"
  const { date } = req.params;
  if (!date) { //no date 
    res.json({
      unix: new Date().getTime(), 
      utc: new Date().toUTCString()
    });
  } else { // date is not empty 

    const dateIsNumeric = /^-?\d+$/.test(date);
    const parsedDate = dateIsNumeric ? new Date(Number(date)) : new Date(date);

    const unixformat = parsedDate.getTime();
    if (Number.isNaN(unixformat)) return res.json({ error: "Invalid Date" });
    
    const utcformat = parsedDate.toUTCString();

    res.json({
      unix: unixformat, 
      utc: utcformat
    });
  }
});

// Do not change code below this line

const PORT = 8000;
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
