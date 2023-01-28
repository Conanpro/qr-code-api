const express = require("express");
const qr = require("qr-image");
const app = express();

app.get("/qr", (req, res) => {
  const { url } = req.query;
  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }
  const qr_svg = qr.imageSync(url, { type: "svg" });
  res.type("svg");
  res.send(qr_svg);
});

app.listen(3000, () =>
  console.log("QR code generator listening on port 3000!")
);
