const express = require('express');
const app = express();
const cors = require('cors');

//instanciations
const test = require("./routes/test");
const skill = require("./routes/skill");
const formations = require("./routes/formations");
const realization = require("./routes/realization")

app.use(cors());
app.use(express.json());

app.use("/test",test);
app.use("/skill",skill);
app.use("/formations",formations);
app.use("/realization", realization);

const PORT = process.env.PORT || '9001';
app.listen(PORT , () => {
    console.log(`App listen to ${PORT}`);
})
