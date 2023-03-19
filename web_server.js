const { json } = require('express');
const express = require('express');
const app = express();

// Need to import Express libraries to read POST body data (e.g. req.body)
app.use(express.json());
app.use(express.urlencoded());

// Curl is a command-line tool for sending HTTP requests to a server
// and receiving its responses. It is commonly used to test RESTful APIs
// as it allows you to simulate HTTP methods: GET, POST, PUT, PATCH and
// DELETE. 
//
// Curl comes pre-installed on unix-based OS (Mac OS, Linux). It can be
// installed on Windows also.
//
// https://gist.github.com/subfuzion/08c5d85437d5d4f00e58

// Postman is an excellent alternative to Curl. Some good tutorials:
// https://learning.postman.com/docs/introduction/overview/
// https://www.guru99.com/postman-tutorial.html 



// A note on troubleshooting.
// Be mindful of where your error is occuring exactly. For example, is it
// a Javascript issue, a NodeJS issues, or Curl issue, or an Express isssue?
//
// Googling an error for Express, when it is actually a Javascript issue,
// is not going to get you good search outcomes.

const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: "grey",
    pocketNum: 15,
    strapLength: {
      left: 26,
      right: 26,
    },
    lidOpen: false,
    toggleLid: function (lidStatus) {
      this.lidOpen = lidStatus;
      updateBackpack(`Lid status changed.`);
    },
    newStrapLength: function (lengthLeft, lengthRight) {
      this.strapLength.left = lengthLeft;
      this.strapLength.right = lengthRight;
      updateBackpack(`Strap lengths updated.`);
    },
  };

// Home page request
// curl http://localhost:3000/
app.get('/', (req, res) => {
    res.json(backpack);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});