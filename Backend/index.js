const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const port = 5000;
app.use(cors());
app.use(express.json());
const axios = require("axios");

//resolve path for front end
app.use(express.static(path.resolve(__dirname, "../frontend/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

const myMessage = `I hacked you ❤️`;

app.post("/test", (req, res) => {
  const url = "https://ngl.link/api/submit";
  const payload = {
    username: "<username>",
    question: myMessage,
    deviceId: "024495e7-d669-2a4b-vd32-1476d9b93771",
    gameSlug: "",
    referrer: "",
  };

  const config = {
    headers: {
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "en-US,en;q=0.9",
      "Cache-Control": "no-cache",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Origin: "https://ngl.link",
      Pragma: "no-cache",
      Referer: "https://ngl.link/<username>",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
      "X-Requested-With": "XMLHttpRequest",
    },
  };

  function spamUser() {
    axios
      .post(url, payload, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  setInterval(function () {
    spamUser();
  }, 3000);

  res.send("Hello word");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
