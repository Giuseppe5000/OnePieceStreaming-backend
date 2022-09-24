const express = require('express');
const cors = require('cors');

const app = express();

let corsOptions = {
    origin: "*"
  };
  
app.use(cors(corsOptions));

require("./app/routes/routes.js")(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
