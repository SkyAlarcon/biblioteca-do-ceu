const app = require("./src/app.js");

const PORT = process.env.PORT;

app.listen(PORT, () => console.log (`API listening on port: ${PORT}`));