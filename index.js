const server = require("./server");
require("dotenv").config();
const port = process.env.PORT || 5001;

server.listen(port, () => {
  console.log("<<<SERVER ON 5K>>>");
});
